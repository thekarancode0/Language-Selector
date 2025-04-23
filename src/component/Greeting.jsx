import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContent'
export default function Greeting() {
    const {lang} = useContext(LanguageContext)
  return (
    <div className='w-screen'>
        <h1 className='font-bold text-4xl w-full text-center'>
            {lang==='hindi'?'आपका दिन शुभ हो!':
            lang==='french' ?'Bonne journée!' 
            :'Have a nice day!'}
        </h1>
    </div>
  )
}
