import { useState, useEffect, useContext } from 'react'
import { CustomImage, Icon } from '../Navbar/styled'
import toast from 'react-hot-toast'
import {
  ButtonWrapper,
  MusicLine,
  MusicName,
  PlayerButton,
  PlayerWrapper,
  VolumeControl,
} from './styled'
import { MainContext } from '../../../Context/Context'
import { AlbumsContent, Flexible } from '../Main/styled'

const PlayerWrap = () => {
  const [player, setPlayer] = useState(null)
  const [isPaused, setIsPaused] = useState(true)
  const [deviceId, setDeviceId] = useState(null)

  const [volume, setVolume] = useState(50)

  const { currentTrackInfo } = useContext(MainContext)

  useEffect(() => {
    const token =
      'BQARcI-__FGK5wd71P1UU7tfpWvEICbunoAUJnRIgZaMHhYNAYyKhEVToktqvfxA26Rc8abniCKDb2Lvn-Wu3E_TiY-j8zKpipyz_YuOcab6tvm1xbrBAjMelal-_MBwYFrWDd1yYJ05bq7M8o3KOBnMjxm3WDhCaSpZ0kr4TOekjdj77nBJsYLvqwBT5B5WTTB9DO9pIWE'

    window.onSpotifyWebPlaybackSDKReady = () => {
      const playerInstance = new window.Spotify.Player({
        name: 'Web Playback SDK Player',
        getOAuthToken: (cb) => {
          cb(token)
        },
        volume: 0.5,
        webPlaybackSDKConfig: {
          name: 'web-playback-sdk',
          robustnessLevel: 'SW_SECURE_DECODE',
        },
      })

      playerInstance.addListener('ready', ({ device_id }) => {
        setDeviceId(device_id)
      })

      playerInstance.addListener('player_state_changed', (state) => {
        if (!state) return

        setIsPaused(state.paused)
      })

      playerInstance.connect().then((success) => {
        if (success) {
          toast.success('Spotify ile başarıyla bağlantı kuruldu!')
        } else {
          toast.error('Spotify ile bağlantı kurulamadı.')
        }
      })

      setPlayer(playerInstance)
    }
  }, [])

  useEffect(() => {
    if (player && deviceId && currentTrackInfo) {
      playTrack(deviceId, currentTrackInfo.uri)
    }
  }, [player, deviceId, currentTrackInfo])

  const playTrack = (device_id, track_uri) => {
    const token =
      'BQARcI-__FGK5wd71P1UU7tfpWvEICbunoAUJnRIgZaMHhYNAYyKhEVToktqvfxA26Rc8abniCKDb2Lvn-Wu3E_TiY-j8zKpipyz_YuOcab6tvm1xbrBAjMelal-_MBwYFrWDd1yYJ05bq7M8o3KOBnMjxm3WDhCaSpZ0kr4TOekjdj77nBJsYLvqwBT5B5WTTB9DO9pIWE'

    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [track_uri] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        toast.success('Şarkı oynatılıyor')
      } else {
        toast.error('Şarkı oynatılamadı:', response.statusText)
      }
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
            <span></span>
            <MusicLine />
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
