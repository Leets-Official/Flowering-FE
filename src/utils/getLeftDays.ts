const getLeftDays = (graduationDate: string) => {
  if (graduationDate === '') return -1

  const today = new Date()
  const graduation = new Date(graduationDate.replace(/-/g, '/'))
  const diff = graduation.getTime() - today.getTime()
  const leftDays = Math.floor(diff / (1000 * 60 * 60 * 24))

  return leftDays
}

export default getLeftDays
