import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client'

export default async function jandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try{
        const data = await prisma.client.findMany()
        return res.status(200).json(data)
    }catch (error) {
        return res.status(500).json(error)
    }
}