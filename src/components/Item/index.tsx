interface ItemProps {
  id: string
}

const Item = ({ id }: ItemProps) => {
  return (
    <div className={`h-[72px] w-[72px]`}>
      <img src={`/src/assets/images/items/${id}.png`} />
    </div>
  )
}

export default Item
