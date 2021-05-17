import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { config } from '../config'
import I18n from '../../../I18n'
import PerfectScrollbar from 'perfect-scrollbar'
import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core'
import rust from 'highlight.js/lib/languages/rust'
import * as styles from './index.module.scss'
hljs.registerLanguage('rust', rust)

type Props = {
  selectedProduct: any
  className?: string
  id: string
}

const CodePanel: React.FC<Props> = (props) => {
  const { selectedProduct, className, id } = props

  useEffect(() => {
    hljs.initHighlighting.called = false
    hljs.initHighlighting()
  }, [selectedProduct])

  useEffect(() => {
    const perfectScrollbar = new PerfectScrollbar(`#${id}`)

    return () => {
      perfectScrollbar.destroy()
    }
  }, [id])

  return (
    <div className={className}>
      <div className={styles.link}>
        <a
          target='_blank'
          href={config[selectedProduct].link}
          className={styles.link} rel="noreferrer">
          <I18n en='Check on Github' zh='访问 Github 查看'></I18n>
        </a>
      </div>
      <div className={styles.line}></div>
      <div id={id} className={styles.code}>
        <pre>
          <code className='language-rust'>
            {config[selectedProduct].code.content}
          </code>
        </pre>
      </div>
      <p className={styles.description}>
        <I18n {...config[selectedProduct].text}></I18n>
      </p>
    </div>
  )
}

export default CodePanel
