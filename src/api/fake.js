import { get } from 'axios'

const KEY = 'RGAPI-e5e89540-5598-48c8-8e56-84172d9dca3d'
const URL = `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/jonu?api_key=${KEY}`

function getToken () {
  return get(`${URL}`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'multipart/form-data'
      }
    })
  // return new Promise((resolve, reject) => {
  //   const proof = true
  //   if (proof) {
  //     setTimeout(() => {
  //       resolve('esto debería ser el response de la API ):')
  //     }, 3000)
  //   } else {
  //     const error = new Error('Error')
  //     reject(error)
  //   }
  // })
}

export { getToken }
