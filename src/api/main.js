/* eslint-disable */
import service from '@/utils/request'

const BannerUrl  = '/index/banner.json' // 首页数据接口
const CatalogUrl = '/index/catalog.json' // 首页数据接口
const RecommendUrl = '/index/recommends.json' // 首页数据接口
const AlbumUrl = '/index/album.json'
const ArticleUrl = '/index/article.json'

export function getBanner () {
  return service({
    url   : BannerUrl,
    method: 'get'
  })
}

export function getCatalog () {
  return service({
    url   : CatalogUrl,
    method: 'get'
  })
}

export function getRecommends () {
  return service({
    url   : RecommendUrl,
    method: 'get',
    params: { type: 1}
  })
}

export function getAlbum (zid) {
  console.log("api:"+zid)
  return service({
    url   : AlbumUrl,
    method: 'get',
    params: { id: zid}
  })
}

export function getArticle (id) {
  console.log("getArticle:"+id)
  return service({
    url   : ArticleUrl,
    method: 'get',
    params: { id: id}
  })
}
