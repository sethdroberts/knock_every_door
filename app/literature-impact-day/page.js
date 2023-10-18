"use client";
import Link from 'next/link';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Pathfinder Literature Impact', href: 'pathfinder-literature-impact' },
  { name: 'Literature Impact Day', href: 'literature-impact-day' },
  { name: 'Access Pre-Made Maps', href: 'maps' },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  <div className="bg-white">

<header className="absolute inset-x-0 top-0 z-50" >
  
  <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="publishing.ico"
          alt=""
        />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </a>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      
    </div>
  </nav>
  <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
    <div className="fixed inset-0 z-50" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="favicon.ico"
            alt=""
          />
        </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="py-6">
            
          </div>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
</header>
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