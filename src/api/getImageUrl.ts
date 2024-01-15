import { getIndex } from '@/utils'

const getImageUrl = (url: string): string => {
  const pokemonIndex = getIndex(url)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
}

export default getImageUrl
