interface ConfirmPurchaseProps {
  name: string
}

const ConfirmPurchase = ({ name }: ConfirmPurchaseProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url)
      .href
  }

  return (
    <div className={`my-5 flex h-[238px] w-[340px] justify-center`}>
      <img className="h-full" src={getImageUrl(name)} />
    </div>
  )
}
export default ConfirmPurchase
