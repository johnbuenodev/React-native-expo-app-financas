import { useMemo } from "react";

import { Balance, Label, Container } from "./styled";


export default function BalanceItem({data}) { //props 

    // const {saldo, tag} = props;  

    const labelName = useMemo(() => {

        if(data.tag === 'saldo') {
          return {
           label: 'Saldo Atual',
           color: '#3b3dbf'
          }
        } else if(data.tag === 'receita') {
            return {
             label: 'Entradas de Hoje',
             color: '#00b94a'
            }  
        } else {
            return {
             label: 'Saidas de Hoje',
             color: '#EF463a'
            }
        }

    }, [ data ]);
  
    return(
      <Container colorCustom={labelName.color} >
  
       <Label>{labelName.label}</Label>
       <Balance>R$ {data.saldo}</Balance>
       
      </Container>
    );
  
  }