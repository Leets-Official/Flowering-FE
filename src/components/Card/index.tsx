interface PurchaseProps {
  className?: string
  name?: string
}

const Card = ({ className, name }: PurchaseProps) => {
  const getImageUrl = (name?: string) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url)
      .href
  }

  return (
    <div className={`flex ${className}`}>
      <img className="" src={getImageUrl(name)} />
    </div>
  )
}
export default Card
