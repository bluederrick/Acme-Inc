/** @format */
import { Link } from 'react-router-dom'
/** @format */
import { FaTwitter } from 'react-icons/fa'
const Login = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-gray-100 font-serif px-4">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-6">
        Sign in to your account
      </h1>
      <div className="bg-white rounded-lg p-6 sm:p-10 md:p-16 w-full max-w-md">
        {/* Email Address */}
        <p className="mb-3">
          <label className="text-sm font-medium">Email address</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2 mt-1"
          />
        </p>
        <p className="mb-4">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            className="border border-gray-300 rounded w-full p-2 mt-1"
          />
        </p>
        {/* Section: Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="remember"
              id="remember"
              className="border-black rounded appearance-none w-4 h-4 mr-2 border-2 border-gray-500 checked:bg-blue-500 checked:border-blue-500"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        {/* Sign In Buttons */}
        <button className="bg-black text-white w-full py-2 rounded border border-gray-100 mb-3">
          Sign in
        </button>
        <button className="flex items-center justify-center gap-2 bg-white text-black w-full py-1 rounded border border-gray-300 mb-3">
          <FaTwitter className="text-black text-2xl" />
          Sign in with Google
        </button>
        {/* Or Continue With */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-sm text-gray-500">Or continue with</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        {/* Sign Up Link */}
        <p className="text-center text-sm">
          Not a member?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
