import ribbon1 from '@/assets/images/create_bouquet/ribbon/ribbon1.png'
import ribbon2 from '@/assets/images/create_bouquet/ribbon/ribbon2.png'
import ribbon3 from '@/assets/images/create_bouquet/ribbon/ribbon3.png'
import black_wrapper from '@/assets/images/create_bouquet/wrapper/black_wrapper.png'
import white_wrapper from '@/assets/images/create_bouquet/wrapper/white_wrapper.png'

interface RibbonProps {
  wrapper: string
  ribbon: string
  setRibbon: React.Dispatch<React.SetStateAction<string>>
}

const Ribbon = ({ wrapper, ribbon, setRibbon }: RibbonProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="mx-6 mt-5 flex flex-col gap-1">
        <div className="font-lg">꽃다발 끈을 골라 주세요!</div>
        <div className="font-ls">세 가지 중 마음에 드는 끈을 골라 주세요.</div>
      </div>
      <div className="mx-6 flex h-full flex-col items-center justify-center">
        <div className="h-[60%] w-full rounded-[1.5rem] border border-black">
          {wrapper == 'black' && (
            <img src={black_wrapper} className="aspect-auto" />
          )}
          {wrapper == 'white' && (
            <img src={white_wrapper} className="aspect-auto" />
          )}
        </div>
        <div className="mt-4 flex h-[56px] w-full flex-nowrap justify-center gap-5 overflow-x-auto scrollbar-hide">
          <img
            src={ribbon1}
            onClick={() => setRibbon('1')}
            className={`rounded-full ${ribbon == '1' && 'border-2'}`}
          />
          <img
            src={ribbon2}
            onClick={() => setRibbon('2')}
            className={`rounded-full ${ribbon == '2' && 'border-2'}`}
          />
          <img
            src={ribbon3}
            onClick={() => setRibbon('3')}
            className={`rounded-full ${ribbon == '3' && 'border-2'}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Ribbon
