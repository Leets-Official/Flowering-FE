import Content from '@/components/Sidebar/Content'
import { Link } from 'react-router-dom'

const Box = () => {
  return (
    <>
      <div className="flex h-screen w-[315px] flex-col gap-8 rounded-l-[50px] bg-white pl-10 pt-10">
        <Link to="/login">
          <p className="text-[22px] font-extrabold">로그인 후 사용하세요!</p>
        </Link>
        <div className="flex flex-col gap-5 font-extralight text-gray-500">
          <Content content="MY" route="/" />
          <Content content="SHOP" route="/" />
          <Content content="LUCKY DRAW" route="/" />
          <Content content="STORAGE" route="/" />
          <Content content="MY FLING" route="/" />
        </div>
      </div>
    </>
  )
}

export default Box
