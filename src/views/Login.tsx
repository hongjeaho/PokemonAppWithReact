import { customerState } from '@/store/customer'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const Login: React.FC = () => {
  const setCustomer = useSetRecoilState(customerState)

  useEffect(() =>{ 
    setCustomer({name: 'testName'})
  } , [])

  return <>로그인 되었습니다.</>
}

export default Login
