import { useState } from "react";
import styled from "styled-components";
import { ContainerButton } from "../../index";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  Alert
} from "@mui/material";

import { useDispatch } from "react-redux";

const Login = ({ etapa, setEtapa }) => {
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [cepErro, setCepErro] = useState(false);
  const [erro, setErro] = useState(null);

  const dispatch = useDispatch();

  function handleClick() {
    if (
      cep.length <= 0 ||
      estado.length <= 0 ||
      cidade.length <= 0 ||
      bairro.length <= 0 ||
      rua.length <= 0 ||
      numero.length <= 0
    ) {
      setErro(<Alert severity="error">Preencha todos os campos!</Alert>);

      setTimeout(() => {
        setErro('')
      }, 3000)
      return erro;
    } else if (cepErro === true) {

      setErro(<Alert severity="error">Este cep é inválido!</Alert>);
      setTimeout(() => {
        setErro("");

      }, 3000)
      return erro;
    } else {
      dispatch({
        type: "ENDERECO",
        cep: cep,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: numero,
      });
      setEtapa(etapa + 1);
    }
  }

  async function formatarCEP(cep) {
    const re = /^([\d]{2})\.?([\d]{3})-?([\d]{3})/;

    if (re.test(cep)) {
      const cepValue = cep.replace(re, "$1.$2-$3");
      setCep(cepValue.toString());
      setCepErro(false);

      const novoCep = cep.replace(/\D/g, "");
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(novoCep)) {
        const result = await fetch(`https://viacep.com.br/ws/${novoCep}/json/`);
        const data = await result.json();
        setEstado(data.uf);
        setCidade(data.localidade);
        setBairro(data.bairro);
        setRua(data.logradouro);
      }
    } else {
      setCepErro(true);
    }
    return cepErro;
  }

  return (
    <>
      <TextField
        label="CEP"
        fullWidth
        id="cep"
        variant="outlined"
        type="text"
        required
        error={cepErro}
        helperText={cepErro ? "Digite um cep válido" : ""}
        autoFocus
        style={{ marginBottom: ".5rem" }}
        value={cep}
        onChange={({ target }) => setCep(target.value)}
        onBlur={({ target }) => formatarCEP(target.value)}
      />
      <ContainerUfCidade>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="estado">Estado</InputLabel>
          <Select
            label="Estado"
            labelId="estado"
            id="estado"
            style={{ marginBottom: ".5rem" }}
            value={estado}
            onChange={({ target }) => setEstado(target.value)}
          >
            <MenuItem value="AC">AC</MenuItem>
            <MenuItem value="AL">AL</MenuItem>
            <MenuItem value="AP">AP</MenuItem>
            <MenuItem value="AM">AM</MenuItem>
            <MenuItem value="BA">BA</MenuItem>
            <MenuItem value="CE">CE</MenuItem>
            <MenuItem value="DF">DF</MenuItem>
            <MenuItem value="ES">ES</MenuItem>
            <MenuItem value="GO">GO</MenuItem>
            <MenuItem value="MA">MA</MenuItem>
            <MenuItem value="MT">MT</MenuItem>
            <MenuItem value="MS">MS</MenuItem>
            <MenuItem value="MG">MG</MenuItem>
            <MenuItem value="PA">PA</MenuItem>
            <MenuItem value="PB">PB</MenuItem>
            <MenuItem value="PR">PR</MenuItem>
            <MenuItem value="PE">PE</MenuItem>
            <MenuItem value="PI">PI</MenuItem>
            <MenuItem value="RJ">RJ</MenuItem>
            <MenuItem value="RN">RN</MenuItem>
            <MenuItem value="RS">RS</MenuItem>
            <MenuItem value="RO">RO</MenuItem>
            <MenuItem value="RR">RR</MenuItem>
            <MenuItem value="SC">SC</MenuItem>
            <MenuItem value="SP">SP</MenuItem>
            <MenuItem value="SE">SE</MenuItem>
            <MenuItem value="TO">TO</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Cidade"
          fullWidth
          id="cidade"
          variant="outlined"
          type="text"
          required
          style={{ marginBottom: ".5rem" }}
          value={cidade}
          onChange={({ target }) => setCidade(target.value)}
        />
      </ContainerUfCidade>

      <TextField
        label="Bairro"
        fullWidth
        id="bairro"
        variant="outlined"
        type="text"
        required
        style={{ marginBottom: ".5rem" }}
        value={bairro}
        onChange={({ target }) => setBairro(target.value)}
      />

      <TextField
        label="Rua"
        fullWidth
        id="rua"
        variant="outlined"
        type="text"
        required
        style={{ marginBottom: ".5rem" }}
        value={rua}
        onChange={({ target }) => setRua(target.value)}
      />

      <TextField
        label="Número"
        fullWidth
        id="numero"
        variant="outlined"
        type="number"
        required
        style={{ marginBottom: ".5rem" }}
        value={numero}
        onChange={({ target }) => setNumero(target.value)}
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
          onClick={handleClick}
        >
          Próximo
        </Button>
      </ContainerButton>
      {erro}
    </>
  );
};

const ContainerUfCidade = styled.div`
  display: flex;
`;
export default Login;
