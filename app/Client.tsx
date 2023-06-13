import React from 'react';
import { DateTime } from 'luxon';
import Link from 'next/link';

export default function Client({ user }: any) {
    const isDueDatePassed = DateTime.fromISO(user.dueDate) < DateTime.now();
    const isDueDateWithinMonth = DateTime.fromISO(user.dueDate) <= DateTime.now().plus({ months: 1 });

    let className = '';
    if (isDueDatePassed) {
      className = 'bg-red-100';
    } else if (isDueDateWithinMonth) {
      className = 'bg-yellow-100';
    }

    return (
        <tr key={user.id} className={`${className}`}>
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
