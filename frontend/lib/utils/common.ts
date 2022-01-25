export const isNumber = (n: any): n is number => !isNaN(Number(n)) && n > 0
export const isString = (s: any): s is string => typeof s === 'string'
export const _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
