// location周りの値オブジェクト

type locationValue = {
  city: string
  country: string
}
export class LocationValueObject {
  private vCity: string = ''
  private vCountry: string = ''

  constructor(city: string, country: string) {
    this.vCity = city
    this.vCountry = country
  }

  set value({ city, country }: locationValue) {
    this.vCity = city
    this.vCountry = country
  }
  get value(): locationValue {
    return { city: this.city, country: this.country }
  }

  get location(): string {
    if (this.country === '') {
      return ''
    }
    if (this.city === '') {
      return this.country
    }
    return `${this.city}, ${this.country}`
  }
  get city(): string {
    return this.vCity
  }
  get country(): string {
    return this.vCountry
  }
}
