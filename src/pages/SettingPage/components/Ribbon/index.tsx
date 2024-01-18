interface RibbonProps {
  ribbon: string
  setRibbon: React.Dispatch<React.SetStateAction<string>>
}

const Ribbon = ({ribbon, setRibbon}: RibbonProps) => {
  return (
    <>
      <div className="mx-6 mt-5 flex flex-col gap-1">
        <div className="font-lg">꽃다발 끈을 골라 주세요!</div>
        <div className="font-ls">세 가지 중 마음에 드는 끈을 골라 주세요.</div>
      </div>
      <div className="mx-6 mt-[3.25rem] flex flex-col items-center justify-center">
        <div className="h-[17.5rem] w-full rounded-[1.5rem] border border-black"></div>
        <div className="w-hull mt-4 flex h-[3.5rem] flex-nowrap gap-5 overflow-x-auto scrollbar-hide">
          <img src="/src/assets/images/1.png" />
          <img src="/src/assets/images/1.png" />
          <img src="/src/assets/images/1.png" />
          <img src="/src/assets/images/1.png" />
          <img src="/src/assets/images/1.png" />
        </div>
      </div>
    </>
  )
}

export default Ribbon
