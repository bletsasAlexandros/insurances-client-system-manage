'use client'

//i want to use the FormPost component in both the addClient and editClient pages

import Link from 'next/link';
import React from 'react';
import FormPost from '../../../addClient/Form';

//get the client's props
async function getClient(clientId: number) {
    const client = await fetch(`/api/getClient?id=${clientId}`, {
        method: 'GET'
    });

    if (!client) {
        throw new Error('Client not found');
    }
    return client.json();
}

export default async function EditClient({params}: {params: {clientId: number}}) {

    const client = await getClient(params.clientId);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href="../">Πίσω</Link>
            <h1>Επεξεργασία Πελάτη</h1>
            <FormPost clientData={client}/>
        </main>
    );
}

