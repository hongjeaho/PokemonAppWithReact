import { type Customer } from '@/type/Customer'
import { atom, selector } from 'recoil'
import { localStorageEffect } from '../recoilEffect'

export const customerState = atom<Customer | null>({
  key: 'customer',
  default: null,
  effects: [localStorageEffect('customer')]
})

export const isLoginSelector = selector<boolean>({
  key: 'isLoginSelector',
  get: ({get}) => get(customerState) !== null,
})