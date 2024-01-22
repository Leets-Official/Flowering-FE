export interface BouquetInfo {
  description: string | null
  dDay: string | null
  bouquetDesign: {
    wrapper: string
    ribbon: string
    item1: string | undefined
    item2: string | undefined
    item3: string | undefined
  }
  bouquets: {
    bouquetId: number
    flowers: {
      flowerId: number
      sender: string
      flowerType: string
    }[]
  }[]
}

export interface LoginInfo {
  userId: string
  email: string
  nickname: string
  token: {
    accessToken: string
    refreshToken: string
  }
}
export interface LetterSent {
  flowerId: number
  receiver: string
  letterType: string
}

export interface LetterSentInfo {
  letterSentInfo: LetterSent[]
}

export interface LetterReceived {
  flowerId: number
  sender: string
  flowerType: string
}

export interface LetterReceivedInfo {
  letterReceivedInfo: LetterReceived[]
}

export interface FlowerInfo {
  flowerResponse: {
    letter: string
    flowerType: string
    cardType: string
  }
}
