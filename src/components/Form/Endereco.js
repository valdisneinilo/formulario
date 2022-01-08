import { useState } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const Login = () => {
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");

  return (
    <>
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
          <MenuItem value="Acre">AC</MenuItem>
          <MenuItem value="Alagoas">AL</MenuItem>
          <MenuItem value="Amapá">AP</MenuItem>
          <MenuItem value="Amazonas">AM</MenuItem>
          <MenuItem value="Bahia">BA</MenuItem>
          <MenuItem value="Ceará">CE</MenuItem>
          <MenuItem value="Distrito Federal">DF</MenuItem>
          <MenuItem value="Espírito Santo">ES</MenuItem>
          <MenuItem value="Goiás">GO</MenuItem>
          <MenuItem value="Maranhão">MA</MenuItem>
          <MenuItem value="Mato Grosso">MT</MenuItem>
          <MenuItem value="Mato Grosso do Sul">MS</MenuItem>
          <MenuItem value="Minas Gerais">MG</MenuItem>
          <MenuItem value="Pará">PA</MenuItem>
          <MenuItem value="Paraíba">PB</MenuItem>
          <MenuItem value="Paraná">PR</MenuItem>
          <MenuItem value="Pernambuco">PE</MenuItem>
          <MenuItem value="Piauí">PI</MenuItem>
          <MenuItem value="Rio de Janeiro">RJ</MenuItem>
          <MenuItem value="Rio Grande do Norte">RN</MenuItem>
          <MenuItem value="Rio Grande do Sul">RS</MenuItem>
          <MenuItem value="Rondônia">RO</MenuItem>
          <MenuItem value="Roraima">RR</MenuItem>
          <MenuItem value="Santa Catarina">SC</MenuItem>
          <MenuItem value="São Paulo">SP</MenuItem>
          <MenuItem value="Sergipe">SE</MenuItem>
          <MenuItem value="Tocantins">TO</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Cidade"
        fullWidth
        id="cidade"
        variant="outlined"
        style={{ marginBottom: ".5rem" }}
        type="text"
        value={cidade}
        onChange={({ target }) => setCidade(target.value)}
      />

      <TextField
        label="CEP"
        fullWidth
        id="cep"
        variant="outlined"
        style={{ marginBottom: ".5rem" }}
        type="number"
        value={cep}
        onChange={({ target }) => setCep(target.value)}
      />

      <TextField
        label="Bairro"
        fullWidth
        id="bairro"
        variant="outlined"
        style={{ marginBottom: ".5rem" }}
        type="text"
        value={bairro}
        onChange={({ target }) => setBairro(target.value)}
      />

      <TextField
        label="Rua"
        fullWidth
        id="rua"
        variant="outlined"
        style={{ marginBottom: ".5rem" }}
        type="text"
        value={rua}
        onChange={({ target }) => setRua(target.value)}
      />

      <TextField
        label="Número"
        fullWidth
        id="numero"
        variant="outlined"
        style={{ marginBottom: ".5rem" }}
        type="number"
        value={numero}
        onChange={({ target }) => setNumero(target.value)}
      />

      <Button variant="contained" size="large" style={{ marginTop: ".5rem" }}>
        Próximo{" "}
      </Button>
    </>
  );
};

export default Login;
