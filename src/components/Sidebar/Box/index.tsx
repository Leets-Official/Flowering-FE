import Content from '@/components/Sidebar/Content'
import { Link } from 'react-router-dom'

const Box = () => {
  return (
    <>
      <div className="flex h-screen w-[315px] flex-col rounded-l-[50px] bg-white pl-10 pt-10">
        <Link to="/login">
          <p className="mb-8 text-[22px]">로그인 후 사용하세요!</p>
        </Link>
        <Content content="MY" route="/" />
        <Content content="SHOP" route="/" />
        <Content content="LUCKY DRAW" route="/" />
        <Content content="STORAGE" route="/" />
        <Content content="MY FLING" route="/" />
      </div>
    </>
  )
}

export default Box
