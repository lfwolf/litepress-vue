import ArticleList from '@/components/Article/list'
import ArticleContent from '@/components/Article/content'
import Audio from '@/components/Audio/'
import AudioContent from '@/components/Audio/content'
import Tabbar from '@/components/Tabbar/index'
import Voice from '@/components/Voice/'

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
  },
  {
    path: '/audio/list/',
    name: 'audio',
    components: {
      default: Audio
    }
  },
  {
    path: '/audio/content/:id',
    name: 'audioContent',
    components: {
      default: AudioContent
    }
  },{
    path: '/voice/list/',
    name: 'voice',
    components: {
      default: Voice
    }
  }
]