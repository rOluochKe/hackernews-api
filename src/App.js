import React, { useEffect, useState } from 'react'
import { getStoryIds } from './services/hnApi'

const App = () => {
  const [storyIds, setStoryids] = useState([])

  useEffect(() => {
    getStoryIds().then((data) => setStoryids(data))
  }, [])

  return <p>{JSON.stringify(storyIds)}</p>
}

export default App
