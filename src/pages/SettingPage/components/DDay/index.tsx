interface DDayProps {
  DDay: string
  setDDay: React.Dispatch<React.SetStateAction<string>>
}

const DDay = ({ DDay, setDDay }: DDayProps) => {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      <div className="mx-6 mt-5 flex flex-col">
        <div className="font-lg text-[#282828]">
          축하 받을 당일의 날짜를 <br /> 알려 주세요.
        </div>
        <div className="font-base mt-[12.25rem] flex w-full justify-end gap-2 border-b-2 border-solid bg-white py-1 pr-8 text-[#282828] focus:outline-none">
          <div>2024</div>
          <div>년도</div>
          <div>
            <select
              className="w-10 pr-2 text-end"
              style={{ appearance: 'none' }}
            >
              {month.map((element) => {
                return <option key={element}>{element}</option>
              })}
            </select>
            월
          </div>
          <div>
            <select
              className="w-10 pr-2 text-end"
              style={{ appearance: 'none' }}
            >
              {month.map((element) => {
                return <option key={element}>{element}</option>
              })}
            </select>
            일
          </div>
        </div>
      </div>
    </>
  )
}

export default DDay
