import axios, { type AxiosResponse } from 'axios'
import { type UseQueryResult, useQuery, useQueries } from '@tanstack/react-query'
import { type PokemonResponse, type ListResponse } from '@/types'

const poketmonApi = async (key?: string, params = {}) =>
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${key ?? ''}`, {
    params,
  })

export const usePokmonList = (): UseQueryResult<AxiosResponse<ListResponse>, Error> => {
  return useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => await poketmonApi(undefined, { limit: 151 }),
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
