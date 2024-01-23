interface ItemProps {
  name: string
}

const Item = ({ name }: ItemProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/items/${name}.png`, import.meta.url).href
  }

  return (
    <div>
      <img src={getImageUrl(name)} />
    </div>
  )
}

export default Item
