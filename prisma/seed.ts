import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dddPrices = [
	{
		origin: "011",
		destiny: "016",
		value: 1.9
	},
	{
		origin: "016",
		destiny: "011",
		value: 2.9
	},
	{
		origin: "011",
		destiny: "017",
		value: 1.7
	},
	{
		origin: "017",
		destiny: "011",
		value: 2.7
	},
	{
		origin: "011",
		destiny: "018",
		value: 0.9
	},
	{
		origin: "018",
		destiny: "011",
		value: 1.9
	}
]

async function main() {
	await prisma.prices.createMany({ data: dddPrices});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
