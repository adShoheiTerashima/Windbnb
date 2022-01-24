import { FORM_TYPE } from '@lib/utils/const'
export type focusFormType = typeof FORM_TYPE[keyof typeof FORM_TYPE]
