//like getClient.ts i want to update the client
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
                const data = await prisma.client.update({
                    where: {
                        id: client.id
                    },
                    data: {
                        name: client.name,
                        content: client.content,
                        company: client.company,
                        plan: client.plan,
                        price: client.price,
                        plate: client.plate,
                        vehicleType: client.vehicleType,
                        dueDate: client.dueDate,
                        phone: client.phone,
                    },
                });
                res.status(200).json(data);
            } catch (error) {
                return res.status(500).json({ message: "An error occured" });
            }
        }
    } catch (error) {
        return res.status(500).json({ message: "Invalid Request Body" });
    }
}
//now we can test it in the browser
// http://localhost:3000/api/updateClient
