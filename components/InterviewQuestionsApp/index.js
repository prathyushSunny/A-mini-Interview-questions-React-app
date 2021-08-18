import {Component} from 'react'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'

class InterviewQuestionsApp extends Component {
  constructor(props) {
    super(props)
    this.showList = []
  }

  state = {language: 'ALL', difficulty: 'ALL'}

  changed = e => {
    // console.log(e.target.value)
  }

  filterTriggered = (value, type) => {
    console.log(value, type)
    if (type === 'language') this.setState({language: value})
    else this.setState({difficulty: value})
  }

  updateAnswer = id => {
    this.setState(prev => ({language: prev.language}))
    if (!this.showList.includes(id)) this.showList.push(id)
    else this.showList = this.showList.filter(item => item !== id)
    // console.log(this.showList)
  }

  getFilteredData = () => {
    let filteredList
    const {questionsData} = this.props
    const {language, difficulty} = this.state
    if (language === 'ALL' && difficulty === 'ALL') filteredList = questionsData
    else if (language === 'ALL')
      filteredList = questionsData.filter(
        questionItem => questionItem.difficultyLevel === difficulty,
      )
    else if (difficulty === 'ALL')
      filteredList = questionsData.filter(
        questionItem => questionItem.language === language,
      )
    else
      filteredList = questionsData
        .filter(questionItem => questionItem.difficultyLevel === difficulty)
        .filter(questionItem => questionItem.language === language)
    return filteredList
  }

  render() {
    const {questionsData, categoryData, levelsData} = this.props
    const {language, difficulty} = this.state
    const filteredList = this.getFilteredData()
    console.log(filteredList)
    return (
      <div className="container">
        <div className="title-container">
          <h1 className="title">30 Seconds of Interviews</h1>
          <img
            className="title-image"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="title content"
          />
        </div>
        <div className="bottom-container">
          <div className="selections-container">
            <div className="language-selection selection-container">
              <label htmlFor="language">LANGUAGE</label>
              <br />
              {/*  */}
              <Filters
                data={categoryData}
                type="language"
                filterTriggered={this.filterTriggered}
              />
            </div>
            <div className="difficulty-selection selection-container">
              <label htmlFor="difficulty">DIFFICULTY LEVEL</label>
              <br />
              {/* <select id="difficulty" onChange={this.changed}>
                <option>Test</option>
                <option>Test2</option>
                <option>Test3</option>
              </select> */}
              <Filters
                data={levelsData}
                type="level"
                filterTriggered={this.filterTriggered}
              />
            </div>
          </div>
          <div className="questions-container">
            {filteredList.map(questionItem => (
              <InterviewQuestion
                key={questionItem.id}
                questionItem={questionItem}
                updateAnswer={this.updateAnswer}
                showList={this.showList}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
