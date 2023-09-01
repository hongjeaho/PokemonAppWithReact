import axios, { type AxiosResponse } from 'axios'
import { type UseQueryResult, type UseInfiniteQueryResult  ,useQuery, useQueries, useInfiniteQuery } from '@tanstack/react-query'
import { type PokemonResponse, type ListResponse } from '@/types'

const poketmonApi = async (key: string) =>
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${key}`)

const poketmonListApi = async (offset:number = 0) =>
  await axios.get(`https://pokeapi.co/api/v2/pokemon`, {params: {limit: 10, offset}},)  

export const usePokmonList = (): UseInfiniteQueryResult<AxiosResponse<ListResponse>, Error> => {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: async ({pageParam = 0}) => await poketmonListApi(pageParam),
    getNextPageParam: (page) =>  {
      const {next} = page.data

      if(next !== null ) {
        const url = new URL(next)
        const params = new URLSearchParams(url.search)
        return Number(params.get('offset'))
      }

      return false
    }
  })
}

export const usePokmon = (id: string): UseQueryResult<AxiosResponse<PokemonResponse, Error>> => {
  return useQuery({
    queryKey: ['pokiemon', id],
    queryFn: async () => await poketmonApi(id),
  })
}

export const usePokmonWithNamesList = (
  names: string[],
): Array<UseQueryResult<AxiosResponse<PokemonResponse, Error>>> => {
  const queries = names.map((name, index) => ({
    queryKey: ['pokiemon', `${name}_${index}`],
    queryFn: async () => await poketmonApi(name),
  }))

  return useQueries({ queries })
}
