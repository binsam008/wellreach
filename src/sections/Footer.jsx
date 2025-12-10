import React from 'react'
import { FiFacebook, FiInstagram, FiPhone } from 'react-icons/fi'

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img src="/logo.png" alt="WellReach" className="h-8 mb-3"/>
          <p className="text-sm text-slate-300">Reliable logistics & shipping across air, sea and land.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="text-sm space-y-2 text-slate-300">
            <li>About</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-slate-300">sales@wellreach.example</p>
          <p className="text-sm text-slate-300">+1 555 0123</p>

          <div className="flex items-center gap-3 mt-4">
            <a className="p-2 bg-white/6 rounded"><FiFacebook/></a>
            <a className="p-2 bg-white/6 rounded"><FiInstagram/></a>
            <a className="p-2 bg-white/6 rounded"><FiPhone/></a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-slate-400 text-sm">© {new Date().getFullYear()} WellReach Logistics. All rights reserved.</div>
    </footer>
  )
}
