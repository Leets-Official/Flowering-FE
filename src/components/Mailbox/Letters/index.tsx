interface LettersProps {
  className?: string
  id?: string
  status: string
}

const Letters = ({ status }: LettersProps) => {
  if (status === 'received') {
    return (
      <div className="mx-4 my-5">
        {status === 'received' ? (
          <>
            <p>받은메일1</p>
            <p>받은메일2</p>
          </>
        ) : (
          <>
            <p>보낸메일1</p>
            <p>보낸메일2</p>
          </>
        )}
      </div>
    )
  }
}

export default Letters
