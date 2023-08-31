import styled from "styled-components/native";

export const BackgroundCustom = styled.View`
 flex: 1;
 background-color: #DCDCDC;
`;

export const SafeAreaViewCustom = styled.SafeAreaView`
  flex: 1;
  margin-top: 14px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const InputCustom = styled.TextInput`
height: 50px;
width: 90%;
background-color: #fff;
font-size: 16px;
padding-top: 4px;
padding-bottom: 4px;
padding-left: 8px;
padding-right: 8px;
margin-bottom: 14px;
`;

export const Submitbutton = styled.TouchableOpacity`
 width: 90%;
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 24px;
 background-color: #228B22;
 border-radius: 12px;
 padding-top: 8px;
 padding-bottom: 8px;
 padding-left: 8px;
 padding-right: 8px;
`;

export const SubmitText = styled.Text`
 font-size: 18px;
 color: #fff;
 font-weight: bold;
 text-transform: uppercase;
`;
