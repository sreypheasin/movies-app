import Link from 'next/link'
import React from 'react'

export default function Welcome() {
  return (
<section className=" h-5/6 p-6 w-full flex  bg-center bg-no-repeat bg-[url('https://images.frandroid.com/wp-content/uploads/2022/10/netflix-octobre-contenus-2022.jpg')] bg-gray-800 bg-blend-multiply object-cover">
    <div className="h-5/6 mx-auto max-w-screen-xl text-center lg:py-56 flex flex-col justify-center">
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">Welcome to odinn movies web</h1>
        <p className=" text-slate-300 mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">where you can explore the exciting world of cinema and indulge in your love for movies! Our website is a hub for movie enthusiasts who are looking for the latest information, reviews, trailers, and recommendations on what to watch.

</p>
        <div className="mt-5 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100  focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div>
</section>

  )
}
