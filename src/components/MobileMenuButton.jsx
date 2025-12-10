import React from 'react'
import { FiMenu } from 'react-icons/fi'

export default function MobileMenuButton({ onOpen }){
  return (
    <button onClick={onOpen} className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow">
      <FiMenu size={22} />
    </button>
  )
}
