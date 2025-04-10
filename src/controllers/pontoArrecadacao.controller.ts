import { IpontoArrecadacao } from "../../Ipontoarrecadacao";

export const getPontoArrecadacao = () => {

    return "Hello World";
  };

  const pontoArrecadacao = [
{
  id: 1,
  nome: "nometeste",
  CNPJ: "8213648732652642",
  telefone: 732167432764,
  email:"emailteste@email.com",
  horarioFuncionamento: "18h às 22h",
  areaAtuacao:"educação",

  logradouro:"rua teste",
  numero: 12,
  bairro: "bairroteste",
  cidade:"cidadeteste",
  estado:"SP",
  CEP: "20.100-005",


  numeroPix:"12345678890832",
  descricaoInstituicao: "lidshfkdskgfkudsfkhdkfhykvjdfmhxkvs,nbxjfdvb",
  link:"teste.com",

  qrCode:"dhidhaihfieot4eweuewfeskkfsfdsnsd",
  logo:"dhidhaihfieot4eweuewfeskkfsfdsnsd",
  documentacoes:"dhidhaihfieot4eweuewfeskkfsfdsnsd"

},
];

 

export const cadastrarPontoArrecadacao = (pontoArrecadacao: IpontoArrecadacao): boolean => {
    return true;
}




