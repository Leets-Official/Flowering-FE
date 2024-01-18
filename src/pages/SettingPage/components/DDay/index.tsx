interface DDayProps {
  DDay: string
  setDDay: React.Dispatch<React.SetStateAction<string>>
}

const DDay = ({ DDay, setDDay }: DDayProps) => {
  return (
    <>
      <div className="mx-6 mt-5 flex flex-col">
        <div className="font-lg text-[#282828]">
          축하 받을 당일의 날짜를 <br /> 알려 주세요.
        </div>
      </div>
    </>
  )
}

export default DDay
