import I18n, { I18nProps } from '../../I18n'
import React from 'react'
import classnames from 'classnames'
import * as styles from './index.module.scss'

type Props = {
  text?: I18nProps
  icon?: string
  textClassName?: string
  iconClassName?: string
  bgIndex?: number
}

const IconTextCard: React.FC<Props> = (props) => {
  const { text, icon, iconClassName, textClassName, bgIndex } = props
  return (
    <div className={styles.iconTextCard}>
      <div
        className={classnames([
          styles.icon,
          iconClassName,
          styles[`bg${bgIndex}`]
        ])}>
        {icon && <img src={icon} alt={icon} />}
      </div>
      <div className={classnames([styles.text, textClassName])}>
        <I18n {...text}></I18n>
      </div>
    </div>
  )
}

export default IconTextCard
