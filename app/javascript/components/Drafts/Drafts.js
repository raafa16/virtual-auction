import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DraftsTable from './DraftsTable'
import { MENU_ITEMS, TABLES } from '../../lib/Constants'

import ResponsiveNav from '@rsuite/responsive-nav'

const Drafts = () => {
  const [drafts, setDrafts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeKey, setActiveKey] = useState('managed_drafts');

  useEffect(() => {
    axios.get('/api/v1/drafts.json')
    .then(response => {
      setDrafts(response.data)
      setLoading(false)
    })
    .catch(response => console.log(response))
  }, [] )

  const renderDraftsTable = () => {
    if (!loading) {
      switch(activeKey) {
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
      <div style={{ width: '100%', border: '1px solid #ddd', padding: 10 }}>
        <ResponsiveNav
          activeKey={activeKey}
          onSelect={setActiveKey}
          appearance="tabs"
        >
          {MENU_ITEMS.map(item => (
            <ResponsiveNav.Item key={item.eventKey} eventKey={item.eventKey}>
              {item.label}
            </ResponsiveNav.Item>
          ))}
        </ResponsiveNav>
      </div>
      {renderDraftsTable()}
    </>
  )
}

export default Drafts