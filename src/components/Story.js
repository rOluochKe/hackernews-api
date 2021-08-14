/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { getStory } from '../services/hnApi'
import { mapTime } from '../mappers/mapTime'
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from '../styles/StoryStyles'

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({})

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data))
  }, [])

  return story && story.url ? (
    <StoryWrapper data-testid='story'>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryMeta>
        <span data-testid='story-by'>
          <StoryMetaElement color='#000'>By: {story.by}</StoryMetaElement>
        </span>
        <span data-testid='story-time'>
          <StoryMetaElement color='#000'>
            Posted: {mapTime(story.time)}
          </StoryMetaElement>
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null
}
