interface ItemProps {
  name: string
  className?: string
}

const Item = ({ name, className }: ItemProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/items/${name}.png`, import.meta.url).href
  }

  return (
    <div className={`${className} h-[72px] w-[72px]`}>
      <img src={getImageUrl(name)} />
    </div>
  )
}

export default Item
