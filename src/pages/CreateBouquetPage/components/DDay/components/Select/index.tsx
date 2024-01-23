import { Dropdown } from '@/components'
import { useEffect, useState } from 'react'

interface selectProps {
  currentClicked: string
  month: number | undefined
  setMonth: React.Dispatch<React.SetStateAction<number | undefined>>
  setDay: React.Dispatch<React.SetStateAction<number | undefined>>
  setCurrentClicked: React.Dispatch<React.SetStateAction<string>>
}

const Select = ({
  currentClicked,
  month,
  setMonth,
  setDay,
  setCurrentClicked,
}: selectProps) => {
  const [totalDay, setTotalDay] = useState<number>()
  useEffect(() => {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        setTotalDay(31)
        break
      case 2:
        setTotalDay(29)
        break
      case undefined:
        setTotalDay(0)
        break
      default:
        setTotalDay(30)
        break
    }
  }, [month, setTotalDay])

  return (
    <div className="flex justify-center">
      <Dropdown className="exclude-click">
        {currentClicked == 'month' && (
          <Dropdown.Menu className="ml-22 mt-2 max-h-[7rem] w-12 overflow-y-auto overflow-x-hidden text-center">
            {[...Array(12).keys()].map((element) => {
              return (
                <Dropdown.Item
                  key={element + 1}
                  onClick={() => {
                    setMonth(element + 1)
                    setCurrentClicked('')
                  }}
                  className="font-base my-1 cursor-pointer"
                >
                  {element + 1}
                </Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        )}
        {currentClicked == 'day' && month && (
          <Dropdown.Menu className="ml-[140px] mt-2 max-h-[7rem] w-12 overflow-y-auto overflow-x-hidden text-center">
            {[...Array(totalDay).keys()].map((element) => {
              return (
                <Dropdown.Item
                  key={element + 1}
                  onClick={() => {
                    setDay(element + 1)
                    setCurrentClicked('')
                  }}
                  className="font-base cursor-pointer"
                >
                  {element + 1}
                </Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  )
}

export default Select
