import black from '@/assets/images/create_bouquet/color/black.png'
import white from '@/assets/images/create_bouquet/color/white.png'

interface WrapperProps {
  wrapper: string
  setWrapper: React.Dispatch<React.SetStateAction<string>>
}

const Wrapper = ({ wrapper, setWrapper }: WrapperProps) => {
  const getWrapperImageUrl = (wrapper: string) => {
    return new URL(
      `/src/assets/images/create_bouquet/wrapper/${wrapper}_wrapper.png`,
      import.meta.url,
    ).href
  }

  return (
    <div className="flex h-full flex-col">
      <div className="mx-6 mt-5 flex flex-col gap-1">
        <div className="font-lg">꽃다발 포장지를 골라 주세요!</div>
        <div className="font-ls">
          화이트, 블랙 중 마음에 드는 포장지를 골라 주세요.
        </div>
      </div>
      <div className="mx-6 flex h-full flex-col justify-center ">
        <div className="flex h-[18rem] w-full justify-center rounded-[1.5rem] border border-black">
          {wrapper && (
            <img
              src={getWrapperImageUrl(wrapper)}
              className="aspect-auto h-full"
            />
          )}
        </div>
        <div className="w-hull mt-4 flex h-[56px] flex-nowrap justify-center gap-5 overflow-x-auto scrollbar-hide">
          <img
            src={black}
            onClick={() => setWrapper('black')}
            className={`rounded-full ${wrapper == 'black' && 'rounded-full border-[1px] border-gray-300'}`}
          />
          <img
            src={white}
            onClick={() => setWrapper('white')}
            className={`rounded-full ${wrapper == 'white' && 'rounded-full border-[1px] border-gray-300'}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
