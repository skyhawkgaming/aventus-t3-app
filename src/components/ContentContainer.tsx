// import { useState } from 'react';
import SignIn from './SignIn';

type TechnologyCardProps = {
  name: string
  description: string
  documentation: string
}

const ContentContainer = () => {
  return (
    <>
      <SignIn />
      <h1 className='text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-200'>
        Aventus <span className='text-blue-500'>T3</span> App
      </h1>

      <p className='text-2xl text-gray-200'>This stack uses:</p>
      <div className='grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3'>
        <TechnologyCard
          name='NextJS'
          description='The React framework for production'
          documentation='https://nextjs.org/'
        />
        <TechnologyCard
          name='TypeScript'
          description='Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale'
          documentation='https://www.typescriptlang.org/'
        />
        <TechnologyCard
          name='TailwindCSS'
          description='Rapidly build modern websites without ever leaving your HTML'
          documentation='https://tailwindcss.com/'
        />
        <TechnologyCard
          name='tRPC'
          description='End-to-end typesafe APIs made easy'
          documentation='https://trpc.io/'
        />
      </div>
    </>
  )
}

const TechnologyCard = ({
  name,
  description,
  documentation
}: TechnologyCardProps) => {
  return (
    <section className='flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105'>
      <h2 className='text-lg text-gray-200'>{name}</h2>
      <p className='text-sm text-blue-300'>{description}</p>
      <a
        className='mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2'
        href={documentation}
        target='_blank'
        rel='noreferrer'
      >
        Documentation
      </a>
    </section>
  )
}

export default ContentContainer