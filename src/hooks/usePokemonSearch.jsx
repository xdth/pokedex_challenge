import { useEffect, useState } from 'react'
import axios from 'axios'
import api from "../services/api";


export default function usePokemonSearch(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [hasMore, setHasMore] = useState(false)


  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel;
    const limit = 10;
    const offset = (pageNumber - 1)*limit;

    api.get(`pokemon`, {
      params: { offset: offset, limit: limit },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setPokemons(prevPokemons => {
        return [...new Set([...prevPokemons, ...res.data.results.map(b => b)])]
      })
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, pokemons, hasMore }
}