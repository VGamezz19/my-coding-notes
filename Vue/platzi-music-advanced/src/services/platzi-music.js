import trae from 'trae'
import {baseUrl} from './config'
console.log(baseUrl)
const platziMusicService = trae.create({ baseUrl })

export default platziMusicService
