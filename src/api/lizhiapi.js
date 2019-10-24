import { lizhiservice } from '@/utils/request'

const uid = "2540285708286522412"

export function getAudioList (page) {
  return lizhiservice({
    url   : uid + "/" + page,
    method: 'get'
  })
}

export function getVoiceList (uid,page) {
  return lizhiservice({
    url   : uid + "/" + page,
    method: 'get',
    params: { uid: uid, page: page}
  })
}
