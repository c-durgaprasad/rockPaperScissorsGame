import {Component} from 'react'
import {
  BgContainer,
  BgCard,
  GameHeading,
  ScoreContainer,
  ScoreHeading,
  Score,
  ButtonsContainer,
  GameView,
} from './styledComponents'

import PlayButtons from '../PlayButtons'

const apiConstantStatus = {
  initial: 'INITIAL',
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {score: 0, gameStatus: apiConstantStatus.initial}

  onClickPlayButton = playerOption => {
    const {choicesList} = this.props
    const opponent = Math.floor(Math.random() * 2.5)
    const opponentOption = choicesList[opponent].id

    if (playerOption === opponentOption) {
      this.setState({gameStatus: apiConstantStatus.win})
      this.setState(prevState => ({score: prevState.score + 1}))
    }
  }

  renderPlayButtons = () => {
    const {choicesList} = this.props
    return (
      <ButtonsContainer>
        {choicesList.map(eachBtn => (
          <PlayButtons
            eachBtn={eachBtn}
            key={eachBtn.id}
            onClickPlayButton={this.onClickPlayButton}
          />
        ))}
      </ButtonsContainer>
    )
  }

  render() {
    const {score} = this.state
    return (
      <BgContainer>
        <br />
        <BgCard>
          <GameHeading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </GameHeading>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </BgCard>
        <GameView>{this.renderPlayButtons()}</GameView>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
