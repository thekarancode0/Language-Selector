import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContent'
export default function LanguageSelector() {
    const{lang,setLang} = useContext(LanguageContext)


  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>{lang==='english'?'Choose Your Language:':lang==='hindi'?'अपनी भाषा चुनें':'Choisissez votre langue'}</h1>
        <div className='flex gap-10 justify-center items-center'>
            <button onClick={()=>setLang('hindi')} className='border px-2 mt-5 rounded-sm cursor-pointer hover:scale-105 transition-all ease-out'>Hindi</button>
            <button onClick={()=>setLang('french')} className='border px-2 mt-5 rounded-sm cursor-pointer hover:scale-105 transition-all ease-out'>French</button>
            <button onClick={()=>setLang('english')} className='border px-2 mt-5 rounded-sm cursor-pointer hover:scale-105 transition-all ease-out'>English</button>
        </div>
    </div>
  )
}
