const Ribbons = ({ ribbon }: { ribbon: string }) => {
  const ribbonStyles: Record<string, string> = {
    ribbon1: 'w-[60%] -translate-x-[68%] -translate-y-[11%]',
    ribbon2: 'w-[56%] -translate-x-[51.5%] -translate-y-[26%]',
    ribbon3: 'w-[56%] -translate-x-[51.5%] -translate-y-[26%]',
  }

  const getRibbonUrl = (name: string) => {
    return new URL(`/src/assets/images/ribbons/${name}.png`, import.meta.url)
      .href
  }

  return (
    <img
      src={getRibbonUrl(ribbon)}
      alt="ribbon"
      className={`absolute left-1/2 top-2/3 ${ribbonStyles[ribbon]}`}
    />
  )
}

export default Ribbons
