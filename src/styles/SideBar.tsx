import styled from 'styled-components';

export const SSideBar = styled.div`
  padding: 8px;
  border-right: 1px solid #222222;
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SUserInfo = styled.div`
  margin-top: 30px;
  padding-left: 1rem;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const SUname = styled.div`
  color: #222222;
`;
export const SUmail = styled.div`
  color: #222222;
  font-size: 0.8rem;
`;

export const SSideBarRow = styled.div`
  margin-top: 2px;
  margin: 10px 0 4px 0;
  text-align: center;
  width: 70%;
`;
export const SSideBarTextArea = styled.textarea`
  border-radius: 4px;
  box-shadow: inset 0 2px 4px #cccccc;
`;

export const SSideBarButton = styled.button`
  background-color: #222222;
  padding: 4px;
  border-radius: 8px;
  color: #fafafa;
  width: 100%;
  cursor: pointer;
`;
