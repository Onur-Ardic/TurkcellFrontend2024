import { useState, useEffect, useContext } from 'react'
import { CustomImage, Icon } from '../Navbar/styled'
import toast from 'react-hot-toast'
import {
  PlayerWrapper,
  MusicName,
  ButtonWrapper,
  PlayerButton,
  MusicLineContainer,
  MusicProgress,
  VolumeControl,
} from './styled'
import { MainContext } from '../../../Context/Context'
import { AlbumsContent, Flexible } from '../Main/styled'

const PlayerWrap = () => {
  const [player, setPlayer] = useState(null)
  const [isPaused, setIsPaused] = useState(true)
  const [deviceId, setDeviceId] = useState(null)
  const [volume, setVolume] = useState(50)
  const [progress, setProgress] = useState(0)

  const { currentTrackInfo } = useContext(MainContext)

  useEffect(() => {
    const token =
      'BQD2IY5xrXAPswBGSfjo1Ct0FswcfHBLu0E_3M04sRu71mSlhQLGykO-16XggIPaNV0DTxfjqA4p9rlaERrY-Vo0SqMMwOT6w1fmAZelhRu9390dnBvw8pXQer9cnYs3P4WLMAmNLJ25f-gtR9O2U1zejUSGVgkluaR6bv596NQ6jdwg7h7uXPtvl4UYY0UOr3hCSUOrzbI'

    if (!window.Spotify) {
      const script = document.createElement('script')
      script.src = 'https://sdk.scdn.co/spotify-player.js'
      script.async = true
      script.onload = () => initPlayer(token)
      document.body.appendChild(script)
    } else {
      initPlayer(token)
    }
  }, [])

  const initPlayer = (token) => {
    const playerInstance = new window.Spotify.Player({
      name: 'Web Playback SDK Player',
      getOAuthToken: (cb) => {
        cb(token)
      },
      volume: 0.5,
      webPlaybackSDKConfig: {
        name: 'web-playback-sdk',
        getAccessToken: async () => token,
      },
    })

    playerInstance.addListener('ready', ({ device_id }) => {
      setDeviceId(device_id)
    })

    playerInstance.addListener('player_state_changed', (state) => {
      if (!state) return
      setIsPaused(state.paused)
      setProgress((state.position / state.duration) * 100)
    })

    playerInstance.connect().then((success) => {
      if (success) {
        toast.success('Spotify ile başarıyla bağlantı kuruldu!')
        setPlayer(playerInstance)
      } else {
        toast.error('Spotify ile bağlantı kurulamadı.')
      }
    })
  }

  useEffect(() => {
    if (player && deviceId && currentTrackInfo) {
      playTrack(deviceId, currentTrackInfo.uri)
    }
  }, [player, deviceId, currentTrackInfo])

  const playTrack = (device_id, track_uri) => {
    const token =
      'BQD2IY5xrXAPswBGSfjo1Ct0FswcfHBLu0E_3M04sRu71mSlhQLGykO-16XggIPaNV0DTxfjqA4p9rlaERrY-Vo0SqMMwOT6w1fmAZelhRu9390dnBvw8pXQer9cnYs3P4WLMAmNLJ25f-gtR9O2U1zejUSGVgkluaR6bv596NQ6jdwg7h7uXPtvl4UYY0UOr3hCSUOrzbI'

    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [track_uri] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success('Şarkı oynatılıyor')
        } else {
          toast.error(`Şarkı oynatılamadı: ${response.statusText}`)
        }
      })
      .catch((error) => {
        toast.error('Bir hata oluştu. Şarkı oynatılamadı.')
        console.error('Şarkı oynatma hatası:', error)
      })
  }

  const handlePlayPause = () => {
    if (!player) return
    player.togglePlay().then(() => {})
  }

  const handlePreviousTrack = () => {
    if (!player) return
    player.previousTrack().then(() => {})
  }

  const handleNextTrack = () => {
    if (!player) return
    player.nextTrack().then(() => {})
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100
    setVolume(newVolume)
    if (player) {
      player.setVolume(newVolume).then(() => {})
    }
  }

  const handleSeek = (e) => {
    if (!player) return
    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const width = rect.width
    const percentage = (offsetX / width) * 100
    const newPosition = (percentage / 100) * currentTrackInfo.duration_ms
    player.seek(newPosition).then(() => {})
  }

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <PlayerWrapper>
      <MusicName>
        <Flexible display={'flex'} alignItems={'center'} gap={'20px'}>
          {currentTrackInfo?.album?.images?.[0]?.url && (
            <CustomImage
              src={currentTrackInfo.album.images[0].url}
              width={'60px'}
              height={'60px'}
            />
          )}
          <AlbumsContent>
            <h3>{currentTrackInfo ? currentTrackInfo.name : ''}</h3>
            <p>{currentTrackInfo ? currentTrackInfo.artists : ''}</p>
          </AlbumsContent>
        </Flexible>
      </MusicName>

      <ButtonWrapper>
        <Flexible display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <PlayerButton onClick={handlePreviousTrack}>
            <Icon className="bi bi-skip-start-fill" fontSize={'20px'} color={'#fff'} />
          </PlayerButton>

          <PlayerButton onClick={handlePlayPause}>
            <Icon
              className={isPaused ? 'bi bi-play-fill' : 'bi bi-pause-fill'}
              fontSize={'20px'}
              color={'#fff'}
            />
          </PlayerButton>

          <PlayerButton onClick={handleNextTrack}>
            <Icon className="bi bi-skip-end-fill" fontSize={'20px'} color={'#fff'} />
          </PlayerButton>
        </Flexible>
        <div className="wrap">
          <Flexible display={'flex'} gap={'15px'} alignItems={'center'}>
            <span>{formatTime(progress)}</span>
            <MusicLineContainer onClick={(e) => handleSeek(e)}>
              <MusicProgress progress={progress}></MusicProgress>
            </MusicLineContainer>
            <span>{formatTime(currentTrackInfo?.duration_ms / 1000)}</span>
          </Flexible>
        </div>
      </ButtonWrapper>

      <VolumeControl>
        <Icon className="bi bi-volume-up-fill" fontSize={'20px'} color={'#fff'} />
        <input type="range" min="0" max="100" value={volume * 100} onChange={handleVolumeChange} />
      </VolumeControl>
    </PlayerWrapper>
  )
}

export default PlayerWrap
