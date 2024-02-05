import { Link } from 'react-router-dom'

interface ContentProps {
  className?: string
  content: string
  route: string
  isLoggedIn: boolean
}

const Content = ({ className, content, route, isLoggedIn }: ContentProps) => {
  return (
    <Link to={isLoggedIn ? route : '/login'}>
      <button className={`${className} font-base text-[19px]`}>
        {content}
      </button>
    </Link>
  )
}

export default Content
