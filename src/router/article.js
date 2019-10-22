import ArticleList from '@/components/Article/list'
import ArticleContent from '@/components/Article/content'
import Tabbar from '@/components/Tabbar/index'

export default [  
  {
    path: '/articlelist',
    name: 'articlelist',
    components: {
      default: ArticleList,
      tabbar: Tabbar,
    }
  },
  {
    path: '/articlecontent/:id',
    name: 'articlecontent',
    components: {
      default: ArticleContent
    }
  }
]