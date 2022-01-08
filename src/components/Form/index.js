import Login from "./Login";
import Pessoal from "./Pessoal"
import Endereco from "./Endereco"

import {useState, useEffect} from "react";

const Form = () => {

  const [etapa, setEtapa] = useState(1);
  const [form, setForm] = useState(null);

  useEffect(() => {
    switch (etapa) {
      case 1:
        setForm(<Login/>)
        break 
      case 2:
        setForm(<Pessoal/>)
        break
      case 3:
        setForm(<Endereco/>)
        break 
      default:
        break;
    }
   
  }, [etapa])

 

  return (
    <form  >

      {form}
     {/* <Login/>
     <Pessoal/>
     <Endereco/> */}
    </form>
  );
};

export default Form;
