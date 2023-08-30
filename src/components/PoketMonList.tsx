import { usePokmonList } from '@/hooks/usePoketmon'
import styled from '@emotion/styled/macro'
import React from 'react'
import { getIndex } from '@/utils'

const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

const PoketMonList: React.FC = () => {
  const { isLoading, isError, data: pokmonList } = usePokmonList()

  return (
    <Base>
      {isLoading || isError ? (
        <LoadingWrapper>
          <Loading src="/assets/loading.gif" />
        </LoadingWrapper>
      ) : (
        <List>
          {pokmonList?.data.results.map((itme, index) => (
            <Item key={itme.name}>
              <Image src={getImageUrl(index + 1)} />
              <Name>{itme.name}</Name>
              <Index>
                <div id={getIndex(String(index + 1))}></div>
              </Index>
            </Item>
          ))}
        </List>
      )}
    </Base>
  )
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(180vh - 180px);
`

const Loading = styled.img``

const Base = styled.div`
  margin-top: 24px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgb(0, 0, 0, 0.21);
  border-radius: 12px;

  & + & {
    margin-top: 8px;
  }
`

const Image = styled.img``

const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transform: capitalize; // 첫번째 문자를 대문자로
  font-size: 12px;
  font-weight: bold;
`

const Index = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #d1d5db;
`

export default PoketMonList
