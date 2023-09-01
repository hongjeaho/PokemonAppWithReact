import PoketMonList from '@/components/PoketMonList'
import styled from '@emotion/styled/macro'
import React from 'react'
import { usePokmonList } from '@/hooks/usePoketmon'

const Home: React.FC = () => {
  const { isLoading, data: pokmonList, hasNextPage, fetchNextPage } = usePokmonList()

  return (
    <Base>
      <Title>Pokedex</Title>
      <Description>설명 설명...</Description>
      {isLoading ? (
        <LoadingWrapper>
          <Loading src="/assets/loading.gif" />
        </LoadingWrapper>
      ) : (
        <PoketMonList pokmonList={pokmonList} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage}/>
      )}
      
      <ImageWrapper>
        <Image src="/assets/pocketball.svg" />
      </ImageWrapper>
    </Base>
  )
}

const Base = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(180vh - 180px);
`

const Loading = styled.img``

const Title = styled.div`
  margin: 0;
  padding: 0;
  color: #d34f49;
  font-weight: bold;
`

const Description = styled.small`
  color: #6d7280;
  padding: 0;
  margin: 16px 0 0 0;
  display: block;
`

const ImageWrapper = styled.div`
  position: fixed;
  width: 288px;
  height: 288px;
  top: 0;
  right: 0;
  opacity: 0.4;
  transform: translate(96px, -96px);
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export default Home
