import { useNavigate } from 'react-router'
import { ICONS } from '@/constants'
import { DDay, Name, Ribbon, Wrapper } from './components'
import { useState } from 'react'
import { Button, Header } from '@/components'

const SettingPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [wrapper, setWrapper] = useState('')
  const [ribbon, setRibbon] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const handleClick = () => {
    if (step === 1) setStep(2)
    else if (step === 2) setStep(3)
    else if (step === 3) setStep(4)
    else if (step === 4) navigate('/')
    console.log(step)
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <Header
        leftIcon={ICONS.GOBACK}
        onGoBack={() => {
          if (step === 1) {
            navigate(-1)
          } else {
            setStep(step - 1)
          }
        }}
      />
      <div className="h-full">
        {step === 1 && <Wrapper wrapper={wrapper} setWrapper={setWrapper} />}
        {step === 2 && <Ribbon ribbon={ribbon} setRibbon={setRibbon} />}
        {step === 3 && <Name name={name} setName={setName} />}
        {step === 4 && <DDay DDay={date} setDDay={setDate} />}
      </div>
      <div className="font-md px-6 py-5">
        <Button onClick={handleClick}>{step < 4 ? '다음' : '완료'}</Button>
      </div>
    </div>
  )
}

export default SettingPage
