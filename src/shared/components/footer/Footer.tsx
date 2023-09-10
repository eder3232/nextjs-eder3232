import React from 'react'
import Link from 'next/link'
import { BsLinkedin, BsYoutube, BsTiktok } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer footer-center absolute bottom-0 rounded bg-base-200 p-10 text-base-content ">
      <div className="grid grid-flow-col gap-4">
        <Link href="/" className="link-hover link">
          About me
        </Link>
        <Link href="/" className="link-hover link">
          Contact
        </Link>
        <Link href="/" className="link-hover link">
          Press kit
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-6">
          <a
            href="https://www.tiktok.com/@eder_vlog"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsTiktok className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com/@ederEngine"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsYoutube className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/eddy-eder-sucapuca-cruz-44b2681a2/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsLinkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by EDER3232 Industries Ltd</p>
      </div>
    </footer>
  )
}

export default Footer
