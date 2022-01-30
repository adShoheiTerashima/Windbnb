package handler

import (
	"net/http"

	property "github.com/adShoheiTerashima/Windbnb/properties/domain"
	"github.com/labstack/echo/v4"
)

// PropertyHandler 施設関連の振り分け
type PropertyHandler struct{}

// NewPropertyHandler インスタンス生成
func NewPropertyHandler() *PropertyHandler {
	return &PropertyHandler{}
}

// Search 検索
func (p *PropertyHandler) Search(c echo.Context) error {
	request := &property.SearchRequest{}
	if err := c.Bind(request); err != nil {
		c.Echo().Logger.Error(err)
		return echo.ErrBadRequest
	}
	if err := c.Validate(request); err != nil {
		c.Echo().Logger.Error(err)
		return echo.ErrBadRequest
	}
	test := property.NewProperty(*request)
	return c.JSON(http.StatusOK, test.GetCity()) // dummy
}
