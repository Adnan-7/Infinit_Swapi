import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import Specie from './specie';

const initilUrl = 'https://swapi.dev/api/species';
const fetchPage = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const InfinitSpecies = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      'wp-species',
      ({ pageParam = initilUrl }) => fetchPage(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      }
    );
  console.log(data);
  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error...</div>;

  return (
    <InfiniteScroll
      dataLength={data.pages.length + 1}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<h4 className='text-lg text-center'>Loading...</h4>}
      endMessage={
        <p className='text-lg text-center'>
          <b>Yay! You have seen it all</b>
        </p>
      }>
      <h2 className='text-yellow-400 text-center'>Species</h2>
      {data.pages.map((pageData) =>
        pageData.results.map((specie) => (
          <Specie key={specie.name} specie={specie} />
        ))
      )}
    </InfiniteScroll>
  );
};

export default InfinitSpecies;
