import Link from 'next/link';
import React from 'react';
import Actions from './Actions';

async function getClient(clientId: number) {
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
        <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 lg:p-24">
          <Link href="/">Πίσω</Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">{client.name}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Εταιρεία:</label>
              <p>{client.company}</p>
            </div>
            <div>
              <label className="font-semibold">Πινακίδα:</label>
              <p>{client.plate}</p>
            </div>
            <div>
              <label className="font-semibold">Τύπος Οχήματος:</label>
              <p>{client.vehicleType}</p>
            </div>
            <div>
              <label className="font-semibold">Πλάνο:</label>
              <p>{client.plan}</p>
            </div>
            <div>
              <label className="font-semibold">Τιμή:</label>
              <p>{client.price}</p>
            </div>
            <div>
              <label className="font-semibold">Τηλέφωνο:</label>
              <p>{client.phone}</p>
            </div>
            <div className='col-span-2'>
              <label className="font-semibold">Περιεχόμενο:</label>
              <p>{client.content}</p>
            </div>
          </div>
          <Actions id={client.id} />
        </main>
      );
}