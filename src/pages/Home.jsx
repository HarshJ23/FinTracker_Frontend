import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold mx-1">FinTracker</h1>
      <p className='mx-1'>sign up to get started</p>

      <Link to="/register">
      <button className="btn btn-primary mx-1">SIGN UP</button>
      </Link>
    </div>
  </div>
</div>
  )
}
