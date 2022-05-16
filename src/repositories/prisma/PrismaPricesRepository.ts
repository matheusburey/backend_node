import { connectionDB } from "../connectionDB";
import { PriceRepository, PriceData } from "../PricesRepository";

export class PrismaPriceRepository implements PriceRepository {
	async findValue({ origin, destiny }: PriceData) {

		const value = await connectionDB.prices.findFirst({

			where: { AND: [ { origin }, { AND: { destiny }, }, ] },
			select: { value: true }
		})

		return value
	}
}
