import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then( res => res.json());

const Index = () => {
    
  const { data, error } = useSWR('/api/get-promo', fetcher);
  
  return (
    <div>
      <p className="my-12 text-center">
        O restaurante X sempre busca por atender melhor seus clientes.
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className="text-center my-12 ">
        <Link href="/search">
          <a className="bg-blue-500 px-6 py-4 rounded-lg shadow-lg font-bold hover:bg-blue-400 hover:shadow">Dar opinião ou sugestão</a>
        </Link>
      </div>
      { !data && 
          <p>Loading data...</p> 
      }
      { !error && data && data.promoActivate && 
          <p className="my-12 text-center">{data.message}</p>
      } 
    </div>
  )
};

export default Index;