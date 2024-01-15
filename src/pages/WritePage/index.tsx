import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WrtiePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/write/flower')
  }, [navigate])

  return <></>
}

export default WrtiePage
