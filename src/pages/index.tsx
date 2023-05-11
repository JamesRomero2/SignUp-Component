import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

interface IForm {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

export default function Home() {

  const [formState, setFormState] = useState<IForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setFormState({
      ...formState,
      [e.currentTarget.name]: value
    });
  }

  const submitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    Object.keys(formState).map(key => {
      const elementObject : HTMLElement | null = document.getElementById(key);
      const imageErrorObject  : HTMLElement | null = document.getElementById(key + "-error");

      if (formState[key as keyof IForm].length === 0) {
        elementObject!.className = 'border-primary-red border-2 focus-within:border-neutral-dark-blue border-solid p-3 rounded-md flex flex-row ';
        imageErrorObject!.className = "visible";
      } else {
        elementObject!.className = 'focus-within:border-neutral-dark-blue border-solid p-3 rounded-md flex flex-row border-neutral-gray-blue border';
        imageErrorObject!.className = "invisible";
      }
    });
  }

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
      <motion.main className='bg-primary-red md:h-screen flex flex-col p-5 items-center gap-10 lg:p-40 md:flex-row md:gap-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.5}}>
        <section className='flex flex-1 flex-col justify-center text-white md:text-left text-center'>
          <h1 className='font-bold text-5xl leading-tight mb-5'>
            Learn to code by watching others
          </h1>
          <p className='leading-relaxed'>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </section>
        <section className='flex-1'>
          <motion.div className="bg-accent-blue w-full text-center p-5 rounded-lg text-white mb-5 drop-shadow-md" initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:0.5, duration:0.5}}>
            <p className='font-normal'><span className='font-bold'>Try it free 7 days </span>then $20/mo. thereafter</p>
          </motion.div>
          <motion.form action="" className='w-full bg-white rounded-lg overflow-hidden p-8 flex flex-col gap-5 drop-shadow-md' initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:0.5, duration:0.5}}>
            <div className={`focus-within:border-neutral-dark-blue border-solid p-3 rounded-md flex flex-row border-neutral-gray-blue border`} id='firstName'>
              <input type="text" placeholder="First Name" className='w-full !outline-none' onChange={handleInputChange} value={formState.firstName} name='firstName' />
              <Image src={'/icon-error.svg'} alt='Icon Error' width={25} height={25} className='ml-3 invisible' id='firstName-error'/>
            </div>
            <div className={`focus-within:border-neutral-dark-blue border-solid p-3 rounded-md flex flex-row border-neutral-gray-blue border`} id='lastName'>
              <input type="text" placeholder="Last Name" className='w-full !outline-none' onChange={handleInputChange} value={formState.lastName} name='lastName' />
              <Image src={'/icon-error.svg'} alt='Icon Error' width={25} height={25} className='ml-3 invisible' id='lastName-error'/>
            </div>
            <div className={`focus-within:border-neutral-dark-blue border-solid p-3 rounded-md group flex flex-row border-neutral-gray-blue border`} id='email'>
              <input type="email" placeholder="Email Address" className='w-full !outline-none' onChange={handleInputChange} value={formState.email} name='email' />
              <Image src={'/icon-error.svg'} alt='Icon Error' width={25} height={25} className='ml-3 invisible' id='email-error'/>
            </div>
            <div className={`focus-within:border-neutral-dark-blue border-solid p-3 rounded-md flex flex-row border-neutral-gray-blue border`} id='password'>
              <input type="password" placeholder="Password" className='w-full !outline-none' onChange={handleInputChange} value={formState.password} name='password' />
              <Image src={'/icon-error.svg'} alt='Icon Error' width={25} height={25} className='ml-3 invisible' id='password-error'/>
            </div>
            <button className='bg-primary-green text-white p-5 rounded-lg border-b-neutral-gray-blue border-b-4 drop-shadow-md font-medium tracking-wider' onClick={submitButton}>CLAIM YOUR FREE TRIAL</button>
            <p className='text-xs text-neutral-gray-blue text-center'>By clicking the button, you are agreeing to our <a href="" className='text-xs font-medium text-primary-red'>Terms and Services</a></p>
          </motion.form>
        </section>
      </motion.main>
    </>
  )
}
