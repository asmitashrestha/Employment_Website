import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      
      e.preventDefault()
      console.log('api called')
  
      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // username: "atuny0",
          // password: "9uQFF1Lh",
          "username": e.target.name.value,
          "email":e.target.email.value,
          "password": e.target.password.value, 
  
        })
      })
        .then(res =>{
          if(res.ok){
            toast.success("Signup sucessful")
            navigate('/')
          }else{
            toast.error("Invalid Credentials")
          }
        })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.error("Error ocurred during signup")
          toast.error("something went wrong -> mostly when interruption in internet")
        })
    }
  
    return (
      <>
        <div className=''>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Signup</h2>
            </div>
  
            {
              error
              &&
              <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-red-200 p-4'>
                {error}
              </div>
            }
  
  
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>

              
  
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Username</label>

                  </div>
                  <div className="mt-2">
                    <input id="name" name="name" type="name" autoComplete="current-username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Email</label>

                  </div>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="current-email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>


                <div>  
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
  
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Signup</button>
                </div>
              </form>
  
  
            </div>
            <Link to='/login' className='pt-7'>Login</Link>
          </div>
  
  
        </div>
      </>
    
    )
}

export default Signup
