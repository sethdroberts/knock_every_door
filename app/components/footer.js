"use client";
import React from 'react'


export default function Footer() {
    return (


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
</footer>);
}