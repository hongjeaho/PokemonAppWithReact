import React from 'react'
import Info from '@/views/Info'
import PrivateLayout from '@/components/layout/PrivateLayout'

export default  [
  {
    path: 'info',
    element: (
      <PrivateLayout>
        <Info />
      </PrivateLayout>
    ),
  }
] 