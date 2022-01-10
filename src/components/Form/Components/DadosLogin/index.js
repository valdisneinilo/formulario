import { useState } from "react";
import { TextField, FormControlLabel, Switch } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from 'styled-components'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [valuePassword, setValuePassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(false);


  function mostrarSenha(){
    setValuePassword(!valuePassword);
  }

  function validateEmail({target}) {
    const email = target.value
    var re = /\S+@\S+\.\S+/;
    const res = re.test(email);
    if(email.length <=0){
      setErrorEmail(true)
    }else{
      setErrorEmail(res)
    }
    return res
  }

  function handleBlurPassword({target}){
    const pass = target.value
    if(pass !== password){
      setErrorPassword(true)
    }else{
      setErrorPassword(false)
    }
  }

  return (
    <>
      <TextField
        label="Email"
        id="email"
        type="email"
        required
        helperText={errorEmail? '' : "Digite um email válido"}
        error={!errorEmail}
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
        onBlur={handleBlurPassword}
        error={errorPassword}
        helperText={errorPassword? 'Senhas diferentes!' : ""}

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

        <VisibilityIcon  
        onClick={mostrarSenha}
        style={{cursor:"pointer"}}/>
      </ContainerOpcoesShowPassword>
    </>
  );
};


const ContainerOpcoesShowPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;;
`;

export default Login;
