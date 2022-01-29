package main

import (
	"net/http"
	"os"
	"time"
	_ "time/tzdata"

	"github.com/adShoheiTerashima/Windbnb/common"
	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/gommon/log"
)

func Hello(w http.ResponseWriter, r *http.Request) {
	msg := "Hello World"
	w.Write([]byte((msg)))
}

type customValidator struct {
	validator *validator.Validate
}

func (cv *customValidator) Validate(i interface{}) error {
	return cv.validator.Struct(i)
}

const location = "Asia/Tokyo"

func main() {

	loc, err := time.LoadLocation(location)
	if err != nil {
		loc = time.FixedZone(location, 9*60*60)
	}
	time.Local = loc
	e := echo.New()
	// log level
	e.Logger.SetLevel(log.INFO)

	e.Validator = &customValidator{validator: validator.New()}
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())

	// debug用cors設定
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{os.Getenv("ALLOW_HOST")},
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	}))

	// ルーティング
	common.Route(e)

	e.Logger.Fatal(e.Start(":1323"))
}
