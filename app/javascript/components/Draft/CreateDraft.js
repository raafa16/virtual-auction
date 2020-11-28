import React, {useState} from 'react'
import {CREATE_DRAFT_STEPS} from '../../lib/Constants'
import {
  Container,
  Header,
  Content,
  Footer,
  FlexboxGrid,
  Steps, 
  Button
} from 'rsuite'

const CreateDraft = () => {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    console.log('next')
    setStep(step + 1)
  }

  const prevStep = () => {
    console.log('prev')
    setStep(step - 1)
  }

  const renderContent = () => {
    switch(Object.values(CREATE_DRAFT_STEPS)[step]) {
      case CREATE_DRAFT_STEPS.draft_info:
        return (
          <span>
           draft_info
          </span>
        )
      case CREATE_DRAFT_STEPS.draft_settings:
        return (
          <span>
            draft_settings
          </span>
        )
      case CREATE_DRAFT_STEPS.review:
        return (
          <span>
            review
          </span>
        )
      case CREATE_DRAFT_STEPS.send_invite:
        return (
          <span>
            send_invite
          </span>
        )
      }
  }

  return (
    <>
      <Steps current={step}>
        <Steps.Item title="Finished" description="This is a description." />
        <Steps.Item title="In Progress" description="This is a description." />
        <Steps.Item title="Waiting" description="This is a description." />
        <Steps.Item title="Waiting" description="This is a description." />
      </Steps>

      <Container>
        <Content>
          {renderContent()}
        </Content>
        <Button color="orange" onClick={()=> prevStep()}>Back</Button>
        <Button color="red" onClick={()=> nextStep()}>Next</Button>
      </Container>
    </>
  )
}

export default CreateDraft