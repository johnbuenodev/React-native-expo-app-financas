import styled from "styled-components/native";

export const Container = styled.View`
 flex: 1;
 background-color: rgba(34, 34, 34, 0.4); /* meio escuro quase transparente  40% de opacidade*/
`;

export const ButtonFilterCustom = styled.TouchableOpacity`
 width: 90%;
 border-radius: 12px;
 border-width: 2px;
 border-color: #4169E1;
 background-color: #4169E1;
 padding-left: 16px;
 padding-right: 16px;
 padding-bottom: 8px;
 padding-top: 8px;
 align-items: center;
 justify-content: center;
 margin-right: auto;
 margin-left: auto;
`;

/* flex:2 que ele vai pegar um pouco mais q a metade da tela*/
/* Se fosse flex:1 pegaria metade/metade - metade o modal e metade o TouchableWithoutFeedback */
export const ModalContent = styled.View`
 flex: 2;
 background-color: #ffffff;
 justify-content: center;
 padding: 16px;
`;

export const TextButton = styled.Text`
 color: #FFF;
 font-size: 18px;
 font-weight: bold;
`; 