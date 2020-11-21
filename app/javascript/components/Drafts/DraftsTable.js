import { Table, Button, Flex, MenuButton } from '@fluentui/react-northstar'
import {
  gridNestedBehavior,
  gridCellWithFocusableElementBehavior,
  gridCellMultipleFocusableBehavior,
} from '@fluentui/accessibility'
import React, {useEffect} from 'react'
import { MoreIcon } from '@fluentui/react-icons-northstar'
import { TABLES } from '../../lib/Constants'


import Search from './Search'

const header = {
  key: 'header',
  items: [
    {
      content: 'Name',
      key: 'name',
    },
    {
      content: 'Manager',
      key: 'manager',
    },
    {
      content: 'Email',
      key: 'email',
    },
    {
      content: 'Actions',
      key: 'actions',
    }
  ],
}

const actionables = (tableType, draft) => {
  switch(tableType) {
    case TABLES.managed_drafts:
      return {
        content: (
          <Flex gap="gap.smaller" vAlign="center">
            <Button content="Primary" primary  content="Edit" onClick={()=> console.log('edit')} />
            <Button content="Secondary" secondary content="Delete" onClick={()=> console.log('delete')}/>
          </Flex>
        ),
        accessibility: gridCellMultipleFocusableBehavior,
      }
    case TABLES.joinable_drafts:
      return {
        content: (
          <Flex gap="gap.smaller" vAlign="center">
            <Button content="Primary" primary  content="Join" onClick={()=> console.log('join')} />
          </Flex>
        ),
        accessibility: gridCellMultipleFocusableBehavior,
      }
    case TABLES.joined_drafts:
      return {
        content: (
          <Flex gap="gap.smaller" vAlign="center">
            <Button content="Primary" primary  content="Leave" onClick={()=> console.log('leave')} />
          </Flex>
        ),
        accessibility: gridCellMultipleFocusableBehavior,
      }
    }
}

const DraftsTable = ({drafts, tableType}) => {
  console.log(drafts.data)
  console.log(tableType)
  const rows = drafts.data.map( (draft, index) => {
    return {
      key: draft.id,
      items: [
        {
          content: draft.attributes.name,
          key: `${index}-1`,
          id: `name-${draft.id}`,
        },
        {
          content: draft.attributes.manager.username,
          key: `${index}-2`,
          id: `manager-name-${draft.id}`,
        },
        {
          content: draft.attributes.manager.email,
          key: `${index}-3`,
          id: `manager-email-${draft.id}`,
        },
        {
          key: `${index}-4`,
          ...actionables(tableType, draft),
        },
      ]
    }
  });


  return (
    <>
      <Search />
      <Table
        variables={{
          cellContentOverflow: 'none',
        }}
        header={header}
        rows={rows}
        aria-label="Nested navigation"
        accessibility={gridNestedBehavior}
      />
    </>
  )
}

export default DraftsTable
