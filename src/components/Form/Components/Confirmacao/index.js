import React from 'react'
import { useSelector } from 'react-redux';
import {ContainerButton} from '../../index'
import { Button } from "@mui/material";



const Index = ({etapa, setEtapa}) => {
    const state = useSelector((state) => state);

    return (
      <>
        <ul>
          <li>Email: {state.email}</li>
          <li>Senha: {state.password}</li>
          <li>Nome: {state.nome}</li>
          <li>Sobrenome: {state.sobreNome}</li>
          <li>CPF: {state.cpf}</li>
          <li>Cep: {state.cep}</li>
          <li>Estado: {state.estado}</li>
          <li>Cidade: {state.cidade}</li>
          <li>Rua: {state.rua}</li>
          <li>Numero: {state.numero}</li>
        </ul>

        <ContainerButton>

          <Button
            fullWidth
            color="primary"
            variant="contained"
            size="large"
            disabled={false}
            style={{ marginTop: ".5rem", color: "#fff" }}
            onClick={() => setEtapa(etapa - 1)}

          >
            Voltar
          </Button>


            <Button
                fullWidth
                color="primary"
                variant="contained"
                size="large"
                disabled={false}
                style={{ marginTop: ".5rem", color: "#fff" }}
                onClick={() => setEtapa(etapa + 1)}
            >
            finalizar cadastro
            </Button>
        </ContainerButton>
      </>
    )
}

export default Index;
