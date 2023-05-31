import React from 'react';
import { DateTime } from 'luxon';
import Link from 'next/link';

// async function deleteClient(id: number) {
//   const res = await fetch('/api/deleteClient', {
//     method: 'POST',
//     body: JSON.stringify({ id }),
//   });
//   if (!res.ok) {
//     console.log(res);
//     window.location.reload();
//   }
//   return res.json();
// }

export default function Client({ user }: any) {
    return (
        <tr key={user.id}>
        <td className='py-2 px-4'>
          <Link href={`/client/${user.id}`}>
            <p className="text-blue-500 hover:underline">{user.name}</p>
          </Link>
        </td>
        <td className='py-2 px-4'>{user.phone}</td>
        <td className='py-2 px-4'>{user.company}</td>
        <td className='py-2 px-4'>{user.price}</td>
        <td className='py-2 px-4'>{DateTime.fromISO(user.dueDate).toFormat('dd/MM/yyyy')}</td>
      </tr>
    );
}
