import express from "express";
import organizacaoRoutes from "./src/routes/organizacao.routes";

const app = express();

app.use(express.json());


app.use("/organizacao", organizacaoRoutes);


app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
});
