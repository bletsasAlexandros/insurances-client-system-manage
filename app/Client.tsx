"use client"

import React, { useState } from 'react';

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
    const handleDelete = async () => {
        await deleteClient(id);
    };

    return (
        <div key={id}>
        <h1 className="text-lg">{name}</h1>
        <button onClick={handleDelete}>Διαγραφή</button>
        </div>
    );
}
