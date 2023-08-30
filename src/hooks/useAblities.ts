import { type AbilityResponse, type Ability } from '@/types'
import { type UseQueryResult, useQueries } from '@tanstack/react-query'
import axios, { type AxiosResponse } from 'axios'

const useAblities = (
  ablities: Ability[],
): Array<UseQueryResult<AxiosResponse<AbilityResponse, Error>>> => {
  const queries = ablities.map(({ ability }, index) => ({
    queryKey: ['ablity', index],
    queryFn: async () => await axios.get(ability.url),
  }))

  return useQueries({ queries })
}

export default useAblities
