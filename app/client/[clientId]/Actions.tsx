'use client'

import Link from 'next/link';
import React from 'react';

export default function Actions ({ id }: any) {
    async function deleteClient(id: number) {
        const res = await fetch('/api/deleteClient', {
            method: 'POST',
            body: JSON.stringify({ id }),
        });
        if (!res.ok) {
            window.location.href = '/';
        }
        return res.json();
    }

    return (
        <div className='flex justify-center'>
        <Link href={`/client/${id}/edit`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Επεξεργασία
            </button>
        </Link>
        <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => { deleteClient(id) }} >
            Διαγραφή
        </button>
        </div>
    );
    };