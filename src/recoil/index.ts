import { atom, selector } from 'recoil'

//예시로 입력해준 함수들입니다.
export const textState = atom<string>({
  key: 'textState',
  default: '',
})

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState)

    return text.length
  },
})

export const DDayState = atom<string>({
  key: 'dDayState',
  default: '',
})
export const NameState = atom<string>({
  key: 'nameState',
  default: '',
})
export const WrapperState = atom<string>({
  key: 'wrapperState',
  default: '',
})
export const RibbonState = atom<string>({
  key: 'ribbonState',
  default: '',
})
