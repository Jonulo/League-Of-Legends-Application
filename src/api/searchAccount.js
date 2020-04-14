import { get } from 'axios'

const protocol = 'https://'
const host = '.api.riotgames.com/'
const key = 'RGAPI-bd100879-44be-44f3-86d2-e34b469573f9'

function getAccount ({ region, account }) {
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
