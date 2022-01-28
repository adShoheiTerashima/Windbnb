/*
* property.go
* いわゆるエンティティ
* 特に困るような処理もないので、貧血かも
 */
package domain

import "net/url"

type SearchRequest struct {
	City        string
	Country     string
	Adults      uint
	Children    uint
	IsSuperHost bool
	Type        string
}

type SearchProperty struct {
	city        string
	country     string
	guests      uint
	isSuperHost bool
	title       string
	rating      float32
	propType    string
	beds        uint
	photo       url.URL
}

// NewPropertyInput インスタンス生成
func NewProperty(req SearchRequest) *SearchProperty {
	property := &SearchProperty{}

	property.SetCity(req.City)
	property.SetCountry(req.Country)
	property.SetGuests(req.Adults, req.Children)
	property.SetIsSuperHost(req.IsSuperHost)
	property.SetType(req.Type)

	return property
}

func (s *SearchProperty) SetCity(city string) {
	s.city = city
}
func (s *SearchProperty) GetCity() string {
	return s.city
}
func (s *SearchProperty) SetCountry(country string) {
	s.country = country
}
func (s *SearchProperty) GetCountry() string {
	return s.country
}

func (s *SearchProperty) SetGuests(adults uint, children uint) {
	s.guests = adults + children
}
func (s *SearchProperty) GetGuests() uint {
	return s.guests
}

func (s *SearchProperty) SetIsSuperHost(isSuperHost bool) {
	s.isSuperHost = isSuperHost
}
func (s *SearchProperty) GetIsSuperHost() bool {
	return s.isSuperHost
}

func (s *SearchProperty) SetTitle(title string) {
	s.title = title
}
func (s *SearchProperty) GetTitle() string {
	return s.title
}

func (s *SearchProperty) SetRating(rate float32) {
	if rate > 0 {
		s.rating = rate
	}
	s.rating = 0
}
func (s *SearchProperty) GetRating() float32 {
	return s.rating
}

func (s *SearchProperty) SetType(propType string) {
	switch propType {
	case "Entire apartment":
		s.propType = "Entire apartment"
	case "Entire house":
		s.propType = "Entire house"
	case "Private room":
		s.propType = "Private room"
	}
}
func (s *SearchProperty) GetType() string {
	return s.propType
}

func (s *SearchProperty) SetBeds(beds uint) {
	s.beds = beds
}
func (s *SearchProperty) GetBeds() uint {
	return s.beds
}

func (s *SearchProperty) SetPhoto(photo string) error {
	u, err := url.Parse(photo)
	if err != nil {
		return err
	}
	s.photo = *u
	return nil
}
func (s *SearchProperty) GetPhoto() url.URL {
	return s.photo
}
