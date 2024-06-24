// styled.js
import styled from 'styled-components'

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #121212;
  color: #ffffff;
  max-height: 100vh;
  overflow-y: scroll;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #282828;
  padding: 10px;
  border-radius: 50px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;

  ::placeholder {
    color: #b3b3b3;
  }
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
`

export const ResultSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
`

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: #ffffff;
`

export const ResultItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const ResultItem = styled.div`
  background-color: #181818;
  padding: 15px;
  border-radius: 10px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ffffff;
`

export const ResultImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`

export const ResultText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #b3b3b3;
`
