interface BigItemProps {
  className?: string
  name?: string
}

const BigItem = ({ className, name }: BigItemProps) => {
  const getImageUrl = (name?: string) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url)
      .href
  }

  return (
    <div className={`${className} my-5 flex justify-center`}>
      <img className="h-full" src={getImageUrl(name)} />
    </div>
  )
}
export default BigItem
