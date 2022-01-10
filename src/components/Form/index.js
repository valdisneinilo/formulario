import Login from "./Components/DadosLogin";
import Pessoal from "./Components/Pessoal";
import Endereco from "./Components/Endereco";
import { Button, Stepper,Step,StepLabel } from "@mui/material";

import { useState } from "react";

const Form = () => {
  const [etapa, setEtapa] = useState(0);
  const formularioAtual = [<Login />, <Pessoal />, <Endereco />];

  function handleFetch() {
    console.log("finalizado");
  }
  

  function handleEtapas() {
    if (etapa === 2) {
      return handleFetch();
    } else {
      setEtapa(etapa + 1);
    }
  }

  return (
    <form>

      <Stepper activeStep={etapa} style={{marginBottom:"50px"}} >
        <Step><StepLabel>Dados de login</StepLabel></Step>
        <Step><StepLabel> Dados pessoais</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
      </Stepper>
      {formularioAtual[etapa]}
      <Button
        fullWidth
        color="primary"
        variant="contained"
        size="large"
        disabled={false}
        style={{ marginTop: ".5rem", color: "#fff" }}
        onClick={handleEtapas}
      >
        {etapa !== 2 ? "Próximo" : "Finalizar cadastro"}
      </Button>
    </form>
  );
};

export default Form;
