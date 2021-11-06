import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import InfinitPeople from './people/infinitPeople';
import InfinitSpecies from './species/infinitSpecies';

function App() {
  const [show, setShow] = useState('people');
  return (
    <div className='bg-primary-reverse'>
      <span className='inline-block m-5 '></span>
      <h1 className='text-center text-yellow-500'>Inifinit SWAPI</h1>
      <div className='text-center'>
        <button
          onClick={() => setShow('people')}
          className='btn surface-50 text-white py-2 px-4 mr-2 text-lg'>
          People
        </button>
        <button
          onClick={() => setShow('species')}
          className='surface-50 text-white py-2 px-4 text-lg'>
          Species
        </button>
      </div>
      {show === 'people' ? <InfinitPeople /> : <InfinitSpecies />}

      <ReactQueryDevtools />
    </div>
  );
}

export default App;
