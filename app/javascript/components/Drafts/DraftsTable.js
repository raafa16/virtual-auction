import React, { useState, useEffect } from 'react'
import { TABLES, DRAFTS_TABLE_HEADERS } from '../../lib/Constants'
import { Header, Table } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

// const actionables = (tableType, draft) => {
//   switch(tableType) {
//     case TABLES.managed_drafts:
//       return {
//         content: (
//           <Flex gap="gap.smaller" vAlign="center">
//             <Button content="Primary" primary  content="Edit" onClick={()=> console.log('edit')} />
//             <Button content="Secondary" secondary content="Delete" onClick={()=> console.log('delete')}/>
//           </Flex>
//         ),
//         accessibility: gridCellMultipleFocusableBehavior,
//       }
//     case TABLES.joinable_drafts:
//       return {
//         content: (
//           <Flex gap="gap.smaller" vAlign="center">
//             <Button content="Primary" primary  content="Join" onClick={()=> console.log('join')} />
//           </Flex>
//         ),
//         accessibility: gridCellMultipleFocusableBehavior,
//       }
//     case TABLES.joined_drafts:
//       return {
//         content: (
//           <Flex gap="gap.smaller" vAlign="center">
//             <Button content="Primary" primary  content="Leave" onClick={()=> console.log('leave')} />
//           </Flex>
//         ),
//         accessibility: gridCellMultipleFocusableBehavior,
//       }
//     }
// }

const DraftsTable = ({drafts, tableType}) => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    let data = drafts.data.map( (draft, index) => {
      return {
        id: draft.attributes.id,
        name: draft.attributes.name,
        manager: draft.attributes.manager.username,
        email: draft.attributes.manager.email
      }
    });
    setTableData(data)
  }, [drafts] )

  return (
    <Table
      height={400}
      data={tableData}
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Column width={130} align="center" fixed>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={130} fixed>
        <HeaderCell>Manager</HeaderCell>
        <Cell dataKey="manager" />
      </Column>

      <Column width={130}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column width={120} fixed="right">
        <HeaderCell>Action(s)</HeaderCell>
        <Cell dataKey="id">
          {rowData => {
            function handleAction() {
              alert(`id:${rowData.id}`);
            }
            return (
              <span>
                <a onClick={handleAction}> Edit </a> |{' '}
                <a onClick={handleAction}> Remove </a>
              </span>
            );
          }}
        </Cell>
      </Column>
    </Table>
  )
}

export default DraftsTable
