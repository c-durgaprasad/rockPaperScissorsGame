import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
`

export const BgCard = styled.div`
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 9px;
  height: 130px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const GameHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin-left: 15px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 9px;
  width: 120px;
  height: 100px;
  margin: 15px;
  text-align: center;
`
export const ScoreHeading = styled.p`
  font-family: 'Bree Serif';
  color: #223a5f;
  font-size: 20px;
  margin: 0px;
  padding: 0px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const Score = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 45px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
    font-size: 40px;
  }
`

export const GameView = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`

export const ButtonsContainer = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 300px;
  flex-wrap: wrap;
  margin-top: 80px;
`
export const RulesButton = styled.button`
  font-family: 'Bree Serif';
  height: 34px;
  width: 70px;
  font-size: 14px;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #223a5f;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    margin-right: 30px;
  }
`
export const RuleCon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`
export const RulesImgCon = styled.div`
  display: flex;
  justify-content: center;
`

export const RulesImg = styled.img`
  width: 180px;
  margin-bottom: 30px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const CloseButton = styled.button`
  outline: none;
  border: none;
  margin-left: 90%;
`

export const GameBg = styled.div`
  margin-top: 100px;
`
export const GameCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PerResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`

export const Person = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 600;
  margin: 0px;
`

export const SelectedImg = styled.img`
  width: 130px;
  margin-top: 9px;
`

export const AgainCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Result = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 600;
  margin: 0px;
  font-size: 24px;
  padding-top: 10px;
  text-align: center;
`
export const PlayAgain = styled.button`
  font-family: 'Bree Serif';
  height: 34px;
  width: 140px;
  font-size: 11px;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #223a5f;
  background-color: #ffffff;
  margin-top: 15px;
  margin-bottom: 70px;
`
