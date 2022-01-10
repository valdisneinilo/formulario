import Login from "./Components/DadosLogin";
import Pessoal from "./Components/Pessoal";
import Endereco from "./Components/Endereco";
import Confirmacao from './Components/Confirmacao';
import {Stepper, Step, StepLabel } from "@mui/material";
import styled from "styled-components";


import { useState, useEffect } from "react";

const Form = () => {
  const [etapa, setEtapa] = useState(0);
  
  const formularioAtual = [
    <Login etapa={etapa} setEtapa={setEtapa}/>, 
    <Pessoal etapa={etapa} setEtapa={setEtapa}/>, 
    <Endereco etapa={etapa} setEtapa={setEtapa}/>, 
    <Confirmacao etapa={etapa} setEtapa={setEtapa}/>
  ];


  
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log(etapa)
    if (etapa === 4) {
      console.log("finalizado");
    } 

    if(etapa === 1){
      console.log('olá')
      // dispatch({ type: 'somar', payload: 25 });
    }

    
  }, [etapa]);

  return (
    <form>
      <Stepper activeStep={etapa} style={{ marginBottom: "50px" }}>
        <Step>
          <StepLabel>Dados de login</StepLabel>
        </Step>
        <Step>
          <StepLabel> Dados pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirmação</StepLabel>
        </Step>
      </Stepper>

      {formularioAtual[etapa]}
      
    </form>
  );
};

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;

  Button {
    margin: 0 0.2rem;
  }
`;
export default Form;
