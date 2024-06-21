import { useState, useEffect, useContext } from 'react'
import { AlbumsContent, Flexible } from '../Main/styled'
import { CustomImage, Icon } from '../Navbar/styled'
import { ButtonWrapper, MusicLine, MusicName, PlayerButton, PlayerWrapper } from './styled'
import { MainContext } from '../../../Context/Context'

const PlayerWrap = () => {
  const [player, setPlayer] = useState(null)
  const [isPaused, setIsPaused] = useState(true)
  const [deviceId, setDeviceId] = useState(null)
  const [progress, setProgress] = useState(0)
  const { currentTrackInfo, setCurrentTrackInfo } = useContext(MainContext)

  useEffect(() => {
    const token =
      'BQDVmxO_HID-5o3_MRLcQekhYumaZmPmZnO2-cC_QQE_a8yJ9eyDDpZrAtOvqc1HnWkbApo1P4zcT3ylQtWwad5y1hCD_BetKaNquihGiJDa_IN5i-Jgw_wc2b1-FU7OroqxE2KcHVIsCbLNlUu9rKjsgYftiXsGCg1-SAIQZEk2YkZJ4CfnxxE2uvB5Ouwgvyh7zPM_P-s'

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
          })
        }

        setProgress(state.position)
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
      'BQDVmxO_HID-5o3_MRLcQekhYumaZmPmZnO2-cC_QQE_a8yJ9eyDDpZrAtOvqc1HnWkbApo1P4zcT3ylQtWwad5y1hCD_BetKaNquihGiJDa_IN5i-Jgw_wc2b1-FU7OroqxE2KcHVIsCbLNlUu9rKjsgYftiXsGCg1-SAIQZEk2YkZJ4CfnxxE2uvB5Ouwgvyh7zPM_P-s'

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

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <>
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
          <Flexible display={'flex'} justifyContent={'center'}>
            <PlayerButton onClick={handlePreviousTrack}>
              <Icon className="bi bi-caret-left-fill" fontSize={'20px'} color={'#121212'} />
            </PlayerButton>

            <PlayerButton onClick={handlePlayPause}>
              <Icon
                className={isPaused ? 'bi bi-play-fill' : 'bi bi-pause-fill'}
                fontSize={'20px'}
                color={'#121212'}
              />
            </PlayerButton>

            <PlayerButton onClick={handleNextTrack}>
              <Icon className="bi bi-caret-right-fill" fontSize={'20px'} color={'#121212'} />
            </PlayerButton>
          </Flexible>
          <div className="wrap">
            <Flexible display={'flex'} gap={'15px'}>
              <span>{formatTime(progress)}</span>
              <MusicLine />
              <span>{formatTime(currentTrackInfo?.duration_ms / 1000)}</span>
            </Flexible>
          </div>
        </ButtonWrapper>
      </PlayerWrapper>
    </>
  )
}

export default PlayerWrap
