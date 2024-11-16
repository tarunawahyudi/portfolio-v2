import React from 'react';
import Link from 'next/link';
import {PERSONAL_INFO} from "/data";

const Contact = () => {
  return (
    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Email Address</span>

        <span className='text-xs text-gray-600' mailto>
          <Link href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</Link>
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Phone</span>
        <span className='text-xs text-gray-600'>{PERSONAL_INFO.phone}</span>
      </div>
    </div>
  );
};

export default Contact;
