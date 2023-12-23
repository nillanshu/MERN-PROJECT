
import loginpic from '../images/login.jpg'
import { Link } from 'react-router-dom'
import Loginform from '../components/Loginform'


const Login = () => {



  return (
    <>
      <section className='sign-in'>
          <div className='container mt-5'>
            <div className='signin-content'>
                <div className='signin-image'>
                  <figure>
                    <img src={loginpic} alt="Login pic" />
                  </figure>
                  <Link to='/signup' className='signup-image-link'>Create an Account</Link>
                </div>
                <div className='signin-form'>
                  <h2 className="form-title">Sign in</h2>
                  <Loginform />
                </div>

            </div>
          </div>
      </section>
    </>
  )
}

export default Login