let ClientID = 'c5c8ff44d8704e7f82739885df5490b9'
let ClientSecret = '510997254b1e42f2a82514aabd17b87a'
import toast from 'react-hot-toast'

export const getAccessToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(ClientID + ':' + ClientSecret),
    },
    body: 'grant_type=client_credentials',
  })

  if (!response.ok) {
    throw new toast.error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data.access_token
}

export const getAlbums = async (accessToken) => {
  const response = await fetch(
    'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?&offset=20&limit=10',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data.items
}

export const getTracks = async (accessToken) => {
  const response = await fetch(
    'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/top-tracks?country=TR',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data.tracks
}

export const getArtist = async (accessToken) => {
  const response = await fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data
}
