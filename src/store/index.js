import { createStore } from 'redux';


const INITIAL_STATE = {
  email: "",
  password: "",
  nome: "",
  sobreNome: "",
  cpf: "",
  cep: "",
  estado: "",
  cidade: "",
  bairro: "",
  rua: "",
  numero: "",
  promocoes: "",
  novidades: "",
};

function dados(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DADOS_LOGIN":
      return{ 
        ...state,
        email: action.email,
        password: action.password,
        promocoes: action.promocoes,
        novidades: action.novidades
      }
      
    case "ENDERECO":
      return {
        ...state,
        cep: action.cep,
        estado: action.estado,
        cidade: action.cidade,
        bairro: action.bairro,
        rua: action.rua,
        numero: action.numero

      };
    case "PESSOAL":
      return{
        ...state,
        nome: action.nome,
        sobreNome: action.sobreNome,
        cpf: action.cpf,
      };
    default:
      return state;
  }
}


const store = createStore( dados,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;