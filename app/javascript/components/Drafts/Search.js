import React from 'react'
import { Input } from '@fluentui/react-northstar'
import { SearchIcon } from '@fluentui/react-icons-northstar'

const Search = () => (
  <Input icon={<SearchIcon />} placeholder="Search..." iconPosition="start" />
)

export default Search
