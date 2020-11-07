import React, { lazy, useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CInput,
  CLabel,
  CFormGroup,
  CSelect,
  CTextarea,
  CInputFile,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
  CTabContent,
  CTabPane,
  CTabs,
  CNav,
  CNavLink,
  CLink
} from '@coreui/react'

import { useHistory } from 'react-router-dom';

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const ongoingProjects = [
  { id: 1, name: 'CS3240 Design Project', projectType: 'Module Project', projectIdentifier: 'CS3240', vacancy: '4/5', status: 'OPEN' },
  { id: 2, name: 'NOC Startup. We are recruiting!', projectType: 'Public Project', projectIdentifier: 'Tech', vacancy: '5/5', status: 'ONGOING' },
  { id: 3, name: 'IS4103 Capstone Project', projectType: 'Module Project', projectIdentifier: 'IS4103', vacancy: '4/4', status: 'ONGOING' },
  { id: 4, name: 'IS3106 Front end development', projectType: 'Module Project', projectIdentifier: 'IS3106', vacancy: '4/5', status: 'OPEN' },
]

let inbox = [
  { id: 1, user: 'avatars/2.jpg', name: 'Tom Cruise', daysAgo: '3', message: 'Tom Cruise has invited you to join his project: IS4103 Capstone Project' },
  { id: 2, user: 'avatars/3.jpg', name: 'Matt Damon', daysAgo: '3', message: 'Matt Damon has invited you to join his project: CS3240 Design Project' },
  { id: 3, user: 'avatars/4.jpg', name: 'Sam Smith', daysAgo: '6', message: 'Sam Smith has invited you to join his project: IS3106 Final Project' },
]

let outbox = [
  { id: 1, user: 'avatars/2.jpg', name: 'Tom Cruise', daysAgo: '3', message: 'You requested to join Tom Cruise’s project: IS4444 Engineering Project', status: 'PENDING' },
  { id: 2, user: 'avatars/3.jpg', name: 'Matt Damon', daysAgo: '3', message: 'You requested to join Matt Damon’s project: IS3333 Design Project', status: 'PENDING' },
  { id: 3, user: 'avatars/4.jpg', name: 'Sam Smith', daysAgo: '6', message: 'You requested to join Sam Smith’s project: CS2102 Database Project', status: 'SUCCESS' },
]

const getBadge = status => {
  switch (status) {
    case 'OPEN': return 'success'
    case 'SUCCESS': return 'success'
    case 'Inactive': return 'secondary'
    case 'ONGOING': return 'warning'
    case 'PENDING': return 'warning'
    case 'CLOSED': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name', 'projectType', 'projectIdentifier', 'vacancy', 'status']
const inboxFields = ['user', 'name', 'message', 'actions']
const outboxFields = ['user', 'name', 'message', 'status']
const Dashboard = () => {
  let counter = 4;
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [rejectRequestModal, setRejectRequestModal] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectType, setProjectType] = useState('Module Project');
  const [projectIdentifier, setProjectIdentifier] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [skills, setSkills] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [selectedRequestId, setSelectedRequestId] = useState(-1);

  const handleProjectTitleChange = (event) => {
    setProjectTitle(event.target.value);
  }

  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
  }

  const handleProjectIdentifierChange = (event) => {
    setProjectIdentifier(event.target.value);
  }

  const handleTeamSizeChange = (event) => {
    setTeamSize(event.target.value);
  }

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  }

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const createProject = () => {
    console.log('creating new project');
    const newProject = {
      id: counter,
      name: projectTitle,
      projectType: projectType,
      projectIdentifier: projectIdentifier,
      vacancy: '1/' + teamSize,
      status: 'OPEN',
      description: description
    }
    ongoingProjects.unshift(newProject);
    counter++;
    setCreateProjectModal(!createProjectModal);
    setToastMessage('Your project has been created.');
    addToast();
  }

  const acceptRequest = (id) => {
    inbox = inbox.filter(item => item.id !== id);
    setToastMessage('You have accepted the project invitation successfully.');
    addToast();
  }

  const prepareReject = (id) => {
    setSelectedRequestId(id);
    setRejectRequestModal(!rejectRequestModal);
  }

  const rejectRequest = () => {
    let id = selectedRequestId;
    inbox = inbox.filter(item => item.id !== id);
    setToastMessage('You have rejected the project invitation successfully.');
    setRejectRequestModal(!rejectRequestModal);
    addToast();
  }

  const [toasts, setToasts] = useState([
  ])

  const [position] = useState('top-right')
  const [autohide] = useState(true)
  const [autohideValue] = useState(5000)
  const [closeButton] = useState(true)
  const [fade] = useState(true)
  const [toastMessage, setToastMessage] = useState('');

  const addToast = () => {
    setToasts([
      ...toasts,
      { position, autohide: autohide && autohideValue, closeButton, fade }
    ])
  }
  const toasters = (() => {
    return toasts.reduce((toasters, toast) => {
      toasters[toast.position] = toasters[toast.position] || []
      toasters[toast.position].push(toast)
      return toasters
    }, {})
  })()

  const history = useHistory()

  const pageChangeProject = () => {
    history.push(`/project/:123`)
  }

  const pageChangeMyProject = () => {
    history.push(`/my_project/:123`)
  }

  return (
    <>
      <WidgetsDropdown />
      {Object.keys(toasters).map((toasterKey) => (
        <CToaster
          position={toasterKey}
          key={'toaster' + toasterKey}
        >
          {
            toasters[toasterKey].map((toast, key) => {
              return (
                <CToast
                  key={'toast' + key}
                  show={true}
                  autohide={toast.autohide}
                  fade={toast.fade}
                >
                  <CToastHeader closeButton={toast.closeButton} style={{ backgroundColor: "green", color: "white" }}>
                    System Notification
                   </CToastHeader>
                  <CToastBody>
                    {toastMessage}
                  </CToastBody>
                </CToast>
              )
            })
          }
        </CToaster>
      ))}
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol col="11" sm="8" md="8" xl="10">
              <b>Ongoing projects</b>

            </CCol>
            <CCol col="1" sm="4" md="4" xl="2">
              <CButton block color="info" onClick={() => setCreateProjectModal(!createProjectModal)}>Create New Project</CButton>

            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={ongoingProjects}
            fields={fields}
            striped
            itemsPerPage={5}
            pagination
            scopedSlots={{
              'name':
                (item) => (
                  <td>
                    <CLink onClick={pageChangeMyProject}>{item.name}</CLink>
                  </td>
                ),
              'status':
                (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )

            }}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>
          <b>Inbox</b>
        </CCardHeader>
        <CCardBody>
          <CTabs>
            <CNav variant="tabs">
              <CNavLink>
                Received
              </CNavLink>
              <CNavLink>
                Sent
              </CNavLink>
            </CNav>
            <CTabContent>
              <CTabPane>
                <CDataTable
                  items={inbox}
                  fields={inboxFields}
                  striped
                  itemsPerPage={5}
                  pagination
                  scopedSlots={{
                    'user':
                      (item) => (
                        <td className="text-center">
                          <div className="c-avatar">
                            <img src={item.user} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                            <span className="c-avatar-status bg-danger"></span>
                          </div>
                        </td>
                      ),
                    'actions':
                      (item) => (
                        <td>
                          <CRow>
                            <CCol sm="12" md="12" l="4" xl="4">
                              <CButton block color="info" onClick={pageChangeProject}>View Project</CButton>
                            </CCol>
                            <CCol sm="12" md="12" l="4" xl="4">
                              <CButton block color="success" onClick={() => { acceptRequest(item.id) }}>Accept</CButton>
                            </CCol>
                            <CCol sm="12" md="12" l="4" xl="4">
                              <CButton block color="danger" onClick={() => { prepareReject(item.id) }}>Reject</CButton>
                            </CCol>
                          </CRow>
                        </td>

                      )
                  }}
                />
              </CTabPane>
              <CTabPane>
                <CDataTable
                  items={outbox}
                  fields={outboxFields}
                  striped
                  itemsPerPage={5}
                  pagination
                  scopedSlots={{
                    'user':
                      (item) => (
                        <td className="text-center">
                          <div className="c-avatar">
                            <img src={item.user} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                            <span className="c-avatar-status bg-danger"></span>
                          </div>
                        </td>
                      ),
                    'status':
                      (item) => (
                        <td>
                          <CBadge color={getBadge(item.status)}>
                            {item.status}
                          </CBadge>
                        </td>
                      )
                  }}
                />
              </CTabPane>
            </CTabContent>
          </CTabs>

        </CCardBody>
      </CCard>

      <CModal
        show={rejectRequestModal}
        onClose={() => setRejectRequestModal(!rejectRequestModal)}
        size="sm">
        <CModalHeader closeButton>
          <CModalTitle>Reject Request</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Are you sure you want to reject this request?</p>
          <p>This action is irreversible.</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => rejectRequest(selectedRequestId)}>Reject</CButton>
          <CButton color="secondary" onClick={() => setRejectRequestModal(!rejectRequestModal)}>Cancel</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={createProjectModal}
        onClose={() => setCreateProjectModal(!createProjectModal)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle><b>Create New Project</b></CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormGroup>
              <CLabel>Project Title</CLabel>
              <CInput type="text" placeholder="Best project 2020" autoComplete="projectTitle" onChange={handleProjectTitleChange} />
            </CFormGroup>

            <CFormGroup>
              <CLabel>Project Type</CLabel>
              <CSelect label='Type' onChange={handleProjectTypeChange}>
                <option>Module Project</option>
                <option>Public Project</option>
              </CSelect>
            </CFormGroup>


            <CRow>
              <CCol sm='6' md='6'>
                <CFormGroup>
                  <CLabel>Project Identifier</CLabel>
                  <CInput type="text" placeholder="CS3240" autoComplete="projectId" onChange={handleProjectIdentifierChange} />
                </CFormGroup>
              </CCol>
              <CCol sm='6' md='6'>
                <CFormGroup>
                  <CLabel>Team Size</CLabel>
                  <CInput type="number" placeholder="5" autoComplete="teamSize" onChange={handleTeamSizeChange} />
                </CFormGroup>
              </CCol>
            </CRow>
            <CFormGroup>
              <CLabel>Skill Requirement</CLabel>
              <CTextarea placeholder="JavaScript, Java, Python" onChange={handleSkillsChange}></CTextarea>
            </CFormGroup>

            <CFormGroup>
              <CLabel>Application Deadline</CLabel>
              <CInput type="date" id="date-input" name="date-input" placeholder="date" onChange={handleDeadlineChange} />
            </CFormGroup>

            <CFormGroup>
              <CLabel>Description</CLabel>
              <CTextarea placeholder="wow such interesting description" onChange={handleDescriptionChange}></CTextarea>
            </CFormGroup>

            <CFormGroup>
              <CLabel>Project Display Picture (optional)</CLabel>
              <CInputFile></CInputFile>
            </CFormGroup>

          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={createProject}>Submit</CButton>
          <CButton color="secondary" onClick={() => setCreateProjectModal(!createProjectModal)}>Cancel</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Dashboard
