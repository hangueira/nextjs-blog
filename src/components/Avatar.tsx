import Image from 'next/image';
import React from 'react';
import avatarImage from '../../public/images/camping.jpeg';
import Link from 'next/link';

export default function Avatar() {
  return (
    <section className='text-center'>
      <Image
        src={avatarImage}
        alt='avatar'
        height={300}
        width={300}
        className='mx-auto rounded-2xl'
        priority
      ></Image>
      <h2 className='text-3xl font-bold mt-2'>안녕하세요. 한경수입니다.</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>캠핑을 사랑하는 개발자 입니다.</p>
      <Link href='/contact'>
        <button className=' bg-yellow-300 py-1 px-4 mt-2 rounded-xl'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
