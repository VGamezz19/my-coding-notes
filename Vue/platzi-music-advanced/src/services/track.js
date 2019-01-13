import platziMusicService from './platzi-music'

const trackService = {
  search (q) {
    const type = 'track'

    return platziMusicService.get('/search', { params: { q, type } })
      .then(res => res.data)
  },
  getById (id) {
    return platziMusicService.get(`/tracks/${id}`)
      .then(res => res.data)
  }
}

export default trackService
