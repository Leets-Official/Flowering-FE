import Letter from '@/pages/MyPage/components/Mailbox/Letter'
import { useGetLetterReceived, useGetLetterSent } from '@/apis/hooks'
import { Error500Page, LoadingPage } from '@/pages'

interface LettersProps {
  status: string
  dDay: string
}

const Letters = ({ status, dDay }: LettersProps) => {
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

  if (sentLoading || receivedLoading) {
    return <LoadingPage />
  }
  if (sentError || !sentData || receivedError || !receivedData) {
    return <Error500Page />
  }
  const receivers = sentData.data.map(
    (letterSent: { receiver: string }) => letterSent.receiver,
  )
  const flowersSent = sentData.data.map(
    (letterSent: { flowerId: number }) => letterSent.flowerId,
  )
  const senders = receivedData.data.map(
    (letterReceived: { sender: string }) => letterReceived.sender,
  )
  const flowersReceived = receivedData.data.map(
    (letterReceived: { flowerId: number }) => letterReceived.flowerId,
  )

  return (
    <div className="flex flex-col overflow-y-scroll px-6 py-5 scrollbar-hide">
      {status === 'sent' ? (
        <div>
          {receivers.map((receiver: string, index: number) => (
            <Letter
              dDay={dDay}
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
              dDay={dDay}
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
