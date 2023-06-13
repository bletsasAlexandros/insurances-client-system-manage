import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try{
        const client = JSON.parse(req.body)
        if(req.method === 'POST'){
            const data = await prisma.client.delete({
                where: {
                    id: client.id
                }
            })
            return res.status(200).json(data)
        }
    }catch (error) {
        return res.status(500).json(error)
    }
}