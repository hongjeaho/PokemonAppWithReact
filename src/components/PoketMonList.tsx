
import styled from '@emotion/styled/macro'
import React from 'react'
import { getIndex, getIndexNumber } from '@/utils'
import useInfitityObserver from '@/hooks/useInfiniteObserver'
import { useNavigate } from 'react-router-dom'
import { type InfiniteData, type InfiniteQueryObserverResult } from '@tanstack/react-query'
import { type AxiosResponse } from 'axios'
import { type ListResponse } from '@/types'

const getImageUrl = (url: string): string =>{
  const pokemonIndex = getIndex(url)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
}

interface Props {
  hasNextPage: boolean | undefined
  pokmonList: InfiniteData<AxiosResponse<ListResponse, Error>> | undefined
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>
}

const PoketMonList: React.FC<Props> = ({pokmonList, hasNextPage, fetchNextPage}) => {
  
  const {target} = useInfitityObserver( {hasNextPage, fetchNextPage})
  const navigate = useNavigate();

  return (
    <Base>
        <List>
          {pokmonList?.pages.map((pageItme) => {
            return pageItme.data.results.map((pokemon) => (
              <Item key={pokemon.name} onClick={() => { navigate(`/detail/${getIndex(pokemon.url)}`) }}>
                <Image src={getImageUrl(pokemon.url)} />
                <Name>{pokemon.name}</Name>
                <Index> {`#${getIndexNumber(getIndex(pokemon.url))}`}</Index>
              </Item>
            ))
          })}
        </List>
      <div ref={target} />
    </Base>
  )
}



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
