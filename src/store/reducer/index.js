const initialState = {
  
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
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "DADOS_LOGIN":
      return{ 
        ...state,
        email: action.payload,
        password: action.payload,
      }
      
    case "ENDERECO":
      return {
        ...state,
        cep: action.payload,
        estado: action.payload,
        cidade: action.payload,
        bairro: action.payload,
        rua: action.payload,
        numero: action.payload

      };
    case "PESSOAL":
      return{
        ...state,
        nome: action.payload,
        sobreNome: action.payload,
        cpf: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
