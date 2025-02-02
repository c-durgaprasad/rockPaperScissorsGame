import {
  GameBg,
  GameCon,
  PerResult,
  Person,
  SelectedImg,
  AgainCon,
  Result,
  PlayAgain,
} from './styledComponents'

const GameResult = props => {
  const {myChoice, opponentChoice, gameResult, playGameAgain} = props
  const {image} = myChoice
  const {imageUrl} = opponentChoice
  console.log(myChoice, opponentChoice)
  const playAgain = () => {
    playGameAgain()
  }
  return (
    <GameBg>
      <GameCon>
        <PerResult>
          <Person>YOU</Person>
          <SelectedImg src={image} alt="your choice" />
        </PerResult>
        <PerResult>
          <Person>OPPONENT</Person>
          <SelectedImg src={imageUrl} alt="opponent choice" />
        </PerResult>
      </GameCon>
      <AgainCon>
        <div>
          <Result>{gameResult}</Result>
          <PlayAgain type="button" onClick={playAgain}>
            PLAY AGAIN
          </PlayAgain>
        </div>
      </AgainCon>
    </GameBg>
  )
}

export default GameResult
