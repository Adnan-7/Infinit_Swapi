import React from 'react';

const Specie = ({ specie }) => {
  return (
    <div className='grid'>
      <div className='col md:col-3'></div>
      <div className='col-10 border-1 border-blue-300  border-round mb-4  surface-50 text-yellow-400 pl-5 md:col-6'>
        <h3>{specie.name}</h3>

        <p className='text-white'>Average Height : {specie.average_height}</p>
        <p className='text-white'>Hair Colors : {specie.hair_color}</p>
        <p className='text-white'>Skin Colors : {specie.skin_colors}</p>
        <p className='text-white'>Eye Colors : {specie.eye_colors}</p>
        <p className='text-white'>
          Average Lifespan : {specie.average_lifespan}
        </p>
        <p className='text-white'>Language : {specie.language}</p>
      </div>
      <div className='col-1 md:col-3'></div>
    </div>
  );
};

export default Specie;
