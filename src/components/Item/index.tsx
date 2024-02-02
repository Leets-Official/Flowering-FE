interface ItemProps {
  name: string
  owned?: boolean
}

const Item = ({ name, owned }: ItemProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/items/${name}.png`, import.meta.url).href
  }

  return (
    <div className="relative z-0 h-[72px] w-[72px]">
      {owned && (
        <div className="absolute left-0 top-0">
          <img className="grayscale" src={getImageUrl(name)} />
        </div>
      )}
      <img
        className={owned ? 'grayscale' : ''}
        src={getImageUrl(owned ? 'gray' : name)}
      />
    </div>
  )
}

export default Item
