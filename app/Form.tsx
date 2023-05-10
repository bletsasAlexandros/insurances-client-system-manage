"use client"

import React, { useState } from 'react';
import { DateTime } from 'luxon';

  export default function FormPost() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [company, setCompany] = useState('');
    const [plan, setPlan] = useState('');
    const [price, setPrice] = useState('');
    const [dueDate, setDueDate] = useState('');

    async function submitClient(e: React.FormEvent) {
        e.preventDefault()
        try {
            console.log("here")
            const data = await fetch('/api/createClient', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    content,
                    company,
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
            console.log("here")
        }
    }

  return (
    <form onSubmit={submitClient}>
      <label>
        Name:
        <input className="text-black" type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea className="text-black" value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Company:
        <input className="text-black" type="text" value={company} onChange={e => setCompany(e.target.value)} />
      </label>
      <br />
      <label>
        Plan:
        <input className="text-black" type="text" value={plan} onChange={e => setPlan(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input className="text-black" type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Due Date:
        <input className="text-black" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create Client</button>
    </form>
  );
};