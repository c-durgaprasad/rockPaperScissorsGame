import {PlayButton, Image, OptionItem} from './styledComponents'

const PlayButtons = props => {
  const {eachBtn, onClickPlayButton} = props
  const {imageUrl, id} = eachBtn
  const getPlayId = () => {
    onClickPlayButton(id)
  }
  return (
    <OptionItem>
      <PlayButton onClick={getPlayId}>
        <Image src={imageUrl} alt={id} />
      </PlayButton>
    </OptionItem>
  )
}

export default PlayButtons
