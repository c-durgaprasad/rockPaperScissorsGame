import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {
  BgContainer,
  BgCard,
  GameHeading,
  ScoreContainer,
  ScoreHeading,
  Score,
  ButtonsContainer,
  GameView,
  RulesButton,
  RuleCon,
  RulesImgCon,
  RulesImg,
  CloseButton,
  GameBg,
  GameCon,
  PerResult,
  Person,
  SelectedImg,
  AgainCon,
  Result,
  PlayAgain,
} from './styledComponents'
import './index.css'
import GameResult from '../GameResult'

import PlayButtons from '../PlayButtons'

const gameStatusConstant = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstant.inProgress,
    gameResult: '',
    myChoice: '',
    opponentChoice: '',
  }

  onClickPlayButton = id => {
    this.setState(
      {myChoice: id, opponentChoice: this.getOppChoice()},
      this.startGame,
    )
  }

  getOppChoice = () => {
    const {choicesList} = this.props
    const gameChoiceList = choicesList.map(choice => choice.id)
    const opponent = Math.floor(Math.random() * 3)
    return gameChoiceList[opponent]
  }

  startGame = () => {
    const {choicesList} = this.props
    const {myChoice, opponentChoice} = this.state

    if (myChoice === opponentChoice) {
      this.setState(prevState => ({
        score: prevState.score,
        gameStatus: gameStatusConstant.draw,
      }))
    } else if (myChoice === choicesList[0].id) {
      if (opponentChoice === choicesList[1].id) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstant.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstant.lose,
        }))
      }
    } else if (myChoice === choicesList[1].id) {
      if (opponentChoice === choicesList[2].id) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstant.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstant.lose,
        }))
      }
    } else if (myChoice === choicesList[2].id) {
      if (opponentChoice === choicesList[0].id) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstant.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstant.lose,
        }))
      }
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

  playGameAgain = () => {
    this.setState({gameStatus: gameStatusConstant.inProgress})
  }

  renderGameWon = () => {
    const {myChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(item => item.id === myChoice)
    const userChoiceObj = userChoiceObjList[0]

    const opponentChoiceObjList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )

    const opponentChoiceObj = opponentChoiceObjList[0]

    return (
      <GameBg>
        <GameCon>
          <PerResult>
            <Person>YOU</Person>
            <SelectedImg src={userChoiceObj.imageUrl} alt="your choice" />
          </PerResult>
          <PerResult>
            <Person>OPPONENT</Person>
            <SelectedImg
              src={opponentChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </PerResult>
        </GameCon>
        <AgainCon>
          <div>
            <Result>YOU WON</Result>
            <PlayAgain type="button" onClick={this.playGameAgain}>
              PLAY AGAIN
            </PlayAgain>
          </div>
        </AgainCon>
      </GameBg>
    )
  }

  renderGameLose = () => {
    const {myChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(item => item.id === myChoice)
    const userChoiceObj = userChoiceObjList[0]

    const opponentChoiceObjList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )

    const opponentChoiceObj = opponentChoiceObjList[0]
    return (
      <GameBg>
        <GameCon>
          <PerResult>
            <Person>YOU</Person>
            <SelectedImg src={userChoiceObj.imageUrl} alt="your choice" />
          </PerResult>
          <PerResult>
            <Person>OPPONENT</Person>
            <SelectedImg
              src={opponentChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </PerResult>
        </GameCon>
        <AgainCon>
          <div>
            <Result>YOU LOSE</Result>
            <PlayAgain type="button" onClick={this.playGameAgain}>
              PLAY AGAIN
            </PlayAgain>
          </div>
        </AgainCon>
      </GameBg>
    )
  }

  renderGameDraw = () => {
    const {myChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(item => item.id === myChoice)
    const userChoiceObj = userChoiceObjList[0]

    const opponentChoiceObjList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )

    const opponentChoiceObj = opponentChoiceObjList[0]
    return (
      <GameBg>
        <GameCon>
          <PerResult>
            <Person>YOU</Person>
            <SelectedImg src={userChoiceObj.imageUrl} alt="your choice" />
          </PerResult>
          <PerResult>
            <Person>OPPONENT</Person>
            <SelectedImg
              src={opponentChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </PerResult>
        </GameCon>
        <AgainCon>
          <div>
            <Result>IT IS DRAW</Result>
            <PlayAgain type="button" onClick={this.playGameAgain}>
              PLAY AGAIN
            </PlayAgain>
          </div>
        </AgainCon>
      </GameBg>
    )
  }

  renderGameResult = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstant.win:
        return this.renderGameWon()
      case gameStatusConstant.lose:
        return this.renderGameLose()
      case gameStatusConstant.draw:
        return this.renderGameDraw()
      case gameStatusConstant.inProgress:
        return this.renderPlayButtons()
      default:
        return null
    }
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

        <GameView>{this.renderGameResult()}</GameView>

        <div>
          <Popup
            className="popup-container"
            modal
            trigger={
              <RuleCon>
                <RulesButton type="button">RULES</RulesButton>
              </RuleCon>
            }
          >
            {close => (
              <>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <RulesImgCon>
                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesImgCon>
              </>
            )}
          </Popup>
        </div>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
