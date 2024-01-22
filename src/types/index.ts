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
  flowerId: 0
  receiver: 'string'
  letterType: 'string'
}

export interface LetterSentInfo {
  letterSentResponse: LetterSent[]
}

export interface FlowerInfo {
  flowerResponse: {
    letter: 'string'
    flowerType: 'string'
    cardType: 'string'
  }
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
