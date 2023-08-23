import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLoginSelector } from '@/store/customer'
import { useRecoilValue } from 'recoil'

interface Props {
  children: React.ReactNode
}

const PrivateLayout: React.FC<Props> = ({ children }) => {
  const pageMove = useNavigate()
  const isLogin = useRecoilValue<boolean>(isLoginSelector)


  useEffect(() => {
    if (!isLogin) {
      alert('접근 권한이 없습니다.')
      pageMove('/')
    }
  }, [isLogin])

  return <>{children}</>
}

export default PrivateLayout
