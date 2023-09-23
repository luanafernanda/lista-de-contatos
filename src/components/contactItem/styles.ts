import styled from 'styled-components'

export const ItemContainer = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ContactDetails = styled.div`
  margin-right: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #ccc;
`

export const ContactName = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  margin: 5px 0;
`

export const ContactInfo = styled.p`
  font-size: 18px;
  margin: 5px 0;
  font-weight: normal;
`

export const EditButton = styled.button`
  background-color: #ffcc00;
  color: #333;
  padding: 8px 16px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e6b800;
  }
`

export const SaveButton = styled(EditButton)`
  background-color: #00cc99;

  &:hover {
    background-color: #00b386;
  }
`

export const DeleteButton = styled(EditButton)`
  background-color: #ff3300;

  &:hover {
    background-color: #e62e00;
  }
`
