import {Link} from 'react-router-dom';
export default function Signup() {
  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='font-semibold text-3xl text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' required className='bg-slate-200 p-3 rounded-lg'/>
        <input type="email" placeholder='Email' id='email' required className='bg-slate-200 p-3 rounded-lg'/>
        <input type="password" placeholder='Password' id='password' required className='bg-slate-200 p-3 rounded-lg'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign Up
        </button>
      </form>
      <div className='flex gap-3 my-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
        <span className='text-blue-600'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
