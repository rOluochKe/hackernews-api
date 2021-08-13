import React, { useEffect, useState } from 'react'
import Story from '../components/Story'
import { getStoryIds } from '../services/hnApi'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles'

const StoriesContainer = () => {
  const { count } = useInfiniteScroll()
  const [storyIds, setStoryids] = useState([])

  useEffect(() => {
    getStoryIds().then((data) => setStoryids(data))
  }, [])

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid='stories-container'>
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  )
}

export default StoriesContainer
