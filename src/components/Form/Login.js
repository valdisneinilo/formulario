import { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  function handleClick(event) {
    event.preventDefault();
    console.log(`
      email: ${email}
      password: ${password}
      promocoes: ${promocoes} 
      novidades:${novidades}`);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        autoFocus
        fullWidth
        style={{ marginBottom: ".5rem" }}
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <TextField
        id="password"
        label="Senha"
        variant="outlined"
        fullWidth
        style={{ marginBottom: ".5rem" }}
        type={"password"}
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <TextField
        id="repetePassword"
        label="Repetir Senha"
        variant="outlined"
        fullWidth
        style={{ marginBottom: ".5rem" }}
        type={"password"}
      />
      <div>
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              name="promocoes"
              checked={promocoes}
              onChange={({ target }) => setPromocoes(target.checked)}
            />
          }
        />
        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              name="novidades"
              checked={novidades}
              onChange={({ target }) => setNovidades(target.checked)}
            />
          }
        />
      </div>

      <Button
        variant="contained"
        size="large"
        style={{ marginTop: ".5rem" }}
        onClick={handleClick}
      >
        Próximo{" "}
      </Button>
    </>
  );
};

export default Login;
