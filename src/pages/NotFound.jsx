import React from 'react'

export default function NotFound() {
  return (
     <>
      <header>Not Found : 404</header>
      <main className="flex flex-col gap-5 min-h-[85vh] justify-center items-center">
        <p className="text-5xl font-bold text-red-400">404: Pages Not Found</p>
        <p className="text-2xl font-bold">
          Back to{" "}
          <Link to={"/"} className="underline text-blue-700 hover:text-violet-700">
            Home
          </Link>
        </p>
      </main>
    </>
  )
}
