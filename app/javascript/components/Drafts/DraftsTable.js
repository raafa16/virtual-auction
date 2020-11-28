import React, { useState, useEffect } from 'react'
import { TABLES } from '../../lib/Constants'
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

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
      <Column flexGrow={2} fixed>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column flexGrow={1} fixed>
        <HeaderCell>Manager</HeaderCell>
        <Cell dataKey="manager" />
      </Column>

      <Column flexGrow={2} fixed>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column flexGrow={2} align="center" fixed="right">
        <HeaderCell>Action(s)</HeaderCell>
        <Cell dataKey="id">
          {rowData => {
            function handleAction() {
              alert(`id:${rowData.id}`);
            }
            switch(tableType) {
              case TABLES.managed_drafts:
                return (
                  <span>
                    <a onClick={handleAction}> Edit </a> |{' '}
                    <a onClick={handleAction}> Delete </a>
                  </span>
                )
              case TABLES.joinable_drafts:
                return (
                  <span>
                    <a onClick={handleAction}> Join </a>
                  </span>
                )
              case TABLES.joined_drafts:
                return (
                  <span>
                    <a onClick={handleAction}> Leave </a>
                  </span>
                )
              }
          }}
        </Cell>
      </Column>
    </Table>
  )
}

export default DraftsTable
