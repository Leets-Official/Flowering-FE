import { atom } from 'recoil'
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", //원하는 key 값 입력
  storage: localStorage,
})

export const userIdState = atom({
  key: 'userIdState',
  default: '',
  effects_UNSTABLE: [persistAtom]
})
