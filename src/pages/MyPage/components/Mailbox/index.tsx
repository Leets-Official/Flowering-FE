import Letter from '@/pages/MyPage/components/Mailbox/Letter'
import { useGetLetterSent } from '@/apis/hooks'

interface LettersProps {
  status: string
}

const Letters = ({ status }: LettersProps) => {
  const { isLoading, isError, data } = useGetLetterSent()
  if (isLoading) {
    return <p>loading</p>
  }
  if (isError || !data || !Array.isArray(data.letterSentResponse)) {
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
        <div>
          {receivers.map((receiver, index) => (
            <Letter key={index} receiver={receiver} flowerId={flowers[index]} />
          ))}
        </div>
      ) : (
        <div>
          {receivers.map((receiver, index) => (
            <Letter key={index} receiver={receiver} flowerId={flowers[index]} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Letters
