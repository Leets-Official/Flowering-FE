import { Header, Button } from '@/components'
import { useNavigate } from 'react-router'

const ItemPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col">
      <Header leftIcon="HomeIcon" />
      <div className="mx-6 mt-5 flex flex-col items-center gap-12">
        <div className="font-lg text-[#282828]">Object</div>
        <div className="h-[18.75rem] w-60">
          <img src={`/src/assets/images/butterfly.png`} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="font-lg text-[#6e6e6e]">나비 무리</div>
          <div className="font-xs text-[#959595]">우정을 위한 꽃 어쩌구</div>
        </div>
        <Button
          size="lg"
          className="mb-2.5"
          onClick={() => navigate('/collection')}
        >
          확인
        </Button>
      </div>
    </div>
  )
}

export default ItemPage
