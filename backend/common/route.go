package common

import (
	"net/http"
	"time"

	"github.com/labstack/echo/v4"

	property "github.com/adShoheiTerashima/Windbnb/properties/handler"
)

// Route エンドポイント管理
func Route(e *echo.Echo) {
	// ここでhandlerをnewする
	propertyHandler := property.NewPropertyHandler()

	// 認証が不要なエンドポイント
	api := e.Group("/api/")

	api.GET("health", func(c echo.Context) error {
		return c.NoContent(http.StatusOK)
	})
	api.GET("servertime", func(c echo.Context) error {
		return c.String(http.StatusOK, time.Now().UTC().Format(time.RFC3339))
	})
	api.GET("search", propertyHandler.Search)

	// 認証が必要なエンドポイント
	// r := e.Group("/")
	// r.Use(middleware.JWT([]byte(os.Getenv("JWT_SECRET"))))
	// r.POST("XXX/:XXX", XXX)
}
