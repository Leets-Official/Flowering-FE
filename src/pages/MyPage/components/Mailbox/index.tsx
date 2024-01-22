import Letter from '@/pages/MyPage/components/Mailbox/Letter'
import { useGetLetterReceived, useGetLetterSent } from '@/apis/hooks'

interface LettersProps {
  status: string
}

const Letters = ({ status }: LettersProps) => {
  const {
    isLoading: sentLoading,
    isError: sentError,
    data: sentData,
  } = useGetLetterSent()
  const {
    isLoading: receivedLoading,
    isError: receivedError,
    data: receivedData,
  } = useGetLetterReceived()
  if (sentLoading) {
    return <p>loading</p>
  }
  if (sentError || !sentData) {
    return <p>error</p>
  }
  if (receivedLoading) {
    return <p>loading</p>
  }
  if (receivedError || !receivedData) {
    return <p>error</p>
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const receivers = sentData.map((letterSent) => letterSent.receiver)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const flowersSent = sentData.map((letterSent) => letterSent.flowerId)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const senders = receivedData.map((letterReceived) => letterReceived.sender)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const flowersReceived = sentData.map(
    (letterReceived: any) => letterReceived.flowerId,
  )

  return (
    <div className="flex flex-col overflow-y-scroll px-6 py-5">
      {status === 'received' ? (
        <div>
          {receivers.map((receiver: string, index: number) => (
            <Letter
              status={status}
              key={index}
              receiver={receiver}
              flowerId={flowersSent[index]}
            />
          ))}
        </div>
      ) : (
        <div>
          {senders.map((sender: string, index: number) => (
            <Letter
              status={status}
              key={index}
              sender={sender}
              flowerId={flowersReceived[index]}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Letters
