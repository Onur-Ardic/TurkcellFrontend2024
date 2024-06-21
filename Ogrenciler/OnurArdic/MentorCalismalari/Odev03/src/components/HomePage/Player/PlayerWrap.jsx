import { useState, useEffect, useContext, useRef } from 'react'
import { AlbumsContent, Flexible } from '../Main/styled'
import { CustomImage, Icon } from '../Navbar/styled'
import {
  ButtonWrapper,
  MusicLine,
  MusicName,
  PlayerButton,
  PlayerWrapper,
  VolumeControl,
} from './styled'
import { MainContext } from '../../../Context/Context'

const PlayerWrap = () => {
  const [player, setPlayer] = useState(null)
  const [isPaused, setIsPaused] = useState(true)
  const [deviceId, setDeviceId] = useState(null)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(50)
  const progressIntervalRef = useRef(null)
  const { currentTrackInfo, setCurrentTrackInfo } = useContext(MainContext)

  useEffect(() => {
    const token =
      'BQA7Q3NgccHYyGZwExjCYF9bGICQ6B1T8uJQeBvJPlJ4CsY1zvj2svNeu4l63yP6prYrcZsdWTAzr1MBXx2HrsP8l25u4uIIuarNGvcwdNfKaR3tynBn5_fiOe0jaJcF9y_5qlzVNMoUE36HBOASzLdoXOT5KdFDxwW6gwwQPZHjD1I3N0vwQJPTEIUt-2h0jni86zbKI_c'

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

        if (state.track_window.current_track) {
          setCurrentTrackInfo({
            name: state.track_window.current_track.name,
            artists: state.track_window.current_track.artists
              .map((artist) => artist.name)
              .join(', '),
            album: state.track_window.current_track.album,
            uri: state.track_window.current_track.uri,
            duration_ms: state.track_window.current_track.duration_ms,
          })
        }

        setProgress(state.position)
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress + 1000 >= state.track_window.current_track.duration_ms) {
              clearInterval(progressIntervalRef.current)
              return state.track_window.current_track.duration_ms
            }
            return prevProgress + 1000
          })
        }, 1000)
      })

      playerInstance.connect().then((success) => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!')
        } else {
          console.log('The Web Playback SDK could not connect to Spotify.')
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
      'BQA7Q3NgccHYyGZwExjCYF9bGICQ6B1T8uJQeBvJPlJ4CsY1zvj2svNeu4l63yP6prYrcZsdWTAzr1MBXx2HrsP8l25u4uIIuarNGvcwdNfKaR3tynBn5_fiOe0jaJcF9y_5qlzVNMoUE36HBOASzLdoXOT5KdFDxwW6gwwQPZHjD1I3N0vwQJPTEIUt-2h0jni86zbKI_c'

    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [track_uri] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        console.log('Track playing')
      } else {
        console.error('Failed to play track:', response.statusText)
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
      player.setVolume(newVolume).then(() => {
        console.log(`Volume set to ${newVolume}`)
      })
    }
  }

  const handleSeek = (e) => {
    if (!player || !currentTrackInfo) return
    const newPosition =
      (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * currentTrackInfo?.duration_ms
    player.seek(newPosition).then(() => {
      setProgress(newPosition)
      clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress + 1000 >= currentTrackInfo?.duration_ms) {
            clearInterval(progressIntervalRef.current)
            return currentTrackInfo?.duration_ms
          }
          return prevProgress + 1000
        })
      }, 1000)
    })
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
            <span>{formatTime(progress / 1000)}</span>
            <MusicLine
              progress={(progress / currentTrackInfo?.duration_ms) * 100}
              onClick={handleSeek}
            />
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
