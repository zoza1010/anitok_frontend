import style from './SectionWrapper.module.scss'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  title?: string
  children?: ReactNode
}

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <section className={`container ${style.body}`}>
        <div className={` ${style.container}`}>
            {title && <h2 className={style.title}>{title}</h2>}
            <div className={style.content}>
                {children}
            </div>
        </div>
    </section>
  )
}

export default SectionWrapper
