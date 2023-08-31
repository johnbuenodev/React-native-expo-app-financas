import styled from "styled-components/native";

export const Container = styled.View`
 /* flex: 1; */
 /* display: flex;
 flex-direction: column; */
 background-color: #F0F3FF;
 border-radius: 4px;
 margin-left: 10px;
 margin-right: 10px;
 margin-bottom: 14px;
 padding: 12px;
`;

export const TipoText = styled.Text`
 font-size: 16px;
 color: #FFF;
 font-style: italic;
 margin-left: 8px;
 text-transform: uppercase;
`;

export const IconView = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.data?.type === 'despesa' ? '#c62c36' : 'green' };
  /*padding: 8px; *//* 8px horizontal 4 px vertical */
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 8px;
  padding-top: 8px;
  border-radius: 6px; /* 4px */
  margin-bottom: 6px;
`;

export const Tipo = styled.View`
 display: flex;
 flex-direction: row;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
  font-weight: 400;
`;