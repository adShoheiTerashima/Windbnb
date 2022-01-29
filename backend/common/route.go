package common

import (
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
)

// Route エンドポイント管理
func Route(e *echo.Echo) {
	// ここでhandlerをnewする

	// 認証が不要なエンドポイント
	e.GET("/health", func(c echo.Context) error {
		return c.NoContent(http.StatusOK)
	})
	e.GET("/servertime", func(c echo.Context) error {
		return c.String(http.StatusOK, time.Now().UTC().Format(time.RFC3339))
	})

	// 認証が必要なエンドポイント
	// r := e.Group("/")
	// r.Use(middleware.JWT([]byte(os.Getenv("JWT_SECRET"))))
	// r.POST("XXX/:XXX", XXX)
}
