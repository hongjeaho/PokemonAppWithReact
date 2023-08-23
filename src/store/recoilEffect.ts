import { type AtomEffect } from "recoil"

export const localStorageEffect = <T>(key: string): AtomEffect<T> => ({setSelf, onSet}) => {
  const savedVale = localStorage.getItem(key)
  if(savedVale != null) {
    setSelf(JSON.parse(savedVale))
  }

  onSet((newValue, _, isReset) => {
    isReset 
    ? localStorage.removeItem(key)
    : localStorage.setItem(key, JSON.stringify(newValue))
  })
}