import Content from '@/components/Menu/Content'

const Box = () => {
  return (
    <>
      <div className="flex flex-col bg-amber-400">
        <p>플링님</p>
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
