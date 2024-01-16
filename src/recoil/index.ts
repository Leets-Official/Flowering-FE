import { atom } from 'recoil'

export const selectedFlowerIndexState = atom({
  key: 'selectedFlowerIndexState',
  default: 0,
})

export const selectedCardIndexState = atom({
  key: 'selectedCardIndexState',
  default: 0,
})
export const letterContentState = atom({
  key: 'letterContentState',
  default: '',
})
