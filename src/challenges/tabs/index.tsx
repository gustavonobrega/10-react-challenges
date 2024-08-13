import { useState } from 'react'
import styles from './style.module.css'

const data = {
  tab1: { title: 'Tab 1', content: 'This is content for Tab 1' },
  tab2: { title: 'Tab 2', content: 'This is content for Tab 2' },
  tab3: { title: 'Tab 3', content: 'This is content for Tab 3' },
}

type SelectedTab = keyof typeof data

export function Tabs() {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>('tab1')

  function handleSelectTab(tab: SelectedTab) {
    if (tab === selectedTab) return

    setSelectedTab(tab)
  }

  return (
    <div className={styles.container}>

      <ul className={styles['nav-list']}>
        {Object.entries(data).map(([key, value]) => (
          <li
            key={key}
            onClick={() => handleSelectTab(key as SelectedTab)}
            className={styles['nav-item']}
            data-selected={selectedTab === key}
          >
            {value.title}
          </li>
        ))}
      </ul>


      <div className={styles.content}>
        <p>{data[selectedTab].content}</p>
      </div>
    </div>
  )
}
