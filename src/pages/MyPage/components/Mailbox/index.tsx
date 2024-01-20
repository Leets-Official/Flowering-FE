import Letter from '@/pages/MyPage/components/Mailbox/Letter'
import { useGetLetterSent } from '@/apis/hooks'

interface LettersProps {
  className?: string
  id?: string
  status: string
}

const Letters = ({ status }: LettersProps) => {
  const { isLoading, isError, data } = useGetLetterSent()
  if (isLoading) {
    return <p>loading</p>
  }
  if (isError || !data) {
    return <p>error</p>
  }
  const receivers = data.letterSentResponse.map(
    (letterSent) => letterSent.receiver,
  )
  const flowers = data.letterSentResponse.map(
    (letterSent) => letterSent.flowerId,
  )

  return (
    <div className="flex flex-col gap-4 overflow-y-scroll px-6 py-5">
      {status === 'received' ? (
        <>
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
        </>
      ) : (
        <>
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
          <Letter receiver={receivers[0]} flowerId={flowers[0]} />
        </>
      )}
    </div>
  )
}

export default Letters
