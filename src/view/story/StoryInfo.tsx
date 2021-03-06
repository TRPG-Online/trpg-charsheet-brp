import { css } from '@emotion/react'
import GrayCard from '../../components/GrayCard'

const StoryInfo: React.FC = () => {
  return (
    <GrayCard className="storyInfo">
      <StoryItem label="形象描述" />
      <StoryItem label="思想与信念" />
      <StoryItem label="重要之人" />
      <StoryItem label="意义非凡之地" />
    </GrayCard>
  )
}

export default StoryInfo

const StoryItem: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div
      css={css`
        span {
          display: block;
        }
      `}
    >
      <span>{label}</span>
      <textarea cols={30} rows={5} />
    </div>
  )
}
