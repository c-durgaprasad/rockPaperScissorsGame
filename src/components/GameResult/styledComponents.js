import styled from 'styled-components'

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
