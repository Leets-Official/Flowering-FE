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

  if (sentLoading || receivedLoading) {
    return <p>Loading...</p>
  }
  if (sentError || !sentData || receivedError || !receivedData) {
    return <p>Error loading data</p>
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
      {status === 'received' ? (
        <div>
          {receivers.map((sender: string, index: number) => (
            <Letter
              status={status}
              key={index}
              sender={sender}
              flowerId={flowersSent[index]}
            />
          ))}
        </div>
      ) : (
        <div>
          {senders.map((receiver: string, index: number) => (
            <Letter
              status={status}
              key={index}
              receiver={receiver}
              flowerId={flowersReceived[index]}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Letters
