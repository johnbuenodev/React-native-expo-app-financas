import styled from "styled-components/native";

export const BackgroundCustom = styled.View`
 flex: 1;
 background-color: #DCDCDC;
 align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
 width: 90%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-top: 24px;
 background-color: #FF6347;
 border-radius: 12px;
 padding-top: 8px;
 padding-bottom: 8px;
 padding-left: 8px;
 padding-right: 8px;
 border-color: #FF0000;
 border-width: 2px;
`;

export const LogoutText = styled.Text`
 font-size: 18px;
 color: #fff;
 font-weight: bold;
 text-transform: uppercase;
`;

export const MessageCustom = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
  justify-self: start;
  font-style: italic;
`;

export const NameCustom = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 32px;
  padding: 0 14px;
  color: #121212;
`;

export const EmailCustom = styled.Text`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px;
  color: black;
`;

