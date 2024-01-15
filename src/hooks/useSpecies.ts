import { type AxiosResponse } from 'axios'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type SpeciesResponse } from '@/types'
import speciesApi from '@/api/speciesApi'

export const useSpecies = (id: string): UseQueryResult<AxiosResponse<SpeciesResponse, Error>> => {
  return useQuery({
    queryKey: ['species', id],
    queryFn: async () => await speciesApi(id),
  })
}
