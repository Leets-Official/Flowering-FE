interface PurchaseProps {
  name: string
}

const Purchase = ({ name }: PurchaseProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url)
      .href
  }

  return (
    <div className={`my-5 flex h-[190px] w-[133px] justify-center`}>
      <img className="h-full" src={getImageUrl(name)} />
    </div>
  )
}
export default Purchase
