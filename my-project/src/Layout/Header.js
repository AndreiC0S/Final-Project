import React from 'react'


export default function Header() {
  return (
    
    <header class="w-full mt-0 text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font bg-gray-300">
    <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row ">
        <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            LOGO 
        </a>
        <nav class="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
            <a href="#_" class="mr-5 font-medium hover:text-red-600">Home</a>
            <a href="#_" class="mr-5 font-medium hover:text-red-600">About</a>
            <a href="#_" class="font-medium hover:text-red-600">Contact</a>
        </nav>
        <div class="items-center h-full">
            <a href="#_" class="mr-5 font-medium hover:text-red-600">Login</a>
            <a href="#_"
                class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                Sign Up
            </a>
        </div>
    </div>
    </header>
  )
}
