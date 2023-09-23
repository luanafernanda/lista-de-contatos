import styled from 'styled-components'

export const Title = styled.h1`
  padding: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: #333;
`

export const Container = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  margin-bottom: 20px;
  border: 1px solid #ccc;
`

export const Form = styled.form`
  padding: 8px;
  display: flex;
  flex-direction: column;
`

export const InputGroup = styled.div`
  flex: auto;
  padding: 10px;
  font-size: 1rem;
  &:focus {
    outline-color: #007bff;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 90%;
    height: 16px;
  }
`

export const Button = styled.button`
  padding: 10px;
  margin: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`
