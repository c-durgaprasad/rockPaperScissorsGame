import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
`

export const BgCard = styled.div`
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 9px;
  height: 150px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`
export const GameHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 27px;
  font-weight: 400;
  margin-left: 20px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 9px;
  width: 110px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  margin-top: 15px;
`
export const ScoreHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #223a5f;
  font-size: 27px;
  margin: 0px;
  padding-top: 10px;
`
export const Score = styled.p`
  font-family: 'Bree Serif';
  color: #223a5f;
  font-size: 55px;
  margin: 0px;
`

export const GameView = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonsContainer = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 300px;
  flex-wrap: wrap;
`
