import './App.css'
import Home from './components/HomePage/Home'
import PlayerWrap from './components/HomePage/Player/PlayerWrap'
import { MainContext } from './Context/Context'
import { useEffect, useState } from 'react'
import { getAccessToken, getAlbums, getTracks, getArtist } from './Api'

function App() {
  const [albums, setAlbums] = useState(null)
  const [tracks, setTracks] = useState(null)
  const [artist, setArtist] = useState(null)
  const [currentTrackInfo, setCurrentTrackInfo] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const token = await getAccessToken()
        const albumData = await getAlbums(token)
        const tracks = await getTracks(token)
        const artistData = await getArtist(token)

        setTracks(tracks)
        setAlbums(albumData)
        setArtist(artistData)
      } catch (err) {
        console.error('Error fetching the token or the album:', err)
        setError(err)
      }
    }

    fetchAlbums()
  }, [])

  const data = {
    albums,
    tracks,
    currentTrackInfo,
    setCurrentTrackInfo,
    artist,
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <MainContext.Provider value={data}>
      <Home />
      <PlayerWrap />
    </MainContext.Provider>
  )
}

export default App
