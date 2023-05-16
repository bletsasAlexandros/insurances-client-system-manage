'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { DateTime } from 'luxon';
import Link from 'next/link';

async function deleteClient(id: number) {
  const res = await fetch('/api/deleteClient', {
    method: 'POST',
    body: JSON.stringify({ id }),
  });
  if (!res.ok) {
    console.log(res);
    window.location.reload();
  }
  return res.json();
}

export default function Client({ user }: any) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    const isMutating = isPending || isFetching;

    const handleDelete = async () => {
        setIsFetching(true);

        //Delete client
        await deleteClient(user.id);

        setIsFetching(false);

        startTransition(() => {
            router.refresh();
        });
        
    };

    return (
            <div key={user.id} className='bg-white rounded-lg shadow-md p-4 w-full m-4'>
                <div className='flex items-center mb-4'>
                    <Link href={`/client/${user.id}`}>
                        <h1 className="text-lg px-4">{user.name}</h1>
                    </Link>
                    <p className="text-gray-700 px-2">{user.content}</p>
                    <p className="text-gray-700 px-2">{user.phone}</p>
                    <p className="text-gray-700 px-2">{user.company}</p>
                    <p className="text-gray-700 px-2">{user.vehicleType}</p>
                    <p className="text-gray-700 px-2">{user.plan}</p>
                    <p className="text-gray-700 px-2">{user.price}</p>
                    <p className="text-gray-700 px-2">{DateTime.fromISO(user.dueDate).toFormat('dd/MM/yyyy')}</p>
                    <p className="text-gray-700 px-2">{user.plate}</p>
                </div>
                <div className="flex justify-end">
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm">Διαγραφή</button>
                </div>
            </div>
    );
}
