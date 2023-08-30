import useEvolution from '@/hooks/useEvolution'
import { type Chain, type Color } from '@/types'
import { mapColorToHex } from '@/utils'
import styled from '@emotion/styled/macro'
import React, { useMemo } from 'react'
import EvolutionStage from './EvolutionStage'

interface Props {
  color: Color
  url: string
}

interface EvolutionResult {
  from: { name: string; url: string }
  to: { name: string; url: string }
  level: number
}

const Evolution: React.FC<Props> = ({ color, url }) => {
  const { isLoading, data: evolutionResult } = useEvolution(url)

  const resultList: EvolutionResult[] = useMemo(() => {
    const resultList: EvolutionResult[] = []

    const makeChain = (chain: Chain) => {
      if (chain.evolves_to.length === 0) return

      const [evolversTo] = chain.evolves_to
      const from = chain.species
      const to = evolversTo.species
      const level = evolversTo.evolution_details[0].min_level

      resultList.push({
        from,
        to,
        level,
      })

      makeChain(evolversTo)
    }

    const chain = evolutionResult?.data.chain
    chain !== undefined && makeChain(chain)

    return resultList
  }, [evolutionResult])

  return (
    <Base>
      {isLoading ? (
        <div>Loadding</div>
      ) : (
        <>
          <Title color={mapColorToHex(color.name)}>진화</Title>
          <List>
            {resultList.length > 0 ? (
              resultList.map(({ from, to, level }, index) => (
                <EvolutionStage key={index} color={color} from={from} to={to} level={level} />
              ))
            ) : (
              <EmptyWrapper>
                <Empty color={mapColorToHex(color.name)}>진화 정보가 없습니다.</Empty>
              </EmptyWrapper>
            )}
          </List>
          <EmptyWrapper>
            <Empty color={mapColorToHex(color.name)}></Empty>
          </EmptyWrapper>
        </>
      )}
    </Base>
  )
}

const Base = styled.div`
  margin-top: 32px;
  padding: 0 20px 20px;
`

const Title = styled.h4<{ color: string }>`
  color: ${({ color }) => color};
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`

const List = styled.ul`
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
`

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 444px);
  & + & {
    margin-top: 24px;
  }
`

const Empty = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`

export default Evolution
