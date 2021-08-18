import './index.css'

const InterviewQuestion = props => {
  const {questionItem, updateAnswer, showList} = props
  const {id} = questionItem
  const ifShow = showList.includes(questionItem.id)
  //   console.log(questionItem)

  const onShowAnswer = () => updateAnswer(id)

  return (
    <div className="question">
      <div className="question-tags">
        <div className="question-tag difficulty">
          {questionItem.difficultyLevel}
        </div>
        <div className="question-tag language">{questionItem.language}</div>
      </div>
      <p className="question-title">{questionItem.questionText}</p>
      <button
        type="button"
        className="show-answer-button"
        onClick={onShowAnswer}
      >
        {ifShow ? 'Hide' : 'Show'}
        <img
          src={
            ifShow
              ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
              : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
          }
          alt="arrow down"
        />
      </button>
      {ifShow && <p className="answer">{questionItem.answerText}</p>}
    </div>
  )
}

export default InterviewQuestion
