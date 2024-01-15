import React, { lazy } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import BaseLayout from '@/components/layout/BaseLayout'

const Home = lazy(() => import('@/views/Home'))
const Detail = lazy(() => import('@/views/Detail'))

const router: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
]

export default createBrowserRouter(router)
