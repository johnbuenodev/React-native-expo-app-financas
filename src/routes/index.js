import React, { useContext } from "react";

import { View, Text, ActivityIndicator } from "react-native";

import { AuthContext } from "../contexts/auth";

import AppRoutes from "./appRoutes";
import AuthRoutes from "./authRoutes";
import { ButtonAcessar } from "./styled";

export default function Routes() {

    const { 
        signed, 
        loading, 
        logoff, user } = useContext(AuthContext);

    //const loading = false;
    //const signed = true;


    //resolver sobre o loading TODO

    // if(loading) {
    //     return(
    //       <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
    //        <ActivityIndicator size={80} color="#4169E1"></ActivityIndicator>
         
    //        <Text>Home</Text>
    //        <Text>ID: { user?.id } </Text>
    //        <Text>Nome: { user?.name } </Text>
    //        <Text>E-mail: { user?.email } </Text>
    //        <Text>Balance: { user?.balance } </Text>

    //        <ButtonAcessar onPress={() => logoff()}>
    //             <Text>Sair</Text>
    //         </ButtonAcessar>
    //       </View>
    //     );
    // }

    return(

        signed ? 
        <AppRoutes /> 
        :
        <AuthRoutes />
    );


}