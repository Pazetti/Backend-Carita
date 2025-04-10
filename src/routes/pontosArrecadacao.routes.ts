import express from "express";
import { Request, Response } from "express";
import { cadastrarPontoArrecadacao, getPontoArrecadacao } from "../controllers/pontoArrecadacao.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const message = getPontoArrecadacao();
  res.status(200).json({ message });
});

router.post("/", (req: Request, res: Response) => {
  const pontoArrecadacao = req.body;
  const cadastro = cadastrarPontoArrecadacao(pontoArrecadacao);
  
  if (!cadastro ){
    res.status(400).send();
    return;  
  }

  res.status(200).send();
});


export default router;