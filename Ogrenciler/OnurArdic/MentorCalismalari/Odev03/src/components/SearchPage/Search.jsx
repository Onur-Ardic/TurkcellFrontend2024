import { useContext, useEffect, useState } from 'react'
import { Icon } from '../HomePage/Navbar/styled'
import {
  Input,
  InputContainer,
  ResultImage,
  ResultItem,
  ResultItems,
  ResultsContainer,
  ResultSection,
  ResultText,
  SearchWrapper,
  SectionTitle,
} from './styled'
import { MainContext } from '../../Context/Context'

const ACCESS_TOKEN =
  'BQCJElVhUAxoLXwM_EmmKf5zLvEeYOdma2OoofcOoBu8Usqb8aEaWdPJN6soKarOdOZtz1qFRkS-sni2Oa1SH7yWa0tpImpIlZN8ba3W5u4KaWk5D0Q'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const { setCurrentTrackInfo } = useContext(MainContext)

  const getSearchMusic = async () => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          searchQuery,
        )}&type=album,track,artist`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        },
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setSearchResults(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (searchQuery) {
      getSearchMusic()
    }
  }, [searchQuery])

  const handleTrack = (track) => {
    setCurrentTrackInfo({
      uri: track.uri,
      name: track.name,
      artists: track.artists.map((artist) => artist.name).join(', '),
      duration_ms: track.duration_ms,
      album: track.album,
    })
  }

  return (
    <SearchWrapper>
      <InputContainer>
        <Icon className="bi bi-search" />
        <Input
          type="text"
          placeholder="Ne çalmak istiyorsun?"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
        />
      </InputContainer>

      {searchResults && (
        <ResultsContainer>
          {searchResults.tracks && (
            <ResultSection>
              <SectionTitle>Şarkılar</SectionTitle>
              <ResultItems onc>
                {searchResults.tracks.items.map((track) => (
                  <ResultItem
                    key={track.id}
                    onClick={() => {
                      handleTrack(track)
                    }}
                  >
                    <ResultImage src={track.album.images[0].url} alt={track.name} />
                    <ResultText>{track.name}</ResultText>
                    <ResultText>{track.artists[0].name}</ResultText>
                  </ResultItem>
                ))}
              </ResultItems>
            </ResultSection>
          )}
          {searchResults.albums && (
            <ResultSection>
              <SectionTitle>Albümler</SectionTitle>
              <ResultItems>
                {searchResults.albums.items.map((album) => (
                  <ResultItem key={album.id}>
                    <ResultImage src={album.images[0].url} alt={album.name} />
                    <ResultText>{album.name}</ResultText>
                    <ResultText>{album.artists[0].name}</ResultText>
                  </ResultItem>
                ))}
              </ResultItems>
            </ResultSection>
          )}

          {searchResults.artists && (
            <ResultSection>
              <SectionTitle>Sanatçılar</SectionTitle>
              <ResultItems>
                {searchResults.artists.items.map((artist) => (
                  <ResultItem key={artist.id}>
                    <ResultImage
                      src={artist.images.length ? artist.images[0].url : 'default_artist_image_url'}
                      alt={artist.name}
                    />
                    <ResultText>{artist.name}</ResultText>
                  </ResultItem>
                ))}
              </ResultItems>
            </ResultSection>
          )}
        </ResultsContainer>
      )}
    </SearchWrapper>
  )
}

export default Search
