import { useEffect, useState } from 'react'
import Select from './components/Select'

interface DDayProps {
  setDDay: React.Dispatch<React.SetStateAction<string>>
}

const DDay = ({ setDDay }: DDayProps) => {
  const [currentClicked, setCurrentClicked] = useState<string>('')
  const [month, setMonth] = useState<number>()
  const [day, setDay] = useState<number>()

  useEffect(() => {
    if (month && day) setDDay(`2024-${month}-${day}`)
  }, [month, day, setDDay])

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement
      if (
        clickedElement.classList.contains('exclude-click') ||
        clickedElement.closest('.exclude-click')
      ) {
        return
      }
      setCurrentClicked('')
    }

    window.addEventListener('click', handleGlobalClick)

    return () => {
      window.removeEventListener('click', handleGlobalClick)
    }
  }, [])

  return (
    <div className="flex h-full flex-col">
      <div className="mx-6 mt-5 flex h-full flex-col">
        <div className="font-lg text-[#282828]">
          축하 받을 당일의 날짜를 알려 주세요.
        </div>
        <div className="flex h-[50%] flex-col justify-end">
          <div className="font-base mb-1.5 flex w-full gap-2 border-b-2 border-solid bg-white py-1">
            <div className="flex w-full justify-center gap-5 text-gray-200">
              <div className="flex">
                <div className="font-md">2024&nbsp;</div>
                <div>년도</div>
              </div>
              <div
                onClick={() => setCurrentClicked('month')}
                className="exclude-click flex cursor-pointer"
              >
                <div className="font-md w-10 text-end">{month}&nbsp;</div>
                <div>월</div>
              </div>
              <div
                onClick={() => setCurrentClicked('day')}
                className="exclude-click flex cursor-pointer"
              >
                <div className="font-md w-10 text-end">{day}&nbsp;</div>
                <div>일</div>
              </div>
            </div>
          </div>
        </div>
        {currentClicked && (
          <div>
            <Select
              currentClicked={currentClicked}
              month={month}
              setCurrentClicked={setCurrentClicked}
              setMonth={setMonth}
              setDay={setDay}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default DDay
