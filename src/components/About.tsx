import { type Ability, type Color, type Type } from '@/types'
import { mapColorToHex, mapTypeToHex } from '@/utils'
import styled from '@emotion/styled/macro'
import React from 'react'
import Abilities from './Abilities'

interface Props {
  isLoading: boolean
  flavorText: string
  color: Color
  growthRate: string
  genderRate: number
  isLegendary: boolean
  isMythical: boolean
  types: Type[]
  abilities: Ability[]
  weight: number
  height: number
  baseExp: number
}

const About: React.FC<Props> = ({
  isLoading,
  flavorText,
  color,
  growthRate,
  genderRate,
  isLegendary,
  isMythical,
  types,
  weight,
  height,
  baseExp,
  abilities,
}) => {
  const rarity = isLegendary ? '전설' : isMythical ? '마법' : '일반'
  const gender = genderRate === -1 ? '없음' : genderRate === 0 ? '남성' : '여성'

  return (
    <Base>
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <>
          <FlavorText>{flavorText}</FlavorText>
          <TypeList>
            {types?.map(({ type }, index) => (
              <TypeWrapper key={index} color={mapTypeToHex(type.name)}>
                <TypeImage src={`/assets/${type.name}.svg`} />
                <TypeLabel>{type.name.toUpperCase()}</TypeLabel>
              </TypeWrapper>
            ))}
          </TypeList>
          <InfoContainerWrapper>
            <InfoTitle color={mapColorToHex(color.name)}>{flavorText}</InfoTitle>
            <InfoContainer>
              <InfoItem>
                <InfoItemLabel>키(height)</InfoItemLabel>
                <InfoItemValue color={mapColorToHex(color.name)}>{height}</InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>몸무개(weight)</InfoItemLabel>
                <InfoItemValue color={mapColorToHex(color.name)}>{weight}</InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>성별(Gender)</InfoItemLabel>
                <InfoItemValue color={mapColorToHex(color.name)}>{gender}</InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>성정률(growth rate)</InfoItemLabel>
                <InfoItemValue color={mapColorToHex(color.name)}>{growthRate}</InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>기본 경험치(base exp)</InfoItemLabel>
                <InfoItemValue color={mapColorToHex(color.name)}>{baseExp}</InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>rarity</InfoItemLabel>
                <InfoItemValue color={mapColorToHex(color.name)}>{rarity}</InfoItemValue>
              </InfoItem>
            </InfoContainer>
          </InfoContainerWrapper>

          <Abilities color={color} abilities={abilities} />
        </>
      )}
    </Base>
  )
}

const Base = styled.div`
  padding: 20px;
`

const FlavorText = styled.div`
  margin: 0 auto;
  word-break: break-word;
  font-size: 14px;
  color: #374151;
`

const TypeWrapper = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`

const TypeList = styled.div`
  display: flex;
  margin-top: 0;

  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`

const TypeImage = styled.img`
  height: 12px;
`

const TypeLabel = styled.span`
  margin-left: 4px;
  color: #fff;
  font-size: 10px;
`

// const ImageWrapper = styled.div`
//   width: 100%;
//   height: 160px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const Image = styled.img`
//   width: 120px;
//   height: 120px;
//   object-fit: contain;
// `

const InfoContainerWrapper = styled.div`
  margin-top: 32px;
`

const InfoTitle = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  row-gap: 12px;
`

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: repeat(0, 1fr);
`

const InfoItemLabel = styled.span`
  font-weight: bold;
  color: #374151;
  font-size: 12px;
`

const InfoItemValue = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 12px;
`

export default About
