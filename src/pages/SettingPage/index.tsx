import { useNavigate } from 'react-router'
import { ICONS } from '@/constants'
import { DDay, Name, Ribbon, Wrapper } from './components'
import { useState } from 'react'
import { Button, Header } from '@/components'

const SettingPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const handleClick = () => {
    setStep(step + 1)
    if (step === 4) navigate('/')
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <Header
        leftIcon={ICONS.GOBACK}
        rightIcon={ICONS.HOME}
        onGoBack={() => {
          if (step === 1) {
            navigate(-1)
          } else {
            setStep(step - 1)
          }
        }}
      />
      <div className="h-full">
        {step === 1 && <Wrapper />}
        {step === 2 && <Ribbon />}
        {step === 3 && <Name />}
        {step === 4 && <DDay />}
      </div>
      <div className="font-md px-6 py-5">
        <Button onClick={handleClick}>{step < 4 ? '다음' : '완료'}</Button>
      </div>
    </div>
  )
}

export default SettingPage
