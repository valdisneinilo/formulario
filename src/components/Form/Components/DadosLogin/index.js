import { useState } from "react";
import { TextField, FormControlLabel, Switch } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styled from "styled-components";
import { ContainerButton } from "../../index";
import { Button, Alert } from "@mui/material";
import { useDispatch } from "react-redux";

const Login = ({ etapa, setEtapa }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepet, setPasswordRepet] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [valuePassword, setValuePassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [erro, setErro] = useState(null);

  const dispatch = useDispatch();

  function handleClick(state) {
    if (email.length <= 0 || password.length <= 0) {

      setErro(<Alert severity="error"> Preencha todos os campos!</Alert>);
      setTimeout(() => {
        setErro('');
      }, 3000)
      
      return erro;
    } else if (errorEmail) {

      setErro(<Alert severity="error">Email inválido!</Alert>);
      setTimeout(() => {
        setErro('');
      }, 3000)

      return erro;
    } else if (password !== passwordRepet) {

      setErro(<Alert severity="error"> Suas senhas são diferentes!</Alert>);
      setTimeout(() => {
        setErro('');
      }, 3000)

      return erro;
    } else if (password.length < 6){
      setErro(<Alert severity="error"> Sua senha deve ter no mínimo 6 caracteres!</Alert>);
      setTimeout(() => {
        setErro('');
      }, 3000)

      return erro
    } else {

      dispatch({
        type: "DADOS_LOGIN",
        email: email,
        password: password,
        promocoes: promocoes,
        novidades: novidades,
      });
      
      setEtapa(etapa + 1);
    }
  }

  function mostrarSenha() {
    setValuePassword(!valuePassword);
  }

  function validateEmail({ target }) {
    const email = target.value;
    var re = /\S+@\S+\.\S+/;
    const res = re.test(email);
    if (email.length <= 0) {
      setErrorEmail(true);
    } else {
      setErrorEmail(!res);
    }
    return res;
  }

  function handleBlurPassword({ target }) {
    const pass = target.value;
    if (pass !== password) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  }

  return (
    <>
      <TextField
        label="Email"
        id="email"
        type="email"
        required
        helperText={errorEmail ? "Digite um email válido" : ""}
        error={errorEmail}
        variant="outlined"
        autoFocus
        fullWidth
        style={{ marginBottom: ".5rem" }}
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        onBlur={validateEmail}
      />

      <TextField
        id="password"
        label="Senha"
        type={valuePassword ? "text" : "password"}
        required
        variant="outlined"
        fullWidth
        style={{ marginBottom: ".5rem" }}
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        error={errorPassword}
      />

      <TextField
        id="repetePassword"
        label="Repetir Senha"
        type={valuePassword ? "text" : "password"}
        required
        variant="outlined"
        fullWidth
        style={{ marginBottom: ".5rem" }}
        value={passwordRepet}
        onChange={({ target }) => setPasswordRepet(target.value)}
        onBlur={handleBlurPassword}
        error={errorPassword}
        helperText={errorPassword ? "Senhas diferentes!" : ""}
      />

      <ContainerOpcoesShowPassword>
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

        <VisibilityIcon onClick={mostrarSenha} style={{ cursor: "pointer" }} />
      </ContainerOpcoesShowPassword>

      <ContainerButton>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          size="large"
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

const ContainerOpcoesShowPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; ;
`;

export default Login;
