import styled  from "styled-components/native";


export const Container = styled.SafeAreaView`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-top: 30px;
 margin-left: 15px;
 margin-bottom: 15px;
 width: 100%;
 height: 60px;
`;

export const TitleCustom = styled.Text`
 font-size: 18px;
 color: black;
 margin: 16px;
`;

export const NameCustom = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 32px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #121212;
`;

export const MessageCustom = styled.Text`
  font-size: 18px;
  color: #121212;
  font-style: italic;
`;