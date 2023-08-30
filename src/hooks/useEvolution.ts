import { type EvolutionChainResponse } from '@/types'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import axios, { type AxiosResponse } from 'axios'

const useEvolution = (
  url: string,
): UseQueryResult<AxiosResponse<EvolutionChainResponse, Error>> => {
  return useQuery({
    queryKey: ['evolution', { url }],
    queryFn: async () => await axios.get(url),
  })
}

export default useEvolution
