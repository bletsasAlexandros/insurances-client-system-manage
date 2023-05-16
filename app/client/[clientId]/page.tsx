import Link from 'next/link';
import React from 'react';

async function getClient(clientId: any) {
    const client = await fetch(`${process.env.BASE_URL}/api/getClient?id=${clientId}`, {
        method: 'GET'
    });
    if (!client) {
        throw new Error('Client not found');
    }
    return client.json();
    }

export default async function Client({params}: {params: {clientId: string}}) {
    const client = await getClient(params.clientId);
    console.log(client);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href="/">Πίσω</Link>
            <h1 className="text-lg">{client.name}</h1>
            <p>{client.content}</p>
            <p>{client.company}</p>
            <p>{client.plate}</p>
            <p>{client.vehicleType}</p>
            <p>{client.plan}</p>
            <p>{client.price}</p>
            <p>{client.phone}</p>
        </main>
    );
}