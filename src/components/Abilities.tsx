import useAblities from '@/hooks/useAblities'
import { type Color, type Ability } from '@/types'
import { mapColorToHex } from '@/utils'
import styled from '@emotion/styled/macro'
import React from 'react'

interface Props {
  abilities: Ability[]
  color: Color
}

const Abilities: React.FC<Props> = ({ abilities, color }) => {
  const resultList = useAblities(abilities)

  return (
    <Base>
      <Title color={mapColorToHex(color.name)}>능력</Title>
      <List>
        {resultList.map(({ data: ability }, index) => (
          <ListItem key={index}>
            <Label>{ability?.data.name}</Label>
            <Description>{ability?.data.effect_entries[0].effect}</Description>
          </ListItem>
        ))}
      </List>
    </Base>
  )
}

const Base = styled.div`
  margin-top: 30px;
`
const Title = styled.div<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-weight: bold;
  color: ${({ color }) => color};
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`

const ListItem = styled.li`
  display: flex;

  & + & {
    margin-top: 10px;
  }
`

const Label = styled.span`
  flex: 1 0 30%;
  text-transform: capitalize;
  color: #374151;
  font-size: 12px;
  font-weight: bold;
`

const Description = styled.span`
  flex: 1 0 70%;
  font-weight: 400;
  font-size: 12px;
  color: #374151;
  word-wrap: break-word;
`

export default Abilities
