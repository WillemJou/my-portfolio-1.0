import { useState, useRef } from 'react'
import { Fade } from '../utils/Fade'

interface Stacks {
  title: string
  id: number
  topics: string[]
  frameworks: string[]
  icon: string
}

type StackProps = {
  stack: Stacks | undefined
}

export function Stack({ stack }: StackProps) {
  const focusableRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const handleOpen = () => {
    setIsMounted(!isMounted)
  }
  const handleViewFocus = () => {
    if (!isMounted) {
      setTimeout(() => {
        focusableRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 100)
    }
  }
  return (
    <div
      tabIndex={0}
      key={stack?.id}
      className="stack stack-element pointer relative gap-2"
      onClick={() => {
        handleOpen(), handleViewFocus()
      }}>
      <h3
        className={`${
          isMounted
            ? 'title drawer-title title-open '
            : 'title drawer-title title-close '
        }`}>
        {stack?.title}
      </h3>
      <Fade fadeStyle="fade-stack" outStyle=" out-stack" visible={isMounted}>
        <div ref={focusableRef} className="drawer-container">
          <p className="stack-list">
            {stack?.topics.map((topic, index) => (
              <li
                className={topic === '' ? 'no-style-list' : 'style-list'}
                key={index}>
                {topic}
              </li>
            ))}
          </p>
          <p className="stack-list">
            {stack?.frameworks.map((framework, index) => (
              <li className="style-list" key={index}>
                {framework}
              </li>
            ))}
          </p>
        </div>
      </Fade>
      <div
        className={`${
          isMounted ? 'techno-icon_opened' : 'techno-icon_closed'
        }`}>
        <div
          className={`${
            stack?.title === 'JavaScript' ? 'bouncing-div' : 'rotate-div'
          }`}>
          <img
            className={`${
              stack?.title === 'JavaScript' ? 'js-anim-icon' : 'react-anim-icon'
            }`}
            src={stack?.icon}
          />
        </div>
      </div>
      <svg
        className={
          isMounted
            ? 'icon pointer menu-btn_opened'
            : 'icon pointer menu-btn_closed'
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024">
        <path d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"></path>
      </svg>
    </div>
  )
}
