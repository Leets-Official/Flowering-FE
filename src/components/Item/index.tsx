interface ItemProps {
  name: string
}

const Item = ({ name }: ItemProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/${name}.png`, import.meta.url).href
  }

  return (
    <div className={`h-[22.5%] w-[22.5%]`}>
      <img src={getImageUrl(name)} />
    </div>
  )
}

export default Item
