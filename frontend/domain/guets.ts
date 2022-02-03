// location周りの値オブジェクト

type guestsValue = {
  adults: number
  children: number
}
export class GuestsValueObject {
  private vAdults: number = 0
  private vChildren: number = 0

  constructor(adults: number, children: number) {
    this.vAdults = adults
    this.vChildren = children
  }
  get adults(): number {
    return this.vAdults
  }
  set adults(adults: number) {
    this.vAdults = adults > 0 ? adults : 0
  }
  get children(): number {
    return this.vChildren
  }
  set children(children: number) {
    this.vChildren = children > 0 ? children : 0
  }

  set value({ adults, children }: guestsValue) {
    this.vAdults = adults > 0 ? adults : 0
    this.vChildren = children > 0 ? children : 0
  }
  get value(): guestsValue {
    return { adults: this.vAdults, children: this.vChildren }
  }

  get guests(): number {
    return this.adults + this.children
  }

  get isZeroGuest(): boolean {
    return this.guests === 0
  }
}
