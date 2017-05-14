export  const SaveRezultTest = (idQuestion, idAnswer, count) => ({
  type: 'SAVE_REZULT_TEST',
  idQuestion,
  idAnswer,
  count
})

export const IncrementQuestion = () => ({
  type: 'INCREMENT_QUESTION'
})
