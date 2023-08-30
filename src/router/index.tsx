import React from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import BaseLayout from '@/components/layout/BaseLayout'
import Home from '@/views/Home'
import Detail from '@/views/Detail'

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
