import { type Color } from '@/types'
import { mapColorToHex } from '@/utils'
import styled from '@emotion/styled'
import React from 'react'

interface Props {
  tab: 'A' | 'S' | 'E'
  onClick: (tab: 'A' | 'S' | 'E') => void
  color: Color
}

const Tabs: React.FC<Props> = ({ tab = 'A', color, onClick }) => {
  return (
    <Base>
      <List>
        <Item>
          <TabButton
            active={tab === 'A'}
            color={mapColorToHex(color.name)}
            onClick={() => {
              onClick('A')
            }}
          >
            About
          </TabButton>
        </Item>
        <Item>
          <TabButton
            active={tab === 'S'}
            color={mapColorToHex(color.name)}
            onClick={() => {
              onClick('S')
            }}
          >
            Stata
          </TabButton>
        </Item>
        <Item>
          <TabButton
            active={tab === 'E'}
            color={mapColorToHex(color.name)}
            onClick={() => {
              onClick('E')
            }}
          >
            Evolution
          </TabButton>
        </Item>
      </List>
    </Base>
  )
}

const Base = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`

const Item = styled.li`
  & + & {
    margin-left: 16px;
  }
`

const TabButton = styled.button<{ active: boolean; color: string }>`
  margin: 0;
  border-radius: 8px;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  padding: 6px 12px;
  border: none;
  font-size: 12px;
  color: ${({ active, color }) => (active ? color : '#6B7280')};
`

export default Tabs
