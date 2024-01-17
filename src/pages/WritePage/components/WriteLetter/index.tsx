interface WriteLetterProps {
  letter: string
  setLetter: React.Dispatch<React.SetStateAction<string>>
}
const WriteLetter = ({ letter, setLetter }: WriteLetterProps) => {
  const maxCharacterCount = 300

  const handleLetterChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const content = event.target.value
    setLetter(content)
  }

  return (
    <>
      <div className="flex h-full w-full flex-col justify-end gap-5 overflow-hidden">
        <div className="z-10 h-[70%] w-full bg-gray-500 px-6">
          <textarea
            className="font-ls h-full w-full bg-gray-500 text-gray-300 placeholder-gray-200"
            placeholder="자유롭게 입력해주세요."
            value={letter}
            onChange={handleLetterChange}
          />
        </div>

        <p className="font-ls z-10 text-center text-gray-200">
          {letter.length}/{maxCharacterCount}
        </p>
      </div>
      <div className="absolute bottom-0 z-0 h-[82%] w-full rounded-t-[3.125rem] bg-gray-500" />
    </>
  )
}

export default WriteLetter
