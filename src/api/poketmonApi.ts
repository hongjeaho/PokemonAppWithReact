import axios from 'axios'

const poketmonApi = async (key: string) =>
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${key}`)

export default poketmonApi
