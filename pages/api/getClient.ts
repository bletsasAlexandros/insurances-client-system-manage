import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try{
        const data = await prisma.client.findUnique({
            where: {
                id: parseInt(req.query.id as string)
            }
        })
        return res.status(200).json(data)
    }catch (error) {
        return res.status(500).json(error)
    }
}