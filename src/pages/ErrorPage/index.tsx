import { Button } from '@/components'
import { useNavigate } from 'react-router'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full">
      <div className="flex h-full flex-col justify-center">
        <div>페이지를 찾을 수 없습니다.</div>
        <div>
          페이지를 다시 시작해 주세요. <br />
          '닫기'를 누르면 기존 페이지로 돌아 갑니다.
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

export default ErrorPage
