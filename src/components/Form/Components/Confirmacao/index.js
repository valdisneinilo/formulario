import React from "react";
import { useSelector } from "react-redux";
import { ContainerButton } from "../../index";
import { Button } from "@mui/material";
import styled from "styled-components";

const Index = ({ etapa, setEtapa }) => {
  const state = useSelector((state) => state);

  return (
    <>
      <Container>
        <li>
          <strong>Email:</strong> &nbsp; {state.email}
        </li>
        <li>
          <strong>Senha:</strong> &nbsp; {state.password}
        </li>
        <li>
          <strong>Nome:</strong> &nbsp; {state.nome}
        </li>
        <li>
          <strong>Sobrenome:</strong> &nbsp; {state.sobreNome}
        </li>
        <li>
          <strong>CPF:</strong> &nbsp; {state.cpf}
        </li>
        <li>
          <strong>Cep:</strong> &nbsp; {state.cep}
        </li>
        <li>
          <strong>Estado:</strong> &nbsp; {state.estado}
        </li>
        <li>
          <strong>Cidade:</strong> &nbsp; {state.cidade}
        </li>
        <li>
          <strong>Rua:</strong> &nbsp; {state.rua}
        </li>
        <li>
          <strong>Numero:</strong> &nbsp; {state.numero}
        </li>
        <li>
          <strong>Promoções:</strong> &nbsp; {state.promocoes}
        </li>
        <li>
          <strong>Novidades:</strong> &nbsp; {state.novidades}
        </li>
      </Container>

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
  );
};

const Container = styled.ul``;

export default Index;
