interface WrapperProps {
  wrapper: string
  setWrapper: React.Dispatch<React.SetStateAction<string>>
}

const Wrapper = ({ wrapper, setWrapper }: WrapperProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="mx-6 mt-5 flex flex-col gap-1">
        <div className="font-lg">꽃다발 포장지를 골라 주세요!</div>
        <div className="font-ls">
          화이트, 블랙 중 마음에 드는 포장지를 골라 주세요.
        </div>
      </div>
      <div className="mx-6 flex h-full flex-col justify-center ">
        <div className="h-[17.5rem] w-full rounded-[1.5rem] border border-black"></div>
        <div className="w-hull mt-4 flex h-[3.5rem] flex-nowrap justify-center gap-5 overflow-x-auto scrollbar-hide">
          <img src="/src/assets/images/1.png" onClick={() => setWrapper('1')} />
          <img src="/src/assets/images/1.png" />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
