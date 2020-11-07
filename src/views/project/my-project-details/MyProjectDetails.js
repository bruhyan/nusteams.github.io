import React, { lazy, Component, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CDataTable,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CInputFile,
  CTextarea,
  CInputCheckbox,
  CFade,
} from '@coreui/react'
import Rating from '@material-ui/lab/Rating';

import CIcon from '@coreui/icons-react'

let inbox = [
  { id: 4, user: 'avatars/2.jpg', name: 'Tom Cruise', daysAgo: '3', message: 'Tom Cruise has invited you to join his project: IS4103 Capstone Project' },
  { id: 5, user: 'avatars/3.jpg', name: 'Matt Damon', daysAgo: '3', message: 'Matt Damon has invited you to join his project: CS3240 Design Project' },
  { id: 6, user: 'avatars/4.jpg', name: 'Sam Smith', daysAgo: '6', message: 'Sam Smith has invited you to join his project: IS3106 Final Project' },
]


const MyProjectDetails = () => {

  // const fields = ['name', 'projectType', 'projectIdentifier', 'vacancy', 'status']
  const inboxFields = ['user', 'name', 'message', 'actions']
  const [value, setValue] = useState(2);

  const [editProject, setEditProject] = useState(false)
  const [endProject, setEndProject] = useState(false)
  const [startProject, setStartProject] = useState(false)
  const [achievement, setAchievement] = useState(false)
  const [flag, setFlag] = useState(false)
  const [buttonColor, setButtonColor] = useState(["info", "danger", "secondary", "success"])
  const [feedback, setFeedback] = useState(false)
  const [post, setPost] = useState(false)
  const [postTitle, setPostTitle] = useState(false)
  const [postDescription, setPostDescription] = useState(false)
  const [postPhoto, setPostPhoto] = useState(false)
  const [showCard, setShowCard] = useState(false)


  const [projectTitle, setProjectTitle] = useState("CS3203 Software Engineering Project")
  const [projectType, setProjectType] = useState('Module Project');
  const [projectIdentifier, setProjectIdentifier] = useState('CS3203');
  const [vacancy, setVacancy] = useState('4/5');
  const [status, setStatus] = useState("OPEN");
  const [skills, setSkills] = useState("JavaScript, Java, Python");
  const [deadline, setDeadline] = useState("2020-11-30");
  const [description, setDescription] = useState('Hi Guys, this is team Software Engineering Master from CS3203.');
  const [rejectRequestModal, setRejectRequestModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(-1);
  const [toasts, setToasts] = useState([
  ])

  const [position] = useState('top-right')
  const [autohide] = useState(true)
  const [autohideValue] = useState(5000)
  const [closeButton] = useState(true)
  const [fade] = useState(true)
  const [toastMessage, setToastMessage] = useState('');

  const history = useHistory()

  const pageChange = () => {
    history.push(`/user-portfolio`)
  }

  const getBadge = (status) => {
    switch (status) {
      case "CLOSED":
        return "danger";
      case "ONGOING":
        return "warning";
      case "OPEN":
        return "success";
      default:
        return "secondary";
    }
  };

  const handleProjectTitleChange = (event) => {
    setProjectTitle(event.target.value);
  }

  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
  }

  const handleProjectIdentifierChange = (event) => {
    setProjectIdentifier(event.target.value);
  }

  const handleVacancyChange = (event) => {
    setVacancy(event.target.value);
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

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  }

  const handlePostDescriptionChange = (event) => {
    setPostDescription(event.target.value);
  }

  const handlePostPhotoChange = (event) => {
    setPostPhoto(event.target.value);
  }

  const achievementModal = () => {
    setEndProject(!endProject)
    setAchievement(!achievement)
    setStatus("CLOSED")
    setFlag(true)
    setButtonColor(["secondary", "secondary", "success"])
  }

  const startProj = () => {
    setStatus("ONGOING")
    setStartProject(!startProject)
    setToastMessage('Project is started successfully!');
    addToast();
  }

  const leaveFeedback = () => {
    setFeedback(!feedback)
    setToastMessage('Feedback is sent successfully!');
    addToast();
  }

  const updatePost = () => {
    setPost(!post)
    setShowCard(true)
  }

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
  const acceptRequest = (id) => {
    inbox = inbox.filter(item => item.id !== id);
    setToastMessage('You have accepted the project invitation successfully.');
    addToast();
  }

  return (
    <>
      {/* <WidgetsDropdown /> */}
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

      <CCard>

        <CCardBody>
          <CRow>
            <CCol sm='12' md="5">
              <div className="custome-tag">
                <img
                  src="avatars/my_proj.jpg"
                  alt="project cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "1rem",
                  }}
                />
                <br />
                <CRow>
                  <CCol col="6">
                    <CButton variant="outline" block color={buttonColor[0]} disabled={flag} onClick={() => setEditProject(!editProject)}>
                      Edit Project
                                </CButton>
                  </CCol>
                  <CCol col="6">
                    {
                      status === 'ONGOING' ?
                        <CButton variant="outline" block color={buttonColor[1]} disabled={flag} onClick={() => setEndProject(!endProject)}>
                          End Project
                                </CButton>
                        :
                        <CButton variant="outline" block color={buttonColor[3]} disabled={flag} onClick={() => setStartProject(!startProject)}>
                          Start Project
                                </CButton>
                    }

                  </CCol>
                </CRow>
                <CModal
                  show={startProject}
                  onClose={() => setStartProject(!startProject)}
                >
                  <CModalHeader closeButton>
                    <CModalTitle>Start Project</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <CForm>
                      <CFormGroup>
                        <CLabel>Are you sure to start this project?</CLabel>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel>Notice that this action is irreversible.</CLabel>
                      </CFormGroup>
                    </CForm>
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setStartProject(!startProject)}>
                      Cancel
                                </CButton>
                    <CButton color="primary" onClick={startProj}>
                      Start
                                </CButton>{' '}
                  </CModalFooter>
                </CModal>
                <CModal
                  show={endProject}
                  onClose={() => setEndProject(!endProject)}
                >
                  <CModalHeader closeButton>
                    <CModalTitle>End Project</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <CForm>
                      <CFormGroup>
                        <CLabel>Are you sure to end this project?</CLabel>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel>Notice that this action is irreversible.</CLabel>
                      </CFormGroup>
                    </CForm>
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setEndProject(!endProject)}>
                      Cancel
                                </CButton>
                    <CButton color="primary" onClick={achievementModal}>
                      End
                                </CButton>{' '}
                  </CModalFooter>
                </CModal>

                <CModal
                  show={achievement}
                  onClose={() => setAchievement(!achievement)}
                  size="lg"
                  centered>
                  <CModalHeader closeButton>
                    <CModalTitle>Achievement</CModalTitle>
                  </CModalHeader>
                  <CModalBody className="text-center">
                    <img
                      src="avatars/cup.png"
                      style={{
                        width: "30%",
                        height: "30%",
                        align: 'center'
                      }}
                    />
                    <p class="h1">Achievement Unlocked!</p>
                    <p>For leading & completing 10 projects</p>
                    <h2 class="text-success">Boss</h2>
                    <p>You are a person of focus, commitment and sheer will</p>
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={() => setAchievement(!achievement)}>Nice</CButton>
                  </CModalFooter>
                </CModal>

                <CModal
                  show={editProject}
                  onClose={() => setEditProject(!editProject)}
                  size="lg"
                >
                  <CModalHeader closeButton>
                    <CModalTitle>Edit Project</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <CForm>
                      <CFormGroup>
                        <CLabel>Project Title</CLabel>
                        <CInput type="text" defaultValue={projectTitle} autoComplete="projectTitle" onChange={handleProjectTitleChange} />
                      </CFormGroup>

                      <CFormGroup>
                        <CLabel>Project Type</CLabel>
                        <CSelect label='Type' defaultValue={projectType} onChange={handleProjectTypeChange}>
                          <option value="Module Project">Module Project</option>
                          <option value="Public Project">Public Project</option>
                        </CSelect>
                      </CFormGroup>
                      <CRow>
                        <CCol sm='6' md='6'>
                          <CFormGroup>
                            <CLabel>Project Identifier</CLabel>
                            <CInput type="text" defaultValue={projectIdentifier} autoComplete="projectId" onChange={handleProjectIdentifierChange} />
                          </CFormGroup>
                        </CCol>
                        <CCol sm='6' md='6'>
                          <CFormGroup>
                            <CLabel>Vacancy</CLabel>
                            <CInput type="text" defaultValue={vacancy} autoComplete="teamSize" onChange={handleVacancyChange} />
                          </CFormGroup>
                        </CCol>
                      </CRow>
                      <CFormGroup>
                        <CLabel>Skill Requirement</CLabel>
                        <CTextarea defaultValue={skills} onChange={handleSkillsChange}></CTextarea>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel>Application Deadline</CLabel>
                        <CInput type="date" id="date-input" name="date-input" placeholder="date" onChange={handleDeadlineChange} />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel>Description</CLabel>
                        <CTextarea defaultValue={description} onChange={handleDescriptionChange}></CTextarea>
                      </CFormGroup>

                      <CFormGroup>
                        <CLabel>Project Display Picture (optional)</CLabel>
                        <CInputFile></CInputFile>
                      </CFormGroup>
                    </CForm>
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setEditProject(!editProject)}>
                      Cancel
                                </CButton>
                    <CButton color="primary" onClick={() => setEditProject(!editProject)}>
                      Save
                                </CButton>{' '}
                  </CModalFooter>
                </CModal>

              </div>
            </CCol>
            <CCol sm="12" md="7">
              <CListGroup>
                <CListGroupItem style={{ padding: "30px" }}><h1 id="traffic" className="card-title mb-0" style={{}}>
                  {projectTitle}
                </h1></CListGroupItem>
                <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Project Type:</span>     {projectType}</p></CListGroupItem>
                <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Module Code:</span>     {projectIdentifier}</p></CListGroupItem>
                <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Skill Requirement:</span>     {skills}</p></CListGroupItem>
                <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Vacancy:</span>     {vacancy}</p></CListGroupItem>
                <CListGroupItem style={{ paddingLeft: "30px", paddingTop: "30px", paddingBottom: "20px", paddingTop: "20px" }}><span style={{ color: "gray" }} >Status:     </span><CBadge className="mr-1" shape="pill" color={getBadge(status)}><span style={{ color: "white" }}>{status}</span></CBadge></CListGroupItem>
                <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Application Deadline:</span>     {deadline}</p></CListGroupItem>
                <CListGroupItem style={{ paddingLeft: "30px", paddingTop: "30px", paddingBottom: "20px", paddingTop: "20px" }}><span style={{ color: "gray" }} >Description:     </span>{description}</CListGroupItem>
              </CListGroup>

            </CCol>
          </CRow>
          {/* <MainChartExample style={{height: '300px', marginTop: '40px'}}/> */}
        </CCardBody>

      </CCard>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm='12' md="12">
              <h3>Teammates</h3>
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem style={{ width: "50%" }}>
                    <CNavLink>
                      Current
                            </CNavLink>
                  </CNavItem>
                  <CNavItem style={{ width: "50%" }}>
                    <CNavLink>
                      Pending
                            </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>
                    {/* {`1. ${this.state.lorem}`} */}
                    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                      <thead >
                        <tr>
                          <th className="text-center"><CIcon name="cil-people" /></th>
                          <th>User</th>
                          <th className="text-center">Faculty</th>
                          <th className="text-center">Major</th>
                          <th className="text-center">Year</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <div className="c-avatar">
                              <img src={'avatars/tom.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                              <span className="c-avatar-status bg-secondary"></span>
                            </div>
                          </td>
                          <td>
                            <div>Tom Cruise</div>
                            <div className="small text-muted">
                              Updated 1 day ago
                                        </div>
                          </td>
                          <td className="text-center">
                            <CIcon name="cil-star" style={{ color: "#F3CD03" }} /> <span style={{ color: "#F3CD03" }} >4.0</span>
                          </td>

                          <td className="text-center">
                            Computer Science
                                        </td>

                          <td className="text-center">
                            4
                                        </td>
                          <td>
                            <CRow>
                              <CCol>
                                <CButton block color="info" onClick={pageChange}>View Profile</CButton>
                              </CCol>
                              <CCol>
                                <CButton block color={buttonColor[2]} disabled={!flag} onClick={() => setFeedback(!feedback)}>Leave Feedback</CButton>
                              </CCol>
                            </CRow>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="c-avatar">
                              <img src={'avatars/matt.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                              <span className="c-avatar-status bg-success"></span>
                            </div>
                          </td>
                          <td>
                            <div>Matt Damon</div>
                            <div className="small text-muted">
                              Updated 1 day ago
                                        </div>
                          </td>
                          <td className="text-center">
                            <CIcon name="cil-star" style={{ color: "#F3CD03" }} /> <span style={{ color: "#F3CD03" }} >4.0</span>
                          </td>

                          <td className="text-center">
                            Information Systems
                                        </td>

                          <td className="text-center">
                            3
                                        </td>
                          <td>
                            <CRow>
                              <CCol>
                                <CButton block color="info" onClick={pageChange}>View Profile</CButton>
                              </CCol>
                              <CCol>
                                <CButton block color={buttonColor[2]} disabled={!flag} onClick={() => setFeedback(!feedback)}>Leave Feedback</CButton>
                              </CCol>
                            </CRow>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="c-avatar">
                              <img src={'avatars/5.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                              <span className="c-avatar-status bg-secondary"></span>
                            </div>
                          </td>
                          <td>
                            <div>Sam Smith</div>
                            <div className="small text-muted">
                              Updated 1 day ago
                                        </div>
                          </td>
                          <td className="text-center">
                            <CIcon name="cil-star" style={{ color: "#F3CD03" }} /> <span style={{ color: "#F3CD03" }} >4.0</span>
                          </td>

                          <td className="text-center">
                            Computer Science
                                        </td>

                          <td className="text-center">
                            2
                                        </td>
                          <td>
                            <CRow>
                              <CCol>
                                <CButton block color="info" onClick={pageChange}>View Profile</CButton>
                              </CCol>
                              <CCol>
                                <CButton block color={buttonColor[2]} disabled={!flag} onClick={() => setFeedback(!feedback)}>Leave Feedback</CButton>
                              </CCol>
                            </CRow>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <div className="c-avatar">
                              <img src={'avatars/8.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                              <span className="c-avatar-status bg-success"></span>
                            </div>
                          </td>
                          <td>
                            <div>Christian Bale</div>
                            <div className="small text-muted">
                              Updated 1 day ago
                                        </div>
                          </td>
                          <td className="text-center">
                            <CIcon name="cil-star" style={{ color: "#F3CD03" }} /> <span style={{ color: "#F3CD03" }} >4.0</span>
                          </td>

                          <td className="text-center">
                            Computer Engineering
                                        </td>

                          <td className="text-center">
                            4
                                        </td>
                          <td>
                            <CRow>
                              <CCol>
                                <CButton block color="info" onClick={pageChange}>View Profile</CButton>
                              </CCol>
                              <CCol>
                                <CButton block color={buttonColor[2]} disabled={!flag} onClick={() => setFeedback(!feedback)}>Leave Feedback</CButton>
                              </CCol>
                            </CRow>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </CTabPane>
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
                                  <CButton block color="info" onClick={pageChange}>View Profile</CButton>
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
                </CTabContent>
              </CTabs>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CModal
        show={feedback}
        onClose={() => setFeedback(!feedback)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Feedback</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormGroup>
              <CLabel>Your rating for this teammate:</CLabel>
            </CFormGroup>
            <CFormGroup>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Leave your comment here:</CLabel>
              <CTextarea placeholder="Any Comment"></CTextarea>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3"><CLabel>Skills Endorsement:</CLabel></CCol>
              <CCol md="9">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1">MySQL</CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                  <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">UI/UX Design</CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox id="checkbox3" name="checkbox3" value="option3" />
                  <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox3">Product Management</CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setFeedback(!feedback)}>
            Cancel
                </CButton>
          <CButton color="primary" onClick={leaveFeedback}>
            Submit
                </CButton>{' '}
        </CModalFooter>
      </CModal>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm='6' md='10'>
              <h3>Updates</h3>

            </CCol>

            <CCol sm='6' md='2' style={{ float: "right" }}>
              <CButton block color="info" onClick={() => setPost(!post)}>
                + Add
                    </CButton>
            </CCol>
          </CRow>
          <CCol sm='12' md="12">
            <CModal
              show={post}
              onClose={() => setPost(!post)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Update Post</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm>
                  <CFormGroup>
                    <CLabel>Title</CLabel>
                    <CInput type="text" onChange={handlePostTitleChange} />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel>Description:</CLabel>
                    <CTextarea placeholder="Any Description" onChange={handlePostDescriptionChange}></CTextarea>
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel>Select Photo (optional)</CLabel>
                    <CInputFile onChange={handlePostPhotoChange}></CInputFile>
                  </CFormGroup>
                </CForm>
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setPost(!post)}>
                  Cancel
                      </CButton>
                <CButton color="primary" onClick={updatePost}>
                  Submit
                      </CButton>{' '}
              </CModalFooter>
            </CModal>
            <CRow>
              <CCard>
                <CCardBody style={{ padding: "0" }}>
                  <CRow style={{ width: "inherit" }}>
                    <CCol sm='12' md="3" lg="2" >
                      <div className="custome-tag">
                        <img
                          src="avatars/recruit.jpg"
                          alt="project cover"
                          style={{
                            width: "100%",
                            height: "100%"
                          }}
                        />
                      </div>

                    </CCol>
                    <CCol sm='12' md="9" style={{ verticalAlign: "middle" }} >
                      <h4 style={{ paddingTop: "20px" }}>We are Recruting!</h4>
                      <p style={{ paddingTop: "10px" }}>Hi guys! We are still looking two more students in CS2102! Feel free to contact us!</p>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CRow>
            <CFade in={showCard} unmountOnExit={true}>
              <CRow>
                <CCard>
                  <CCardBody style={{ padding: "0" }}>
                    <CRow style={{ width: "inherit" }}>
                      <CCol sm='12' md="3" lg="2" >
                        <div className="custome-tag">
                          <img
                            // src={postPhoto}
                            src="avatars/complete.jpg"
                            alt="cover"
                            style={{
                              width: "100%",
                              height: "100%"
                            }}
                          />
                        </div>

                      </CCol>
                      <CCol sm='12' md="9" style={{ verticalAlign: "middle" }} >
                        <h4 style={{ paddingTop: "20px" }}>{postTitle}</h4>
                        <p style={{ paddingTop: "10px" }}>{postDescription}</p>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CRow>
            </CFade>
          </CCol>
        </CCardBody>
      </CCard>
    </>
  )
}



export default MyProjectDetails