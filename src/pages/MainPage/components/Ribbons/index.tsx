const Ribbons = ({ ribbon }: { ribbon: string }) => {
  // TODO: props로 받아온 ribbon에 따라 다른 이미지를 보여주기.
  const ribbons = {
    ribbon1: 'ribbon1',
    ribbon2: 'ribbon2',
    ribbon3: 'ribbon3',
  }
  const ribbonStyles = {
    ribbon1: 'w-[60%] -translate-x-[68%] -translate-y-[11%]',
    ribbon2: 'w-[56%] -translate-x-[51.5%] -translate-y-[26%]',
    ribbon3: 'w-[56%] -translate-x-[51.5%] -translate-y-[26%]',
  }

  // TODO: 삭제
  const selectedRibbon = 'ribbon1'
  console.log(ribbon)

  const getRibbonUrl = (name: string) => {
    return new URL(`/src/assets/images/ribbons/${name}.png`, import.meta.url)
      .href
  }

  return (
    <img
      src={getRibbonUrl(ribbons[selectedRibbon])}
      alt="ribbon"
      className={`absolute left-1/2 top-2/3 ${ribbonStyles[selectedRibbon]}`}
    />
  )
}

export default Ribbons
