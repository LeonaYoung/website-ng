import { useLocale } from '../../../hooks/useLocale'
import RandomBlock from '../../RandomBlock'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

export type CardHeaderProps = {
  index?: number
  name?: { [key: string]: string[] }
  className?: string
  type?: 'normal' | 'small' | 'vertical' | 'wideNormal'
}

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { index, name, className, type = 'normal' } = props
  const locale = useLocale()

  return (
    <div className={classnames([styles.cardHeader, styles[type], className])}>
      <div
        className={styles.target}
        // id for link jump
        id={'title_' + name[locale].join('_')}></div>
      <div className={styles.top}>
        {/* 01_ */}
        <div>0{index}_</div>
        <div className={styles.randomBlock}>
          <RandomBlock></RandomBlock>
        </div>
      </div>
      <div className={styles.name}>
        {name[locale].map((str) => {
          return <div key={str}>{str}</div>
        })}
      </div>
    </div>
  )
}

export default CardHeader
