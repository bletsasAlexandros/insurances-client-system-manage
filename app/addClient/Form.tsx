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
    const [phone, setPhone] = useState('');


    async function submitClient(e: React.FormEvent) {
      e.preventDefault();
      
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
                    dueDate: DateTime.fromISO(dueDate).toJSDate(),
                    phone,
                }),
            })
            const res = await data.json()
            if (!res.ok) {
                console.log(res)
                setName('');
                setContent('');
                setCompany('');
                setPlate('');
                setVihicleType('');
                setPlan('');
                setPrice('');
                setDueDate('');
                setPhone('');

            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={submitClient}>
      <label>
        Όνομα:
        <input className="text-black bg-gray-200 border-black border-2" type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        τηλέφωνο:
        <input className="text-black bg-gray-200 border-black border-2" value={phone} onChange={e => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Εταιρεία:
        <input className="text-black bg-gray-200 border-black border-2" type="text" value={company} onChange={e => setCompany(e.target.value)} />
      </label>
      <br />
      <label>
        Πινακίδα:
        <input className="text-black bg-gray-200 border-black border-2" type="text" value={plate} onChange={e => setPlate(e.target.value)} />
      </label>
      <br />
      <label>
        Τύπος Οχήματος:
        <input className="text-black bg-gray-200 border-black border-2" type="text" value={vehicleType} onChange={e => setVihicleType(e.target.value)} />
      </label>
      <br />
      <label>
        Πλάνο:
        <input className="text-black bg-gray-200 border-black border-2" type="text" value={plan} onChange={e => setPlan(e.target.value)} />
      </label>
      <br />
      <label>
        Τιμή:
        <input className="text-black bg-gray-200 border-black border-2" type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Λήξη:
        <input className="text-black bg-gray-200 border-black border-2" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </label>
      <br />
      <label>
        Σχόλια:
        <textarea className="text-black bg-gray-200 border-black border-2" value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <br />
      <button type="submit" className='btn border-black'>Εισαγωγή Πελάτη</button>
    </form>
  );
};