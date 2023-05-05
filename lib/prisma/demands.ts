import { Demand } from "@/types";
import prisma from ".";

export async function createDemand(demand: Demand) {
    try {
        const demandFromDb = await prisma.demand.create({ data: demand as any });
        return { demand: demandFromDb as Demand }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export async function findDemand(id: any) {
    try {
        const demandFromDb = await prisma.demand.findUnique({
            where: { id }
        });
        return { demand: demandFromDb as Demand }
    } catch (error) {
        return { error }
    }
}
export async function updateDemand(id: any, data: Demand) {
    try {
        const demandFromDb = await prisma.demand.update({
            where: { id },
            data: data as any
        });
        return { demand: demandFromDb as Demand }
    } catch (error) {
        return { error }
    }
}
