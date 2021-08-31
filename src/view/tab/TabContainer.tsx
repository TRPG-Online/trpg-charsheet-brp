import { observer } from 'mobx-react'
import { createElement, lazy, Suspense, useContext } from 'react'
import { UIState } from '../App'
import { TabName } from './TabBar'

const pages = {
  baseInfo: lazy(() => import('../baseInfo/BaseInfo')),
} as {
  [k in TabName]: React.LazyExoticComponent<any>
}

interface TabProps {
  label: TabName
}
const TabContainer: React.FC = observer(() => {
  const state = useContext(UIState)
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {createElement(pages[state.tab]) ?? <h2>{state.tab} is not found</h2>}
    </Suspense>
  )
})

export default TabContainer