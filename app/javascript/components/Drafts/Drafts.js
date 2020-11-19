import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Drafts = () => {
  const [managed_drafts, setManagedDrafts] = useState([])
  const [joinableDrafts, setJoinableDrafts] = useState([])
  const [joinedDrafts, setJoinedDrafts] = useState([])

  useEffect(() => {
    axios.get('/api/v1/drafts.json')
    .then(response => console.log(response))
    .catch(response => console.log(response))
  }, [managed_drafts.length] || [joinableDrafts.length] || [joinedDrafts.length] )
  return <div>Drafts</div>
}

export default Drafts