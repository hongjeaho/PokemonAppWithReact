import { type Stat, type Color } from '@/types'
import { mapColorToHex } from '@/utils'
import styled from '@emotion/styled/macro'
import React from 'react'

interface Props {
  isLoading: boolean
  color: Color
  stats?: Stat[]
}

const Stats: React.FC<Props> = ({ isLoading, color, stats }) => {
  return (
    <Base>
      {isLoading ? (
        <div>Loadding</div>
      ) : (
        <>
          <Title color={mapColorToHex(color.name)}>Stage</Title>
          <List>
            {stats?.map(({ stat, base_stat: baseStat }, index) => (
              <ListItem key={index}>
                <Name>{stat.name}</Name>
                <Amount>{baseStat}</Amount>
                <GaugeWrapper>
                  <Gauge
                    color={mapColorToHex(color.name)}
                    percentAge={(baseStat / 255) * 100}
                  ></Gauge>
                </GaugeWrapper>
              </ListItem>
            ))}
          </List>
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
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`
const List = styled.ul`
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
`
const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  & + & {
    margin-top: 12px;
  }
`

const Name = styled.div`
  grid-column: span 2 / span 4;
  color: #374151;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 12px;
`

const Amount = styled.div`
  grid-column: span 1 / span 1;
  font-size: 12px;
  color: #374151;
`

const GaugeWrapper = styled.div`
  grid-column: span 7 / span 7;
  border-radius: 12px;
  background-color: #e5e7eb;
`

const Gauge = styled.div<{ color: string; percentAge: number }>`
  background-color: ${({ color }) => color};
  width: ${({ percentAge }) => `${percentAge}%`};
  height: 100%;
  border-radius: 12px;
`

export default Stats
