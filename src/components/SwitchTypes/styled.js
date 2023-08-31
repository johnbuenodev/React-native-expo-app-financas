import styled from "styled-components/native";

export const SwitchTypesContainer = styled.View`
 display: flex;
 flex-direction: row;
 justify-content: space-between; /* around antes */
 align-items: center;
 width: 100%;
 /* margin-right: 20px;
 margin-left: 20px; */
 padding-left: 20px;
 padding-right: 20px;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 padding: 16px;
 border-width: 1px;
 border-color: ${props => props.checked ? '#383DBF' : '#E7E7E7'};
 width: 47%; /* 40% */
 margin-top: 16px;
 /* border-radius: 20px; */
 /* background-color: #E7E7E7; */
 background-color: ${props => props.checked ? '#FFF' : '#E7E7E7'};
`;

export const RegisterLabel = styled.Text`
 font-size: 18px;
 font-weight: 500;
 margin-left: 8px;
`;
