import React from 'react'
import LanguageContextProvider from './context/LanguageContent'
import LanguageSelector from './component/LanguageSelector'
import Greeting from './component/Greeting'

export default function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 text-white flex  justify-around items-center px-20'>
      <LanguageContextProvider>
        <Greeting/>
        <LanguageSelector/>
      </LanguageContextProvider>
    </div>
  )
}
