import React from 'react';
import Church_Render from './church_render'
import clientPromise from "lib/mongo/index"
import Head from 'next/head';
import Header from '../components/header'

export default async function Run() {

  

  async function LoadData() {
    console.log('Check0')
    const clientp = await clientPromise;
    const db = await clientp.db("KnockEveryDoor");
  
    var churches = await db.collection('MapMetadata')
            .find({})
            .limit(180)
            .toArray();
            return churches
  }


  const churches = await LoadData();

  return (
      <body>
      < Header />
      <main>
  <div className="bg-white">

<div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            
            <div className="mx-auto max-w-md text-center lg:flex-auto lg:py-32 lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Pre-made territory maps for your church
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Full credit to <a href="https://www.streamsoflight.net/" target="_blank" className="underline hover:font-bold">Streams of Light International</a> for developing the maps for this project.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
              < Church_Render churches={churches}/>
              </div>
          </div>

  </div>
</div>
</main>
      </body>
  )
}