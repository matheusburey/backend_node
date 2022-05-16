import { PriceRepository } from "../repositories/PricesRepository";

const descontObj = { "FaleMais30": 30, "FaleMais60": 60, "FaleMais120": 120 }

type DescontObjType = keyof typeof descontObj;

interface Props {
	origin: string;
	destiny: string;
	plan: DescontObjType;
	minute: string;
}

export class CalculatePricesUseCase {
	constructor(
		private priceRepository: PriceRepository,
	) { }
	async execute({ origin, destiny, plan, minute }: Props) {

		const priceMin = await this.priceRepository.findValue({ origin, destiny })

		if (!priceMin) {
			return { status: 404, msg: "value not found" }
		}

		const value = priceMin.value * Number(minute) + "";

		const descont = descontObj[plan]
		const valuewithplan = (Number(minute) - descont) * (priceMin.value * 1.1) + "";

		return { status: 404, msg:{plan, value, valuewithplan} }
	}
}
