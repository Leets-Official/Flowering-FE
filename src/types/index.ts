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
  code: number
  message: string
  data: {
    userId: string
    email: string
    nickname: string
    token: {
      accessToken: string
      refreshToken: string
    }
  }
}
export interface LetterSent {
  flowerId: number
  receiver: string
  flowerType: string
}

export interface LetterSentInfo {
  code: number
  message: string
  data: LetterSent[]
}

export interface LetterReceived {
  flowerId: number
  sender: string
  flowerType: string
}

export interface LetterReceivedInfo {
  code: number
  message: string
  data: LetterReceived[]
}

export interface FlowerInfo {
  code: number
  message: string
  data: {
    letter: string
    flowerType: string
    cardType: string
  }
}

export interface ItemsInfo {
  data: {
    flowers: [
      {
        id: number
        type: string
        owned: boolean
        amount: number
      },
    ]
    decoItems: [
      {
        id: number
        type: string
        owned: boolean
      },
    ]
    cardItems: [
      {
        id: 0
        type: string
        owned: boolean
        amount: number
      },
    ]
  }
}
export interface UserInfo {
  code: number
  message: string
  data: {
    userId: string
    email: string
    nickname: string
    description: string
    coin: number
    dday: string
  }
}
export interface WriteLetterInfo {
  letter: string
  cardType: string
  flowerType: string
}
export interface DecoItemInfo {
  itemId: number
  itemName: string
  price: number
}

export interface FlowerItemInfo {
  itemId: number
  flowerName: string
  price: number
}

export interface LetterItemInfo {
  itemId: number
  letterName: string
  price: number
}
export interface StoreInfo {
  code: number
  message: string
  data: {
    decoItems: DecoItemInfo[]
    flowerItems: FlowerItemInfo[]
    letterItems: LetterItemInfo[]
  }
}
export interface StoreFlowerInfo {
  flowerItemId: number
  count: number
}
export interface StoreDecoInfo {
  decoId: number
}
export interface StoreCardInfo {
  cardId: number
  count: number
}

export interface ItemInfo {
  code: number
  message: string
  data: {
    itemName: string
    description: string
  }
}
