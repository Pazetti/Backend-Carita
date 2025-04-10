// Importação da biblioteca express
import express from "express";
import demoRoutes from "./src/routes/demo.routes";
import pontoRoutes from "./src/routes/pontosArrecadacao.routes"

// Criação da aplicação
const app = express();

// Configura aplicação para receber json no body das requisições
app.use(express.json());

// atribuição das rotas relativas a demo
app.use("/pontoarrecadacao", pontoRoutes);

/**
 * Inicia aplicação na Porta 3000
 *  */
app.listen(3000, () => {
  console.log("Servidor executando na Porta 3000");
});
