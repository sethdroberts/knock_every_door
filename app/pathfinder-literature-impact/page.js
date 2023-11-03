"use client";
import Link from 'next/link';
import { useState } from 'react'


export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  <div className="bg-white">

<div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            
            <div className="mx-auto max-w-md text-center lg:flex-auto lg:py-32 lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                The next Pathfinder Literature Impact will be on April 6, 2024.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We'll be adding more details here soon. In the meantime, our MISDA site has all the up-to-date details.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                <a
                href="https://www.misda.org/departments/literature-ministries/pathfinder-literature-impact" target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn More
              </a>
              < Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                Return home<span aria-hidden="true">→</span>
              </Link>
              </div>

            
          </div>
  </div>
</div>
  
  )
}