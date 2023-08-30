import axios, { type AxiosResponse } from 'axios'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type SpeciesResponse } from '@/types'
const speciesApi = async (id: string) => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
}

export const useSpecies = (id: string): UseQueryResult<AxiosResponse<SpeciesResponse, Error>> => {
  return useQuery({
    queryKey: ['species', id],
    queryFn: async () => await speciesApi(id),
  })
}
