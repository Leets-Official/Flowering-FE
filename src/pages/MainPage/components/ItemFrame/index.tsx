import { useState, useEffect } from 'react'

interface ItemFrameProps {
  currentItem1?: string
  currentItem2?: string
  currentItem3?: string
}

const ItemFrame = ({
  currentItem1,
  currentItem2,
  currentItem3,
}: ItemFrameProps) => {
  const [item1Loading, setItem1Loading] = useState<boolean>(
    currentItem1 !== 'undefined' ? true : false,
  )
  const [item2Loading, setItem2Loading] = useState<boolean>(
    currentItem2 !== 'undefined' ? true : false,
  )
  const [item3Loading, setItem3Loading] = useState<boolean>(
    currentItem3 !== 'undefined' ? true : false,
  )
  const [allItemsLoaded, setAllItemsLoaded] = useState<boolean>(false)

  const getItemUrl = (name: string) => {
    const image = new URL(
      `/src/assets/images/bigItems/${name}.png`,
      import.meta.url,
    ).href

    return image
  }

  useEffect(() => {
    if (!item1Loading && !item2Loading && !item3Loading) {
      setAllItemsLoaded(true)
    }
  }, [item1Loading, item2Loading, item3Loading])

  return (
    <>
      {currentItem1 && currentItem1 !== 'undefined' && (
        <img
          src={getItemUrl(currentItem1)}
          onLoad={() => setItem1Loading(false)}
          alt="item1"
          className={`pointer-events-none absolute aspect-[1/2] -rotate-[15deg] -scale-x-100 object-contain ${currentItem1.includes('풀꽃') ? 'left-1/2 top-1/2 z-0 w-[70%] -translate-x-[88%] -translate-y-[72%]' : 'left-1/4 top-1/4 z-40 w-[25%] -translate-x-[80%] -translate-y-[82%]'} ${!allItemsLoaded ? 'hidden' : ''}`}
        />
      )}
      {currentItem2 && currentItem2 !== 'undefined' && (
        <img
          src={getItemUrl(currentItem2)}
          onLoad={() => setItem2Loading(false)}
          alt="item2"
          className={`pointer-events-none absolute aspect-[1/2] rotate-[15deg] object-contain ${currentItem2.includes('풀꽃') ? 'left-1/2 top-1/2 z-0 w-[70%] -translate-x-[12%] -translate-y-[72%]' : 'left-3/4 top-1/4 z-40 w-[25%] -translate-x-[20%] -translate-y-[82%]'} ${!allItemsLoaded ? 'hidden' : ''}`}
        />
      )}
      {currentItem3 && currentItem3 !== 'undefined' && (
        <img
          src={getItemUrl(currentItem3)}
          onLoad={() => setItem3Loading(false)}
          alt="item3"
          className={`pointer-events-none absolute left-1/2 top-1/2 aspect-[1/2] -translate-y-[62%] rotate-[15deg] object-contain ${currentItem3.includes('풀꽃') ? 'z-[7] w-[70%] -translate-x-[40%]' : 'z-40 w-[25%] -translate-x-[20%]'} ${!allItemsLoaded ? 'hidden' : ''}`}
        />
      )}
    </>
  )
}

export default ItemFrame
