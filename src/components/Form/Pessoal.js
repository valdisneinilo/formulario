import { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@mui/material";

const Login = () => {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <>
      <TextField
        id="text"
        label="Nome"
        variant="outlined"
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
        fullWidth
        style={{ marginBottom: ".5rem" }}
        type="text"
        value={sobreNome}
        onChange={({ target }) => setSobreNome(target.value)}
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        style={{ marginBottom: ".5rem" }}
        type="number"
        value={cpf}
        onChange={({ target }) => setCpf(target.value)}
      />

      <Button variant="contained" size="large" style={{ marginTop: ".5rem" }}>
        Próximo{" "}
      </Button>
    </>
  );
};

export default Login;
