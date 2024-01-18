import { atom } from 'recoil'

export const selectedFlowerState = atom({
  key: 'selectedFlowerState',
  default: '포인세티아',
})

export const selectedCardState = atom({
  key: 'selectedCardState',
  default: 'redPaper',
})
export const letterContentState = atom({
  key: 'letterContentState',
  default: '',
})
