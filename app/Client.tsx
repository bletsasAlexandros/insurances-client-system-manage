'use client';

import { data } from 'autoprefixer';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

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

export default function Client({ name, id }: { name: string; id: number }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    const isMutating = isPending || isFetching;

    const handleDelete = async () => {
        setIsFetching(true);

        //Delete client
        await deleteClient(id);

        setIsFetching(false);

        startTransition(() => {
            router.refresh();
        });
        
    };

    return (
        <div key={id}>
        <h1 className="text-lg">{name}</h1>
        <button onClick={handleDelete}>Διαγραφή</button>
        </div>
    );
}
