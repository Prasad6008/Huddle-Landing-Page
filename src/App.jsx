import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

const data = {
  title: 'Build The Community Your Fans Will Love',
  description:
    'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.',
  buttonText: 'Register',
}

const App = () => {
  return (
    <main className="huddle-shell flex min-h-[100dvh] w-full flex-col px-6 pb-8 pt-8 text-white sm:px-10 sm:pb-9 sm:pt-10 lg:px-14 lg:pb-10 lg:pt-12">
      <div className="animate-header">
        <Header />
      </div>

      <section
        aria-labelledby="hero-title"
        className="flex flex-1 items-center justify-center py-12 sm:py-14 lg:py-10"
      >
        <div className="grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 md:gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="animate-illustration">
            <img
              className="mx-auto w-full max-w-[760px] transition-transform duration-500 hover:scale-[1.015] motion-reduce:transition-none"
              src="/images/illustration-mockups.svg"
              alt="A preview of the Huddle community app on desktop and mobile"
              fetchPriority="high"
            />
          </div>

          <div className="animate-content mx-auto flex w-full max-w-[520px] flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              id="hero-title"
              className="font-poppins text-[2rem] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-4xl xl:text-[2.4rem]"
            >
              {data.title}
            </h1>

            <p className="mt-5 max-w-[48ch] font-opensans text-[0.95rem] leading-7 text-white/85 sm:text-base sm:leading-8">
              {data.description}
            </p>

            <button
              className="mt-7 min-w-48 rounded-full bg-white px-10 py-3.5 font-poppins text-sm font-medium text-[#5b3d91] shadow-[0_10px_28px_rgba(34,16,66,0.24)] transition duration-200  hover:bg-[#e880e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 motion-reduce:transition-none"
              type="button"
            >
              {data.buttonText}
            </button>
          </div>
        </div>
      </section>

      <div className="animate-footer">
        <Footer />
      </div>
    </main>
  )
}

export default App
