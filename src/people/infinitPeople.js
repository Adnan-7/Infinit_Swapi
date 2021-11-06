import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import Person from './person';

const initialUrl = 'https://swapi.dev/api/people/';
const fetchPage = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const InfinitPeople = () => {
  const { fetchNextPage, hasNextPage, data, isLoading, isError } =
    useInfiniteQuery(
      'sw-people',
      ({ pageParam = initialUrl }) => fetchPage(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      }
    );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <p>errro ...</p>;

  console.log(data);
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
      <h2 className='text-yellow-400 text-center'>People</h2>
      {data.pages.map((pageData) =>
        pageData.results.map((person) => (
          <Person key={person.name} person={person} />
        ))
      )}
    </InfiniteScroll>
  );
};

export default InfinitPeople;
