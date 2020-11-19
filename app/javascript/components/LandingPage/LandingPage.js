import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Button, AddIcon, ContactGroupIcon, PlayIcon , Flex } from '@fluentui/react-northstar'

const LandingPage = () => {
  return (
    <>
      <Header align="center" content="Welcome to Fantasy Football Draft Simulator" description="Simulate, Create or Join a Draft" />
      <div>
        <Flex gap="gap.large" hAlign="center" vAlign="center">
          <Link to="/simulate">
            <Button icon={<PlayIcon />} size="largest" content="Simulate Draft" text />
          </Link>

          <Link to="/drafts/new">
            <Button icon={<AddIcon />} size="largest" content="Create a new Draft" text />
          </Link>

          <Link to="/drafts">
            <Button icon={<ContactGroupIcon />} size="largest" content="Join a Draft" text />
          </Link>
        </Flex>
      </div>
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default LandingPage