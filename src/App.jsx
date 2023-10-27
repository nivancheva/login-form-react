import './App.css'

function App() {

  return (
    <div className='w-[420px] text-white bg-transparent py-[30px] px-[40px] rounded-[10px] border-solid border-2 border-white backdrop-blur-[30px] shadow-md border-opacity-20'>
      <form>
        <h1 className='text-3xl text-center'>Login</h1>
        <div className="w-full h-[50px] mx-0 my-[30px] relative">
          <input 
            className='placeholder-white w-full h-full bg-transparent outline-none border-2 border-solid border-white rounded-[40px] border-opacity-20 text-base py-5 pr-[45px] pl-5'
            type="text" placeholder='Username' required/>
          <i className='bx bxs-user absolute right-5 top-2/4 -translate-y-1/2 text-xl'></i>
        </div>
        <div className="w-full h-[50px] mx-0 my-[30px] relative">
          <input 
            className='placeholder-white w-full h-full bg-transparent outline-none border-2 border-solid border-white rounded-[40px] border-opacity-20 text-base py-5 pr-[45px] pl-5'
            type="password" placeholder='Password' required/>
          <i className='bx bxs-lock-alt absolute right-5 top-2/4 -translate-y-1/2 text-xl'></i>
        </div>

        <div className="flex justify-between text-[14.5px] mt-[-15px] mx-0 mb-[15px]">
          <label>
            <input className='mr-[3px]' type='checkbox'/>Remember me
          </label>
          <a className='text-white no-underline hover:underline' href='#'>Forgot password?</a>
        </div>

        <button className='btn w-full h-[45px] bg-white outline-none text-gray-700 font-semibold cursor-pointer rounded-[40px] shadow-md' type='submit'>Login</button>

        <div className="text-[14.5] text-center mt-[20px] mx-0 mb-[15px]">
          <p>Don't have an account?
            <a className='text-white no-underline font-semibold hover:underline' href='#'> Register</a>
          </p>
        </div>
        
      </form>
    </div>
  )
}

export default App
