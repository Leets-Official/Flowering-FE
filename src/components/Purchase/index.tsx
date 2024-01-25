interface PurchaseProps {
  className: string
  name: string
}

const Purchase = ({ className, name }: PurchaseProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url)
      .href
  }

  return (
    <div className={`${className} my-5 flex justify-center`}>
      <img className="h-full" src={getImageUrl(name)} />
    </div>
  )
}
export default Purchase
