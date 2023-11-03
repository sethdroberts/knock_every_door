"use client";
import Link from 'next/link';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  <div className="bg-white">


<div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            
            <div className="mx-auto max-w-md text-center lg:flex-auto lg:py-32 lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                The next Literature Impact Day will be on April 13, 2024.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We'll be adding more details here soon. In the meantime, we recommend the <a href="https://www.streamsoflight.net/church-training-resources/" target="_blank" className="underline hover:font-bold">Streams of Light training resources</a> as a good place to start preparing for this outreach.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                <a
                href="https://www.streamsoflight.net/church-training-resources/" target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Training Materials
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