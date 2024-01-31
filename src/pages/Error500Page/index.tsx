import { Button } from '@/components'
import { useNavigate } from 'react-router'

const Error500Page = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col">
      <div className="mx-6 flex h-full flex-col items-center justify-center gap-6">
        <div className="font-lg">네트워크 에러가 발생하였습니다.</div>
        <div className="font-ls flex flex-col items-center gap-1 text-gray-200">
          <div>'닫기'를 누르면 홈으로 돌아 갑니다.</div>
        </div>
      </div>
      <div className="font-md px-6 py-5">
        <Button
          onClick={() => {
            navigate('/')
          }}
        >
          닫기
        </Button>
      </div>
    </div>
  )
}

export default Error500Page
