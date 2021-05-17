import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import Card from '../../Card'
import I18nRender from '../../I18nRender'
import React from 'react'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const Cooperative: React.FC<Props> = (props) => {
  const content = {
    en: <div>coming soon...</div>,
    zh: <div>即将来临...</div>
  }

  return (
    <Card
      type='wideNormal'
      cardHeaderClassName={styles.cardHeader}
      cardContentClassName={styles.cardContent}
      {...props}>
      <I18nRender {...content}></I18nRender>
    </Card>
  )
}

export default Cooperative
