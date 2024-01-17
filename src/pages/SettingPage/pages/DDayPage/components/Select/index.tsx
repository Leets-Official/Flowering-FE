interface selectProps {
  optionData: string[]
  title: string
}

const Select = ({ optionData, title }: selectProps) => {
  return (
    <div>
      <select
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
          paddingRight: '5px',
        }}
      >
        {optionData.map((element) => {
          return <option key={element}></option>
        })}
      </select>
      {title}
    </div>
  )
}

export default Select
