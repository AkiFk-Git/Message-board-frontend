import styled from "styled-components"

export const SPost = styled.div`
  margin: 8px 0px;
  border-bottom: 1px solid #AAAAAA;
  text-align: left;
  padding-left: 8px;
`

export const SName = styled.span`
  font-size: small;
  color: #000044;
`

export const SDate = styled.span`
  margin-left: 8px;
  font-size: small;
  color: #000044;
`

export const Sbtn = styled.button`
  margin-left: 8px;
  font-size: .7rem;
  background-color: none;
  color: #000044;
  border: none;
  cursor: pointer;
`

export const SEditArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
`

export const SSideBarTextArea = styled.textarea`
  margin-top: .6rem;
  border-radius: 4px;
  width: 100%;
  box-shadow: inset 0 2px 4px #CCCCCC;
`

export const SEdfinBtn = styled.button`
  margin: 6px 0;
  font-size: .7rem;
  background-color: none;
  color: #000044;
  border: .5px solid #000044;
  width: 10rem;
  cursor: pointer;
`