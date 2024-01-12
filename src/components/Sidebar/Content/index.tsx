import { Link } from 'react-router-dom'

interface ContentProps {
  content: string
  route: string
}

const Content = ({ content, route }: ContentProps) => {
  return (
    <Link to={route}>
      <button className="font-base">{content}</button>
    </Link>
  )
}

export default Content
