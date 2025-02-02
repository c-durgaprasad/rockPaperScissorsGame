import {PlayButton, Image, OptionItem} from './styledComponents'

const PlayButtons = props => {
  const {eachBtn, onClickPlayButton} = props
  const {imageUrl, id} = eachBtn
  const getPlayId = () => {
    onClickPlayButton(id, imageUrl)
  }
  return (
    <OptionItem>
      <PlayButton onClick={getPlayId} data-testid={`${id.toLowerCase()}Button`}>
        <Image src={imageUrl} alt={id} />
      </PlayButton>
    </OptionItem>
  )
}

export default PlayButtons
