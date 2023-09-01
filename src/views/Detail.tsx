import PokeMonInfo from '@/components/PokeMonInfo'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import Tabs from '@/components/Tabs'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Evolution from '@/components/Evolution'
import { useSpecies } from '@/hooks/useSpecies'
import { usePokmon } from '@/hooks/usePoketmon'
import styled from '@emotion/styled'

type Tab = 'A' | 'S' | 'E'
interface Params {
  id: string
}

const Detail: React.FC = () => {
  const { id } = useParams() as Readonly<Params>

  const [tab, setTab] = useState<Tab>('A')
  const { isLoading, data: speciesResult } = useSpecies(id)
  const { isLoading: isPokemonLoading, data: pokemonResult } = usePokmon(id)

  const { name, types, stats, weight, height, baseExp, abilities } = useMemo(
    () => ({
      name: pokemonResult?.data.name ?? '',
      types: pokemonResult?.data.types ?? [],
      stats: pokemonResult?.data.stats ?? [],
      height: pokemonResult?.data.height ?? 0,
      weight: pokemonResult?.data.weight ?? 0,
      baseExp: pokemonResult?.data.base_experience ?? 0,
      abilities: pokemonResult?.data.abilities ?? [],
    }),
    [pokemonResult],
  )

  const { color, growthRate, genderRate, flavorText, isLegendary, isMythical, evolutionChainUrl } =
    useMemo(
      () => ({
        color: speciesResult?.data.color ?? ({} as any),
        growthRate: speciesResult?.data.growth_rate.name ?? '',
        genderRate: speciesResult?.data.gender_rate ?? -1,
        flavorText: speciesResult?.data.flavor_text_entries[0].flavor_text ?? '',
        isLegendary: speciesResult?.data.is_legendary ?? false,
        isMythical: speciesResult?.data.is_mythical ?? false,
        evolutionChainUrl: speciesResult?.data.evolution_chain.url ?? '',
      }),
      [speciesResult],
    )

  return (
    <>
      {(isLoading || isPokemonLoading) ? (
        <LoadingWrapper>
          <Loading src="/assets/loading.gif" />
        </LoadingWrapper>
      ) : (
        <>
          <PokeMonInfo id={id} name={name} types={types} color={color} />
          <Tabs
            tab={tab}
            color={color}
            onClick={(tab: Tab) => {
              setTab(tab)
            }}
          />
          {tab === 'A' && (
            <About
              isLoading={isLoading}
              flavorText={flavorText}
              types={types}
              abilities={abilities}
              isLegendary={isLegendary}
              isMythical={isMythical}
              genderRate={genderRate}
              growthRate={growthRate}
              weight={weight}
              height={height}
              baseExp={baseExp}
              color={color}
            />
          )}
          {tab === 'S' && <Stats isLoading={isLoading} color={color} stats={stats} />}
          {tab === 'E' && <Evolution color={color} url={evolutionChainUrl} />}
        </>
      )}
    </>
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

export default Detail
