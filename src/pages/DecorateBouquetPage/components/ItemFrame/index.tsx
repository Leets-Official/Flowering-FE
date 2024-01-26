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
  const getItemUrl = (name: string) => {
    const image = new URL(
      `/src/assets/images/bigItems/${name}.png`,
      import.meta.url,
    ).href

    return image
  }

  return (
    <>
      {currentItem1 && (
        <img
          src={getItemUrl(currentItem1)}
          alt="item1"
          className={`absolute aspect-[1/2] w-[70%] -rotate-[15deg] -scale-x-100 object-contain ${currentItem1.includes('풀꽃') ? 'left-1/2 top-1/2 z-0 -translate-x-[88%] -translate-y-[65%]' : 'left-1/4 top-1/4 z-40 w-[25%] -translate-x-[80%] -translate-y-[75%]'}`}
        />
      )}
      {currentItem2 && (
        <img
          src={getItemUrl(currentItem2)}
          alt="item2"
          className={`absolute aspect-[1/2] w-[70%] rotate-[15deg] object-contain ${currentItem2.includes('풀꽃') ? 'left-1/2 top-1/2 z-0 -translate-x-[12%] -translate-y-[65%]' : 'left-3/4 top-1/4 z-40 w-[25%] -translate-x-[20%] -translate-y-[75%]'}`}
        />
      )}
      {currentItem3 && (
        <img
          src={getItemUrl(currentItem3)}
          alt="item3"
          className={`absolute left-1/2 top-1/2 aspect-[1/2] w-[70%] -translate-y-[58%] rotate-[15deg] object-contain ${currentItem3.includes('풀꽃') ? 'z-[7] -translate-x-[40%]' : 'z-40 w-[25%] -translate-x-[20%]'}`}
        />
      )}
    </>
  )
}

export default ItemFrame
