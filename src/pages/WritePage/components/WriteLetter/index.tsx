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
    <div className="flex  overflow-hidden">
      <div className="mt-10 flex h-[450px] w-full flex-col rounded-t-[50px] bg-gray-500 px-6 pt-12">
        <textarea
          className="font-ls h-full bg-gray-500 text-gray-300 placeholder-gray-200"
          placeholder="자유롭게 입력해주세요."
          value={letter}
          onChange={handleLetterChange}
        />
        <p className="font-ls mb-2.5 mt-3.5  text-center text-gray-200">
          {letter.length}/{maxCharacterCount}
        </p>
      </div>
    </div>
  )
}

export default WriteLetter
