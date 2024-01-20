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
  if (isError || !data) {
    return <p>error</p>
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const receivers = data.map((LetterSent) => LetterSent.receiver)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const flowers = data.map((LetterSent) => LetterSent.flowerId)

  return (
    <div className="flex flex-col gap-4 overflow-y-scroll px-6 py-5">
      {status === 'receiver' ? (
        <div>
          {receivers.map((receiver: string, index: number) => (
            <Letter
              status={status}
              key={index}
              receiver={receiver}
              flowerId={flowers[index]}
            />
          ))}
        </div>
      ) : (
        <div>
          {receivers.map((receiver: string, index: number) => (
            <Letter
              status={status}
              key={index}
              receiver={receiver}
              flowerId={flowers[index]}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Letters
