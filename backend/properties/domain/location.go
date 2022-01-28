package domain

// Location
type Location struct {
	city    string
	country string
}

// NewLocation インスタンス生成
func NewLocation(location Location) *Location {
	return &Location{
		city:    location.city,
		country: location.city,
	}
}
