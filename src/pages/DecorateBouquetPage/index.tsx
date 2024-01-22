import { useLocation } from 'react-router'

const DecorateBouquetPage = () => {
  const location = useLocation()
  const info = { ...location.state }

  console.log(info)

  return (
    <div>
      <h1>BouquetDecoratePage</h1>
    </div>
  )
}

export default DecorateBouquetPage
