import { Button, Header } from '@/components'

const RibbonPage = () => {
  return (
    <>
      <Header leftIcon="GoBackIcon" />
      <div className="mx-6 mt-5 flex flex-col gap-1">
        <div className="font-lg">꽃다발 끈을 골라 주세요!</div>
        <div className="font-ls">세 가지 중 마음에 드는 끈을 골라 주세요.</div>
      </div>
      <div className="mx-6 mt-[3.25rem] flex flex-col items-center justify-center">
        <div className="h-[17.5rem] w-full rounded-[1.5rem] border border-black"></div>
        <div className="mt-4 flex h-[3.5rem] w-[3.5rem] gap-1">
          <img src="/src/assets/images/1.png" />
        </div>
        <Button className="mt-5">다음</Button>
      </div>
    </>
  )
}

export default RibbonPage
