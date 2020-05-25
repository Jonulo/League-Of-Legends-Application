import { get } from 'axios'
import { protocol, host, key } from '@/utils/ApiData'

function getAccount (region, account) {
  const resource = `lol/summoner/v4/summoners/by-name/${account}`
  const API_URL = `${protocol}${region}${host}${resource}?api_key=${key}`

  // obtener valor del state desde el store:
  // const params = {
  //   access_token: store.state.{nombremodulo}.{nombredelstate},
  //   locale
  // }

  return get(API_URL)
}

export { getAccount }
