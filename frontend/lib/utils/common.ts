export const isNumber = (n: any): n is number => !isNaN(Number(n)) && n > 0
export const isString = (s: any): s is string => typeof s === 'string'
export const _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export type rowQuery = {
  city: any
  country: any
  adults: any
  children: any
}
export type query = {
  city: string
  country: string
  adults: number
  children: number
}
export const formattedQuery = (row: rowQuery): query => {
  return {
    city: isString(row.city) ? row.city : '',
    country: isString(row.country) ? row.country : '',
    adults: isNumber(row.adults) ? +row.adults : 0,
    children: isNumber(row.children) ? +row.children : 0,
  }
}
