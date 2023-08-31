import styled from "styled-components/native";

export const Container = styled.View`
 background-color: ${props => props.colorCustom}; /* 121212 */
 margin-left: 14px;
 margin-right: 14px;
 justify-content: center;
 border-radius: 12px;
 align-items: flex-start;
 padding-left: 14px;
 width: 300px;
`;

export const Label = styled.Text`
 color: #FFF;
 font-size: 19px;
 font-weight: bold;
`;

export const Balance = styled.Text`
 color: gold;
 font-size: 28px;
 margin-top: 16px;
 font-weight: bold;
`;