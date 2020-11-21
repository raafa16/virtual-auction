import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Menu, tabListBehavior } from '@fluentui/react-northstar'
import DraftsTable from './DraftsTable'
import { MENU_ITEMS, TABLES } from '../../lib/Constants'

const Drafts = () => {
  const [drafts, setDrafts] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    axios.get('/api/v1/drafts.json')
    .then(response => {
      setDrafts(response.data)
      console.log(drafts)
    })
    .catch(response => console.log(response))
  }, [] )

  const renderDraftsTable = () => {
    if (Object.keys(drafts).length) {
      switch(Object.values(TABLES)[activeIndex]) {
        case TABLES.managed_drafts:
          return <DraftsTable drafts={drafts.managed_drafts} tableType={TABLES.managed_drafts} />

        case TABLES.joinable_drafts:
          return <DraftsTable drafts={drafts.joinable_drafts} tableType={TABLES.joinable_drafts}/>

        case TABLES.joined_drafts:
          return <DraftsTable drafts={drafts.joined_drafts} tableType={TABLES.joined_drafts}/>
      }
    }
  }

  return  (
    <>
      <Menu
        defaultActiveIndex={0}
        items={MENU_ITEMS}
        underlined
        primary
        accessibility={tabListBehavior}
        aria-label="Today's events"
        onActiveIndexChange={ (i,j) => setActiveIndex(j.activeIndex) }
      />
      {renderDraftsTable()}
    </>
  )
}

export default Drafts