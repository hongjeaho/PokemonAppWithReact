import axios from 'axios'

const speciesApi = async (id: string) => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
}

export default speciesApi
