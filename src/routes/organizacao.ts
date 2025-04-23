import express from "express";
import { Request, Response } from "express";
import { cadastrarOrganizacao, getOrganizacao} from "../controllers/organizacao.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const message = getOrganizacao();
  res.status(200).json({ message });
});

router.post("/", (req: Request, res: Response) => {
  const organizacao = req.body;
  const cadastro = cadastrarOrganizacao(organizacao);
  
  if (!cadastro ){
    res.status(400).send();
    return;  
  }

  res.status(200).send();
});

router.put("/organizacao/:id", (req: Request, res: Response) =>{
  const organizacaoId = Number(req.params.id);

  const dataToUpdate = req.body;

  organizacaoId.forEach((organizacao,index) => {
    if (organizacao.id === organizacaoId) {
      organizacao[index] = { ...organizacao, ... dataToUpdate};

      res.status(204).send();
      return;
    }
  })
})

export default router;