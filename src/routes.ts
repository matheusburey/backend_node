import { Request, Response, Router } from "express";

import { PrismaPriceRepository } from "./repositories/prisma/PrismaPricesRepository";
import { CalculatePricesUseCase } from "./useCase/CalculatePricesUseCase";

export const router = Router();

router.post('/calculate', async (req: Request, res: Response) => {
	const { origin, destiny, plan, minute } = req.body;

	const calculatePricesUseCase = new CalculatePricesUseCase(new PrismaPriceRepository())
	const output = await calculatePricesUseCase.execute({ origin, destiny, plan, minute })

	return res.status(output.status).send(output.msg);
})


