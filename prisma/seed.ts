import { prisma } from '../src/lib/prisma';

async function seed() {

    await prisma.event.create({
        data: {
            id: "6dc52c33-105d-4610-94a7-0af0bf574779",
            title: "UNITE TEST",
            slug: "unit-test",
            details: "Evento para devs",
            maximumAttendees: 100,
        }
    })
}

seed().then(() => {
    console.log("Database seed started!");
    prisma.$disconnect();
})