import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Header,
  Content,
  Footer,
  FlexboxGrid
} from 'rsuite';

const LandingPage = () => {
  return (
    <Container>
      <Header>Welcome to Fantasy Football Draft Simulator</Header>
      <Content>
        <div>
          <FlexboxGrid justify="space-around">
            <Link to="/simulate">
              <FlexboxGrid.Item colspan={8}>colspan={8}</FlexboxGrid.Item>
            </Link>
            <Link to="/drafts/create">
              <FlexboxGrid.Item colspan={8}>colspan={8}</FlexboxGrid.Item>
            </Link>
            <Link to="/drafts">
              <FlexboxGrid.Item colspan={8}>colspan={8}</FlexboxGrid.Item>
            </Link>
          </FlexboxGrid>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Container>
  )
}

export default LandingPage