import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href="/">
            <a>
              <img className="mx-auto" src="/assets/logos/logo_paplpitebox.png" alt="Palpite Box" /> 
            </a>
          </Link>
        </div>
      </div>
      <div className='bg-gray-800 p-4 shadow-md text-center my-1'>
        <div className='mx-auto'>
          <Link href="/">
            <a className='px-2 hover:underline text-white'>Home</a>
          </Link>
          <Link href="/about">
            <a className='px-2 hover:underline text-white'>About</a>
          </Link>
          <Link href="/contact">
            <a className='px-2 hover:underline text-white'>Contact</a>
          </Link>
          <Link href="/search">
            <a className='px-2 hover:underline text-white'>Search</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Header;