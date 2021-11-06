import React from 'react';

const Person = ({ person }) => {
  return (
    <div className='grid'>
      <div className='col md:col-3'></div>
      <div className='col-10 border-1 border-blue-300  border-round mb-4  surface-50 text-yellow-400 pl-5 md:col-6'>
        <h3>{person.name}</h3>

        <p className='text-white'>Hair : {person.hair_color}</p>
        <p className='text-white'>Eyes : {person.eye_color}</p>
        <p className='text-white'>Birth Year : {person.birth_year}</p>
      </div>
      <div className='col-1 md:col-3'></div>
    </div>
  );
};

export default Person;
