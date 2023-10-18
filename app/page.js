"use client";
import Head from 'next/head';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AcademicCapIcon, HomeIcon, BoltIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';


const navigation = [
  { name: 'Pathfinder Literature Impact', href: 'pathfinder-literature-impact' },
  { name: 'Literature Impact Day', href: 'literature-impact-day' },
  { name: 'Access Pre-Made Maps', href: 'maps' },
]

const features = [
  {
    name: 'Michigan Youth Rush',
    href: 'https://miyouthrush.org/',
    description:
      "You'll spend 10 weeks knocking on doors across Michigan sharing Christ-centered literature, praying with people, and offering Bible studies.",
    icon: AcademicCapIcon,
  },
  {
    name: 'GC/GLOW Mission Trips',
    href: 'https://www.streamsoflight.net/',
    description:
      'A weeklong blitz of a major Michigan city with one goal: Distribute as much literature as humanly possible.',
    icon: BoltIcon,
  },
  {
    name: 'Pathfinder Literature Impact',
    href: 'pathfinder-literature-impact',
    description:
      'A conference-wide Pathfinder outreach dedicated to reaching your community with literature during Literature Emphasis Month.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Literature Impact Day',
    href: 'literature-impact-day',
    description:
      'An annual conference-wide literature distribution. Local churches aim to reach as many homes as possible during Literature Emphasis Month (April).',
    icon: HomeIcon,
  },
]

const posts = [
  {
    title: "Reach Michigan's Impactful First Year",
    description: 'On July 31st of last year, 30 Michigan Youth Rush students participated in an activity that–at first glance–bore little resemblance to literature evangelism.',
    date: 'July 27, 2023',
    href: 'https://www.misda.org/media/news/reach-michigans-impactful-first-year',
    author: 'Seth Roberts',
    imageUrl: 'https://www.misda.org/build/image/3937.jpg?w=3000&h=2250&fit=ratio-50-50&s=a1422f93fd5c467dcd8e0f68544c910c',
    authorUrl: 'https://www.misda.org/build/image/2753.png?or=360&crop=%2C%2C%2C&s=f5a862b7dba03639dd20a720c42e583d',
    id: '001',
  },
  {
    title: 'The (Very Scary) Next Door',
    description: 'The sky was a murky gray and the rain was heavy, soaking everything, including Canaan Francisco, a Youth Rush canvasser working in the Kalamazoo area.',
    date: 'September 1, 2022',
    href: 'https://www.misda.org/media/blogs/the-very-scary-next-door',
    author: 'Judy Ringstaff',
    imageUrl: 'https://www.misda.org/build/image/1976.jpg?or=360&crop=%2C%2C%2C&s=574f83e76c9740432b148475966fa949',
    authorUrl: 'https://www.misda.org/build/image/2739.png?or=360&crop=%2C%2C%2C&s=e6c36aa478e3e6a0acebb499ab905345',
    id: '002',
  }
]


export default function Main() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">

      <header className="absolute inset-x-0 top-0 z-50" >
        
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
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
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-10 sm:py-10 lg:py-10 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center my-40 sm:my-20 mb-30">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Applications now open for Michigan Youth Rush 2024.{' '}
              <a href="https://miyouthrush.org/" target="_blank" className="font-semibold text-indigo-600">
                <span className="absolute inset-0"  aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-8xl font-bold tracking-normal text-gray-900 sm:text-8xl">
              Knock every door in Michigan by 2028
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're on a mission to share life-changing Adventist literature with all 4,611,660 homes in the state of Michigan within the next 5 years.
              Whether you're in academy or college, a Pathfinder or a senior citizen, there's a way for you to help us reach the goal!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#pathway"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Involved
              </a>

              <a href="#subscribe" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className='my-20'></div>
        <div className='my-20'></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8" >
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Next Steps</h2>
          <p id="pathway" className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Pathway
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            There's a way for everyone, no matter your age, ability, or background, to participate in literature evangelism. Here are the four main ways you help reach every home in Michigan:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <a href={feature.href}>{feature.name}</a>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className='my-20'></div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
        <div id='subscribe' className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y- lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get updates on our progress.</h2>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    We'll share powerful testimonies, exciting reports from youth-led literature evangelism, and updates on our progress towards 4 million homes reached.
                  </p>
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                  

        <div className="flex flex-row items-stretch">
          {posts.map((post) => (
            <div className="mr-5">
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div>
            <img class="object-cover h-48 w-96" src={post.imageUrl} />
              </div>
              <div className="flex items-center gap-x-4 text-sm">
                <time dateTime={post.date} className="text-gray-400">
                  {post.date}
                </time>
                <a
                  href={post.href}
                  className="mt-3 font-semibold text-white text-lg"
                >
                  {post.title}
                </a>
              </div>
              <div className="group relative">
                
                <p className="mt-2 leading-7 text-gray-400">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.authorUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50 object-cover" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                      <span className="absolute inset-0" />
                      {post.author}
                  </p>

                </div>
              </div>
            </article>
            </div>
          ))}
        </div>

              </div>
            </div>
          </div>



          <div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            
            <div className="mx-auto max-w-md text-center lg:flex-auto lg:py-32 lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Contribute to our Literature Fund.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              For every $10 you donate, we'll ensure at least 40 homes are reached with Adventist literature through our Pathfinder, local church, and GLOW mission trip projects. Thank you for your contribution!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                <a
                href="https://square.link/u/cFeWbrta"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
              <a href="https://square.link/u/cFeWbrta" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
              </div>

            
          </div>
          </div> 
          <footer class="bg-white rounded-lg  shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://www.misda.org/departments/literature-ministries" class="flex items-center mb-4 sm:mb-0">
                <img src="favicon.ico" class="h-8 mr-3" alt="Publishing Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MISDA Literature Ministries</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://www.misda.org/departments/literature-ministries" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="mailto:youthrush@misda.org" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://misda.org/" class="hover:underline">Michigan Conference of Seventh-day Adventists</a>. All Rights Reserved.</span>
    </div>
</footer>
    </div>
    
    
  )
}
