import React from 'react'
import styled from '@emotion/styled/macro'
import { type Color } from '@/types'
import { mapColorToHex } from '@/utils'
import { usePokmonWithNamesList } from '@/hooks/usePoketmon'

interface Props {
  color: Color
  level: number
  from: {
    name: string
    url: string
  }
  to: {
    name: string
    url: string
  }
}

const EvolutionStage: React.FC<Props> = ({ color, from, to, level }) => {
  const [pre, next] = usePokmonWithNamesList([from.name, to.name])

  return (
    <Base>
      <ImageWrapper>
        <Image src={pre.data?.data.sprites.other['official-artwork'].front_default} />
      </ImageWrapper>
      <DrivreWrapper>
        <Text color={mapColorToHex(color.name)}>{`level : ${level}`}</Text>
        <Driver />
      </DrivreWrapper>
      <ImageWrapper>
        <Image src={next.data?.data.sprites.other['official-artwork'].front_default} />
      </ImageWrapper>
    </Base>
  )
}

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.div``

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const DrivreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Driver = styled.div`
  background-color: #d1d5db;
  border-radius: 12px;
  height: 8px;
  margin-inline: 8px;
  margin-top: 4px;
`

const Text = styled.div<{ color: string }>`
  text-align: center;
  color: ${({ color }) => color};
  font-size: 12px;
`

export default EvolutionStage
