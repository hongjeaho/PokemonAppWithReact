import { customerState } from '@/store/customer'
import React from 'react'
import { useRecoilValue } from 'recoil'

const Info: React.FC = () => {
  const customer = useRecoilValue(customerState)

  return <>
    <h1>info</h1>
    hello {customer?.name}</>
}

export default Info
