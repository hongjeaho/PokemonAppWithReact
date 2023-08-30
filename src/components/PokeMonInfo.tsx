import { type Color, type Type } from '@/types'
import { getIndex, mapColorToHex, mapTypeToHex } from '@/utils'
import styled from '@emotion/styled/macro'
import React from 'react'

interface Props {
  id: string
  name: string
  types?: Type[]
  color: Color
}

const PokeMonInfo: React.FC<Props> = ({ id, name, types, color }) => {
  return (
    <Base color={mapColorToHex(color.name)}>
      <ImageWrapper>
        <Image src="/assets/pocketball.svg" />
      </ImageWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Index>#{getIndex(id)}</Index>
      </InfoWrapper>
      <TypeList>
        {types?.map(({ type }, index) => (
          <TypeWrapper key={index} color={mapTypeToHex(type.name)}>
            <TypeInfo src={`/assets/${type.name}.svg`} />
          </TypeWrapper>
        ))}
      </TypeList>
      <ThumbnaillImageWrapper>
        <ThumbnaillImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </ThumbnaillImageWrapper>
    </Base>
  )
}

const Base = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  padding: 20%;
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
  background-color: ${({ color }) => color};
`

const ImageWrapper = styled.div`
  position: absolute;
  width: 288px;
  height: 288px;
  left: -96px;
  top: -98px;
  opacity: 0.79;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Name = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`
const Index = styled.div`
  color: #fff;
  font-size: 38px;
  font-weight: bold;
  opacity: 0.75;
`

const TypeWrapper = styled.div<{ color: string }>`
  padding: 4px;
  border-radius: 58%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`
const TypeInfo = styled.img`
  height: 12px;
`

const TypeList = styled.div`
  display: flex;
  margin-top: 8px;

  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`

const ThumbnaillImageWrapper = styled.div`
  width: 160px;
  margin-inline: auto;
  margin-block: 24px;
`
const ThumbnaillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export default PokeMonInfo
