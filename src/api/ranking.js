import { get } from 'axios'
import { protocol, host, key } from '@/utils/ApiData'

function getPlayers (region, game) {
  const tftUrl = `tft/league/v1/challenger?api_key=${key}`
  const lolUrl = `lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${key}`
  const resource = (game) ? tftUrl : lolUrl
  const API_URL = `${protocol}${region}${host}${resource}`

  return get(API_URL)
}

export { getPlayers }
