import React, { useState, useEffect } from 'react'
import { TABLES } from '../../lib/Constants'
import { Table, Button } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

const DraftsTable = ({drafts, tableType}) => {
  const [tableData, setTableData] = useState([])
  const [tableLoading, setTableLoading] = useState(true)


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
    setTableLoading(false)
  }, [drafts] )

  return (
    <Table
      height={500}
      data={tableData}
      onRowClick={data => {
        console.log(data);
      }}
      loading={tableLoading}
    >
      <Column flexGrow={2} fixed verticalAlign="middle">
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column flexGrow={1} fixed verticalAlign="middle">
        <HeaderCell>Manager</HeaderCell>
        <Cell dataKey="manager" />
      </Column>

      <Column flexGrow={2} fixed verticalAlign="middle">
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column flexGrow={2} align="center" fixed="right" verticalAlign="middle">
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
                    <Button color="orange" onClick={handleAction}>Edit</Button>
                    <Button color="red" onClick={handleAction}>Delete</Button>
                  </span>
                )
              case TABLES.joinable_drafts:
                return (
                  <span>
                    <Button color="green" onClick={handleAction}>Join</Button>
                  </span>
                )
              case TABLES.joined_drafts:
                return (
                  <span>
                    <Button color="red" onClick={handleAction}>Leave</Button>
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
