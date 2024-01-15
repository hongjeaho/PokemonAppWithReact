import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home'))
const Detail = lazy(() => import('@/views/Detail'))

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/detail" Component={Detail} />
      </Routes>
    </>
  )
}

export default App
