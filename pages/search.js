import React from 'react';
import Link from 'next/link';

const Search = () => {

  const save = async () => {
    console.log('Save');
    const form = {
      nome: 'Emanuel',
      email: 'emanuelgustavovierne@gmail.com',
      whatsapp: '47 999888777',
      cupom: '',
      promotion: ''
    }
    try{
      const response = await fetch('api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });

      const data = await response.json();
      console.log(data);
    } catch(error){
      console.log(error);
    };
  };

  return (
      <div className="py-6">
        <h1 className="text-center font-bold text-2xl">Críticas e sugestões</h1>
        <p className="text-center">
        O restaurante X sempre busca por atender melhor seus clientes.
        Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
        <div className="mx-auto w-2/4">
          <label className="font-bold" htmlFor="">Seu nome:</label>
          <input className="w-full p-4 block shadow bg-blue-100 my-2 mx-1 rounded" type="text" name="" id=""/>
          <button 
            onClick={save}
            className="bg-blue-500 px-6 py-4 rounded-lg shadow-lg font-bold hover:bg-blue-400 hover:shadow"
          >
            Save
          </button>
        </div>
      </div>
  );
};

export default Search;