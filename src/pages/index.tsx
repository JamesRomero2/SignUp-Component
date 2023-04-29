import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sign In Form Component</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Sign In Form Component" />
        <meta name="keywords" content="Sign In Form Component" />
        <meta property="og:title" content="Sign In Form Component" />
        <meta property="og:description" content="Sign In Form Component" />
        <meta property="og:url" content="https://sign-in-form-component.vercel.app/" />
        <meta property="og:image" content="https://sign-in-form-component.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign In Form Component" />
        <meta name="twitter:description" content="Sign In Form Component" />
        <meta name="twitter:url" content="https://sign-in-form-component.vercel.app/" />
        <meta name="twitter:image" content="https://sign-in-form-component.vercel.app/og-image.png" />
      </Head>
      <main className='bg-primary-red h-screen flex flex-row p-40 items-center'>
        <section className='flex flex-1 flex-col justify-center text-white'>
          <h1 className='font-bold text-5xl leading-tight mb-5'>
            Learn to code by watching others
          </h1>
          <p className='leading-relaxed'>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </section>
        <section className='flex-1'>
          <div className="bg-accent-blue w-full text-center p-5 rounded-lg text-white mb-5 drop-shadow-md">
            <p className='font-normal'><span className='font-bold'>Try it free 7 days </span>then $20/mo. thereafter</p>
          </div>
          <form action="" className='w-full bg-white rounded-lg overflow-hidden p-8 flex flex-col gap-5 drop-shadow-md'>
            <div className="focus-within:border-neutral-dark-blue border-solid border-neutral-gray-blue border p-3 rounded-md">
              <label htmlFor="">

              </label>
              <input type="text" placeholder="First Name" className='w-full !outline-none'/>
            </div>
            <div className="focus-within:border-neutral-dark-blue border-solid border-neutral-gray-blue border p-3 rounded-md">
              <label htmlFor="">

              </label>
              <input type="text" placeholder="Last Name" className='w-full !outline-none'/>
            </div>
            <div className="focus-within:border-neutral-dark-blue border-solid border-neutral-gray-blue border p-3 rounded-md">
              <label htmlFor="">

              </label>
              <input type="email" placeholder="Email Address" className='w-full !outline-none'/>
            </div>
            <div className="focus-within:border-neutral-dark-blue border-solid border-neutral-gray-blue border p-3 rounded-md">
              <label htmlFor="">

              </label>
              <input type="password" placeholder="Password" className='w-full !outline-none'/>
            </div>
            <button className='bg-primary-green text-white p-5 rounded-lg border-b-neutral-gray-blue border-b-4 drop-shadow-md font-medium tracking-wider'>CLAIM YOUR FREE TRIAL</button>
            <p className='text-xs text-neutral-gray-blue text-center'>By clicking the button, you are agreeing to our <a href="" className='text-xs font-medium text-primary-red'>Terms and Services</a></p>
          </form>
        </section>
      </main>
    </>
  )
}
