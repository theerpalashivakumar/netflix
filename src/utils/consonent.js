

export const profile_avatar = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"


export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
}; 

export const IMAGE_CDN_URL ="https://image.tmdb.org/t/p/w500/"


export const lag = {
  en:{
    search:"Search",
    placeholder:"what would you like to watch today"
  },
  hindi:{
    search:"खोज",
    placeholder:"आज आप क्या देखना चाहेंगे?"
  },
  spanish:{
    search:"buscar",
    placeholder:"¿Qué te gustaría ver hoy?"
  }
}

 


export const languageSet = [
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"}
]

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY