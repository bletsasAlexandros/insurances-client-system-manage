import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const client = JSON.parse(req.body);
        if (req.method === "POST") {
            if (!client.name.length) {
                return res.status(500).json({ message: "Empty Name" });
            }
            try {
                console.log(client);
                const data = await prisma.client.create({
                    data: {
                        name: client.name,
                        content: client.content,
                        company: client.company,
                        plan: client.plan,
                        price: client.price,
                        dueDate: client.dueDate,
                    },
                });
                res.status(200).json(data);
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
        }
    } catch (error) {
        return res.status(500).json({ message: "Invalid Request Body" });
    }
}
