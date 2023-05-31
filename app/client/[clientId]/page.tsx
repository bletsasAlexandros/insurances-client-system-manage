import Link from 'next/link';
import React from 'react';
import Actions from './Actions';

async function getClient(clientId: number) {
    console.log(`${process.env.BASE_URL}`)
    const client = await fetch(`${process.env.BASE_URL}/api/getClient?id=${clientId}`, {
        method: 'GET'
    });
    if (!client) {
        throw new Error('Client not found');
    }
    return client.json();
    }

export default async function Client({params}: {params: {clientId: number}}) {
    const client = await getClient(params.clientId);

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
            <Actions id={client.id} />
        </main>
    );
}