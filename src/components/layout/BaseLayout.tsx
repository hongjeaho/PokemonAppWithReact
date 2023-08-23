import React from 'react'
import styled from '@emotion/styled/macro'
import { Outlet } from 'react-router-dom'
import Footer from '../base/Footer'

const Base = styled.div``
const Main = styled.main``
const Container = styled.div``

const BaseLayout: React.FC = () => {
  return (
    <Base>
      <Main>
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Main>
    </Base>
  )
}

export default BaseLayout
