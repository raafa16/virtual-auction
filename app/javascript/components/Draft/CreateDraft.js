import React, {useState} from 'react'
import {DRAFT_CREATION_STEPS} from '../../lib/Constants'
import {
  Container,
  Header,
  Content,
  Footer,
  FlexboxGrid,
  Steps,
  Button
} from 'rsuite'
import DraftName from './DraftCreationWizard/DraftName'
import DraftReviewAndConfirmation from './DraftCreationWizard/DraftReviewAndCOnfirmation'
import DraftSettings from './DraftCreationWizard/DraftSettings'
import SendInvites from './DraftCreationWizard/SendInvites'
import TeamName from './DraftCreationWizard/TeamName'

const CreateDraft = () => {
  const [step, setStep] = useState(0)
  const [draftName, setDraftName] = useState(null)
  const [draftSettings, setDraftSettings] = useState({
    startTime: '',
    numberOfRounds: 2,
    draftType: 'snake'
  })
  const [teamName, setTeamName] = useState(null)
  const [invites, setInvites] = useState([])

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 0) setStep(step - 1)
  }

  const onConfirmation = () => {
    // hit endpoint to create draft
  }

  const sendInvites = () => {
    // hit endpoint to send invites
  }

  const generateLink = () => {
    // hit endpoint to generate invite link
  }

  const renderContent = () => {
    switch(Object.values(DRAFT_CREATION_STEPS)[step]) {
      case DRAFT_CREATION_STEPS.draft_name:
        return <DraftName
                  setDraftName={setDraftName}
                  nextStep={nextStep}
                />
      case DRAFT_CREATION_STEPS.team_name:
        return <TeamName
                  setTeamName={setTeamName}
                  prevStep={prevStep}
                  nextStep={nextStep}
                />
      case DRAFT_CREATION_STEPS.draft_settings:
        return <DraftSettings
                  setDraftSettings={setDraftSettings}
                  prevStep={prevStep}
                  nextStep={nextStep}
                />
      case DRAFT_CREATION_STEPS.review_and_confirm:
        return <DraftReviewAndConfirmation
                  prevStep={prevStep}
                  nextStep={nextStep}
                  onConfirmation={onConfirmation}
                />
      case DRAFT_CREATION_STEPS.send_invites:
        return <SendInvites
                  setInvites={setInvites}
                  sendInvites={sendInvites}
                  generateLink={generateLink}
                />
      }
  }

  return (
    <>
      <Steps current={step}>
        <Steps.Item title="Draft Name" description="Enter a name for your draft." />
        <Steps.Item title="Enter your Team" description="Enter your team in your newly created draft." />
        <Steps.Item title="Draft Settings" description="Enter your draft settings. This can be updated later." />
        <Steps.Item title="Review and Confirm" description="Review and confirm creation of your new draft." />
        <Steps.Item title="Send Invitations" description="Send invites to join your draft." />
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