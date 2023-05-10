"use client"

import React, { useState } from 'react';
import { DateTime } from 'luxon';

  export default function FormPost() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [company, setCompany] = useState('');
    const [plate, setPlate] = useState('');
    const [vehicleType, setVihicleType] = useState('');
    const [plan, setPlan] = useState('');
    const [price, setPrice] = useState('');
    const [dueDate, setDueDate] = useState('');

    async function submitClient(e: React.FormEvent) {
        e.preventDefault()
        try {
            const data = await fetch('/api/createClient', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    content,
                    company,
                    plate,
                    vehicleType,
                    plan,
                    price,
                    dueDate: DateTime.fromISO(dueDate).toJSDate()
                }),
            })
            const res = await data.json()
            if (!res.ok) {
                console.log(res)
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={submitClient}>
      <label>
        Όνομα:
        <input className="text-black" type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Εταιρεία:
        <input className="text-black" type="text" value={company} onChange={e => setCompany(e.target.value)} />
      </label>
      <br />
      <label>
        Πινακίδα:
        <input className="text-black" type="text" value={plate} onChange={e => setPlate(e.target.value)} />
      </label>
      <br />
      <label>
        Τύπος Οχήματος:
        <input className="text-black" type="text" value={vehicleType} onChange={e => setVihicleType(e.target.value)} />
      </label>
      <br />
      <label>
        Πλάνο:
        <input className="text-black" type="text" value={plan} onChange={e => setPlan(e.target.value)} />
      </label>
      <br />
      <label>
        Τιμή:
        <input className="text-black" type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Λήξη:
        <input className="text-black" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </label>
      <br />
      <label>
        Σχόλια:
        <textarea className="text-black" value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <br />
      <button type="submit">Εισαγωγή Πελάτη</button>
    </form>
  );
};