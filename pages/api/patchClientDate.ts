//i want only to update the dueDate by adding the plan to it in months by client id

import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client'
import { DateTime } from "luxon";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const client = JSON.parse(req.body);
        const currentClient = await prisma.client.findUnique({
            where: {
                id: client.id
            }
        })
        if (!currentClient) {
            return res.status(404).json({ message: "Client not found" });
          }
        if (req.method === "POST") {

            //add plan which is string to duteDate which is date and check if the plan is null first
            if (!currentClient.plan.length) {
                return res.status(500).json({ message: "Empty Plan" });
            }
            //convert the plan to number
            const plan = parseInt(currentClient.plan)
            //convert the dueDate to luxon date
            const dueDate = DateTime.fromJSDate(currentClient.dueDate)
            //add the plan to the dueDate
            const newDueDate = dueDate.plus({ months: plan }).toJSDate()
            //update the dueDate
            client.dueDate = newDueDate

            try {
                const data = await prisma.client.update({
                    where: {
                        id: client.id
                    },
                    data: {
                        dueDate: client.dueDate,
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
