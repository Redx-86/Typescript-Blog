import React from 'react'
const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <h1 className='text-3xl'>User Profile : {params.id} </h1>
  );
};

export default Page;
