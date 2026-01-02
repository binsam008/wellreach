import React from "react";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#4b47d1] text-white pt-12 pb-6 rounded-t-3xl">
      {/* Desktop Layout */}
      <div className="hidden md:flex container mx-auto px-10 justify-between">
        
        {/* Logo */}
        <div>
          <img src="./navlogo.png" className="h-10 mb-4" alt="logo" />
        </div>

        {/* Services Provided */}
        <div>
          <h3 className="font-semibold mb-3">Services Provided</h3>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="/#services" className="hover:underline">Air Freight</a></li>
            <li><a href="/#services" className="hover:underline">Ocean Freight</a></li>
            <li><a href="/#services" className="hover:underline">International Courier</a></li>
            <li><a href="/#services" className="hover:underline">Events & Project Cargo</a></li>
            <li><a href="/#services" className="hover:underline">Custom Clearance</a></li>
            <li><a href="/#services" className="hover:underline">Land Transportation</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/incoterms" className="hover:underline">Incoterms</a></li>
            <li><a href="/career" className="hover:underline">Career</a></li>
            <li><a href="/contact" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Social Media</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://instagram.com" target="_blank" className="hover:text-black/70"><FiInstagram /></a>
            <a href="https://facebook.com" target="_blank" className="hover:text-black/70"><FiFacebook /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-black/70"><FiLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden text-center px-6">
        <img src="/navlogo.png" className="h-10 mx-auto mb-6" alt="logo" />

        <h3 className="font-semibold mb-2 text-[#ffffff]">Services Provided</h3>
        <ul className="text-sm space-y-1 mb-6">
          <li><a href="/air-freight" className="hover:underline">Air Freight</a></li>
          <li><a href="/ocean-freight" className="hover:underline">Ocean Freight</a></li>
          <li><a href="/international-courier" className="hover:underline">International Courier</a></li>
          <li><a href="/project-cargo" className="hover:underline">Events & Project Cargo</a></li>
          <li><a href="/custom-clearance" className="hover:underline">Custom Clearance</a></li>
          <li><a href="/land-transportation" className="hover:underline">Land Transportation</a></li>
        </ul>

        <h3 className="font-semibold mb-2 text-[#ffffff]">Company</h3>
        <ul className="text-sm space-y-1 mb-6">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/gallery" className="hover:underline">Gallery</a></li>
          <li><a href="/faqs" className="hover:underline">FAQs</a></li>
          <li><a href="/career" className="hover:underline">Career</a></li>
          <li><a href="/contact-us" className="hover:underline">Contact us</a></li>
        </ul>

        <h3 className="font-semibold mb-3 text-[#ffffff]">Social Media</h3>
        <div className="flex justify-center space-x-5 text-2xl mb-4">
          <a href="https://instagram.com" target="_blank"><FiInstagram /></a>
          <a href="https://facebook.com" target="_blank"><FiFacebook /></a>
          <a href="https://linkedin.com" target="_blank"><FiLinkedin /></a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs opacity-70 mt-4">
        © {new Date().getFullYear()} WellReach Logistics. All rights reserved.
      </p>
      <p className="text-center text-xs opacity-70 mt-4">
        Designed By ZTech Digital.
      </p>
    </footer>
  );
}
