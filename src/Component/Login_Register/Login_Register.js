import React, { useEffect, useState } from 'react'
import './Login_Register.css'
import Login from './Login/Login'
import Register from './Register/Register'
import ForgetPassword from './ForgetPassword/ForgetPassword'
function Login_Register(props) {
  const [option, setOption] = useState(1)

  const getOption = (data, data2) => {
    props.callBack(data2)
    setOption(data)
  }

  return (
    <div className='LOGIN_REGISTER'>
      {option === 1 && <Login callBack={getOption} />}
      {option === 2 && <Register callBack={getOption} />}
      {option === 3 && <ForgetPassword callBack={getOption} />}
      <div className='overlay' />
    </div>
  )
}

export default Login_Register