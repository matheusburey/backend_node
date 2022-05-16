export interface PriceData {
	origin: string;
	destiny: string;
	value?: string;
}

export interface PriceRepository {
	findValue: (data: PriceData) => Promise<{ value: number } | null>;
}
