import { useState } from "react";
import { TextField,Button } from "@mui/material";
import {ContainerButton} from '../../index'

const Login = ({etapa,setEtapa}) => {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [erroCpf, setErroCpf] = useState(true);

  function validateCpf(cpf) {
    const re = /^([\d]{3})\.?([\d]{3})\.?([\d]{3})-?([\d]{2})/;
    if (re.test(cpf)) {
      const cpfValue = cpf.replace(re, "$1.$2.$3-$4");
      setCpf(cpfValue);
    }
    if (typeof cpf !== "string") {
      setErroCpf(null);
      setErroCpf(false);
      return erroCpf;
    }

    cpf = cpf.replace(/[^\d]+/g, "");

    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
      setErroCpf(null);
      setErroCpf(false);
      return erroCpf;
    }

    cpf = cpf.split("");

    const validator = cpf
      .filter((digit, index, array) => index >= array.length - 2 && digit)
      .map((el) => +el);

    const toValidate = (pop) =>
      cpf
        .filter((digit, index, array) => index < array.length - pop && digit)
        .map((el) => +el);

    const rest = (count, pop) =>
      ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) *
        10) %
        11) %
      10;

    const response = !(
      rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]
    );
    setErroCpf(null);
    setErroCpf(response);

    return erroCpf;
  }

  return (
    <>
      <TextField
        id="text"
        label="Nome"
        variant="outlined"
        type="text"
        required
        autoFocus
        fullWidth
        style={{ marginBottom: ".5rem" }}
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        type="text"
        required
        fullWidth
        style={{ marginBottom: ".5rem" }}
        value={sobreNome}
        onChange={({ target }) => setSobreNome(target.value)}
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        type="text"
        required
        fullWidth
        error={!erroCpf}
        helperText={erroCpf ? "" : "Digite um CPF válido"}
        style={{ marginBottom: ".5rem" }}
        value={cpf}
        onChange={({ target }) => setCpf(target.value)}
        onBlur={({ target }) => validateCpf(target.value)}
      />
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
          Próximo
        </Button>
      </ContainerButton>
    </>
  );
};

export default Login;
