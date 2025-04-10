import express from "express";
import { Request, Response } from "express";
import { getHello } from "../controllers/demo.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const message = getHello();
  res.status(200).json({ message });
});

export default router;
