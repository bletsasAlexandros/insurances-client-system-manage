"use client"
import React, { useState } from 'react';
import { DateTime } from 'luxon';

  export default function FormPost() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [company, setCompany] = useState('');
    const [plate, setPlate] = useState('');
    const [vehicleType, setVehicleType] = useState('');
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
                setVehicleType('');
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
    <form onSubmit={submitClient} className='grid grid-cols-4 gap-4 w-full mt-10'>
      <label className='mb-3 col-start-1'>
        Όνομα:
      </label>
      <input className="mb-3 col-span-3 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <label className='mb-3 col-start-1'>
        Tηλέφωνο:
      </label>
      <input className="mb-3 col-span-3 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type='text' value={phone} onChange={e => setPhone(e.target.value)} />
      <br />
      <label className='mb-3 col-start-1'>
        Εταιρεία:
      </label>
      <input className="mb-3 col-span-3 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type="text" value={company} onChange={e => setCompany(e.target.value)} />
      <br />
      <label className='mb-3 col-start-1'>
        Πινακίδα:
      </label>
      <input className="mb-3 col-span-3 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type="text" value={plate} onChange={e => setPlate(e.target.value)} />
      <br />
      <label className='mb-3 col-start-1'>
        Τύπος Οχήματος:
      </label>
        <input className="mb-3 col-span-3 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type="text" value={vehicleType} onChange={e => setVehicleType(e.target.value)} />
      <br />
      <label className='mb-3 col-start-1'>
        Πλάνο:
      </label>
        <input className="mb-3 col-span-3 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type="text" value={plan} onChange={e => setPlan(e.target.value)} />
      <br />
      <label className='mb-3 col-start-1'>
        Τιμή:
        <input className="mb-3 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <br />
      <label className='mb-3 col-start-3'>
        Λήξη:
        <input className="mb-3 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </label>
      <br />
      <label className='mb-3 col-span-4'>
        Σχόλια:
        <textarea className="mb-3 col-span-4 text-black peer block min-h-[auto] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <br />
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded col-span-2'>Εισαγωγή Πελάτη</button>
    </form>
  );
};