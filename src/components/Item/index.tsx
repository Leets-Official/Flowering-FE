import { useState } from 'react'
import { Typography } from '@material-tailwind/react'

interface ItemProps {
  name: string
  owned?: boolean
}

const Item = ({ name, owned }: ItemProps) => {
  const [itemLoading, setItemLoading] = useState(true)

  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/items/${name}.png`, import.meta.url).href
  }

  return (
    <>
      <div
        className={`relative z-0 h-[72px] w-[72px] ${itemLoading && 'hidden'}`}
      >
        {owned && (
          <div className="absolute left-0 top-0">
            <img className="grayscale" src={getImageUrl(name)} />
          </div>
        )}
        <img
          className={owned ? 'grayscale' : ''}
          onLoad={() => setItemLoading(false)}
          src={getImageUrl(owned ? 'gray' : name)}
        />
      </div>
      {itemLoading && (
        <div>
          <Typography
            as="div"
            variant="h1"
            className="z-20 h-[72px] w-[72px] rounded-full bg-gray-100"
          >
            &nbsp;
          </Typography>
        </div>
      )}
    </>
  )
}

export default Item
