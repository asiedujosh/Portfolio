import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// the childFactory allows to change the transition of the leaving component
// https://github.com/reactjs/react-transition-group/issues/182
const childFactoryCreator = (props) => child => React.cloneElement(child, props)

export default ({ transition = 'slide', duration = 600, pageKey, children }) => (
  <TransitionGroup
    childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
  >
    <CSSTransition key={pageKey}>
      {/* you should wrap CSSTransition child in a div in case it could be null
      see https://github.com/reactjs/react-transition-group/issues/208 */}
      <div>{ children }</div>
    </CSSTransition>
  </TransitionGroup>
)

