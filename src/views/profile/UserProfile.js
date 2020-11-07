import React, { lazy, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CProgressBar,
  CCollapse,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CDataTable,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CSelect,
  CFormText,
  CTextarea,
  CSwitch,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
  CInputCheckbox,
  CAlert,
  CInputRadio,
  CFade,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import "@coreui/coreui/css/custom"
import usersData from './projectData'

const fields = ['img', 'project_name', 'description', 'Module_Project', 'registered', 'status']

const getBadge = status => {
  switch (status) {
    case 'completed': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const UserProfile = () => {
  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(1)

  const toggle = (e) => {
    setCollapse(!collapse)
    e.preventDefault()
  }

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice()
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      case "right":
        newCollapse[1] = !collapseMulti[1];
        break;
      case "both":
        newCollapse[0] = !collapseMulti[0];
        newCollapse[1] = !collapseMulti[1];
        break;
      default:
    }
    setCollapseMulti(newCollapse)
  }

  const toggleFade = () => {
    setFade(!fade)
  }

  const [primary, setPrimary] = useState(false)
  const [editAbout, setAbout] = useState(false)
  const [editSkill, setSkill] = useState(false)
  const [report, setReport] = useState(false)

  const [toasts, setToasts] = useState([
  ])

  const [position, setPosition] = useState('top-right')
  const [autohide, setAutohide] = useState(true)
  const [autohideValue, setAutohideValue] = useState(5000)
  const [java, setJava] = useState(true)
  const [javaScript, setJavaScript] = useState(true)
  const [communication, setCommunication] = useState(true)
  const [leadership, setLeadership] = useState(true)
  const [hiphop, setHiphop] = useState(true)
  const [piano, setPiano] = useState(true)
  const [closeButton, setCloseButton] = useState(true)
  const [fade, setFade] = useState(true)

  const [showCard, setShowCard] = useState(true)
  const [showTech, setShowTech] = useState(true)
  const [showNewTech, setShowNewTech] = useState(false)
  const [post, setPost] = useState(false)
  const [toastMessage, setToastMessage] = useState('');

  const addToast = () => {
    setToasts([
      ...toasts,
      {
        position, autohide: autohide && autohideValue, closeButton, fade, java,
        javaScript, communication, leadership, hiphop, piano
      }
    ])
  }

  const toasters = (() => {
    return toasts.reduce((toasters, toast) => {
      toasters[toast.position] = toasters[toast.position] || []
      toasters[toast.position].push(toast)
      return toasters
    }, {})
  })()

  const updatePost = () => {
    setPost(!post)
    setShowCard(true)
  }

  const updateCard = () => {
    setShowCard(false)
  }

  const updateTech = () => {
    setShowTech(false)
  }

  const updateNewTech = () => {
    setShowNewTech(true)
  }

  const saveSkills = () => {
    setSkill(!editSkill)
    setToastMessage('Your skills have been updated');
    addToast();
  }

  const saveReport = () => {
    setReport(!report)
    setToastMessage('Your report has been received');
    addToast();
  }

  const saveAbout = () => {
    setAbout(!editAbout)
    setToastMessage('Your basic information has been updated');
    addToast();
  }
  return (
    <>
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
                  ade={toast.fade}
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
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h4>About Me
                <CIcon width={24} onClick={() => setAbout(!editAbout)} className="float-right" name="cil-pencil" />
              </h4>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" sm="6" lg="3">
                  <div class="profile-main">
                    <div class="profile-header">
                      <div class="user-detail">
                        <div class="user-image">
                          <img src="https://ii.yuki.la/c/da/3e777cb605409054fab6f88c5cf2ff79c6e42c1d8c3697278129051bcd51adac.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </CCol>
                <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <CForm action="" method="post" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel><strong>Name</strong></CLabel>
                      </CCol>
                      <CCol xs="12" md="7">
                        <p className="form-control-static">Jones Ferdinand</p>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel><strong>Major & Year</strong></CLabel>
                      </CCol>
                      <CCol xs="12" md="7">
                        <p className="form-control-static">Computer Science, Year 4</p>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel><strong>Bio</strong></CLabel>
                      </CCol>
                      <CCol xs="12" md="7">
                        <p className="form-control-static">Hello, I am a Year 4 student who is interested in product design, PM me for collab!</p>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel><strong>Contact</strong></CLabel>
                      </CCol>
                      <CCol xs="12" md="7">
                        <CButton className="btn-facebook btn-brand mr-1 mb-1"><CIcon name="cib-facebook" /></CButton>
                        <CButton className="btn-linkedin btn-brand mr-1 mb-1"><CIcon name="cib-linkedin" /></CButton>
                        <CButton className="btn-github btn-brand mr-1 mb-1"><CIcon name="cib-github" /></CButton>
                        <CButton className="btn-linkedin btn-brand mr-1 mb-1"><CIcon name="cil-envelope-closed" /></CButton>
                        <CButton className="btn-github btn-brand mr-1 mb-1"><CIcon name="cil-phone" /></CButton>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel><strong>Rating</strong></CLabel>
                      </CCol>
                      <CCol xs="12" md="7">
                        <CIcon name="cil-star" style={{ color: "#F3CD03" }} /> <span style={{ color: "#F3CD03" }} >4.0 / 5.0</span>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel><strong>Achievements</strong></CLabel>
                      </CCol>
                      <CCol xs="12" md="7">
                        <CBadge color="success" className="float-middle">Well-Loved</CBadge>
                        &nbsp;
                        <CBadge color="info" className="float-middle">Intermediate</CBadge>
                      </CCol>
                    </CFormGroup>
                  </CForm>
                </CCol>
              </CRow>
              <CModal
                show={editAbout}
                onClose={() => setAbout(!editAbout)}
                color="primary"
                size="lg"
              >
                <CModalHeader closeButton>
                  <CModalTitle>Edit Basic Information</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Name</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="text-input" name="text-input" placeholder="Jones Ferdinand" />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="select">Major</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect custom name="select" id="select">
                          <option value="0">Computer Science</option>
                          <option value="1">Information Systems</option>
                          <option value="2">Information Security</option>
                          <option value="3">Computer Engineering</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="select">Admit Term</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect custom name="select" id="select">
                          <option value="0">2017/18 Semester 1</option>
                          <option value="1">2017/18 Semester 2</option>
                          <option value="2">2018/19 Semester 1</option>
                          <option value="3">2018/19 Semester 2</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">Bio</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea
                          name="textarea-input"
                          id="textarea-input"
                          rows="9"
                          placeholder="Hello, I am a Year 4 student who is interested in product design, PM me for collab!"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Facebook</CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CInput id="text-input" name="text-input" placeholder="Jones_Ferdinand" />
                      </CCol>
                      <CCol xs="12" md="3">
                        <CSwitch
                          className="mr-1"
                          color="primary"
                          defaultChecked
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Linkedin</CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CInput id="text-input" name="text-input" placeholder="https://www.linkedin.com/in/jones_ferdinand-ba4032179/" />
                      </CCol>
                      <CCol xs="12" md="3">
                        <CSwitch
                          className="mr-1"
                          color="primary"
                          defaultChecked
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">GitHub</CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CInput id="text-input" name="text-input" placeholder="Jones_Ferdinand" />
                      </CCol>
                      <CCol xs="12" md="3">
                        <CSwitch
                          className="mr-1"
                          color="primary"
                          defaultChecked
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Email</CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CInput id="text-input" name="text-input" placeholder="Jones_Ferdinand@gmail.com" />
                      </CCol>
                      <CCol xs="12" md="3">
                        <CSwitch
                          className="mr-1"
                          color="primary"
                          defaultChecked
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Telegram</CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CInput id="text-input" name="text-input" placeholder="Jones_Ferdinand" />
                      </CCol>
                      <CCol xs="12" md="3">
                        <CSwitch
                          className="mr-1"
                          color="primary"
                          defaultChecked
                        />
                      </CCol>
                    </CFormGroup>
                  </CForm>
                </CModalBody>
                <CModalFooter>
                  <CButton color="primary" onClick={saveAbout}>
                    Save
                  </CButton>{' '}
                  <CButton color="secondary" onClick={() => setAbout(!editAbout)}>
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" xl="6">
          <CCard>
            <CCardHeader>
              <h4>Skills
                <CIcon width={24} onClick={() => setSkill(!editSkill)} className="float-right" name="cil-pencil" />
              </h4>
            </CCardHeader>
            <CCardBody>
              <div id="accordion">
                <CCard className="mb-0">
                  <CCardHeader id="headingOne">
                    <CButton
                      block
                      className="text-left m-0 p-0"
                      onClick={() => setAccordion(accordion === 0 ? null : 0)}
                    >
                      <span className="title">Tools & Technologies</span>
                    </CButton>
                  </CCardHeader>
                  <CCollapse show={accordion === 0}>
                    <CCardBody>
                      <CRow>
                        <CCol>
                          <CWidgetIcon text="Endorsed By Ruichun and 10 others" header="Java" color="info" iconPadding={false}>
                            <CIcon width={24} name="cil-check" />
                          </CWidgetIcon>
                        </CCol>
                        <CCol>
                          <CFade in={showTech} unmountOnExit={true}>
                            <CWidgetIcon text="Endorsed By Shengjing and 10 others" header="JavaScript" color="info" iconPadding={false}>
                              <CIcon width={24} name="cil-check" />
                            </CWidgetIcon>
                          </CFade>
                          <CFade in={showNewTech} unmountOnExit={true}>
                            <CWidgetIcon header="php" color="info" iconPadding={false}>
                              <CIcon width={24} name="cil-check" />
                            </CWidgetIcon>
                          </CFade>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCollapse>
                </CCard>
                <CCard className="mb-0">
                  <CCardHeader id="headingThree">
                    <CButton
                      block
                      className="text-left m-0 p-0"
                      onClick={() => setAccordion(accordion === 1 ? null : 1)}
                    >
                      <span className="title">Soft Skills</span>
                    </CButton>
                  </CCardHeader>
                  <CCollapse show={accordion === 1}>
                    <CCardBody>
                      <CRow>
                        <CCol>
                          <CWidgetIcon text="Endorsed By Bryan and 10 others" header="Communication" color="info" iconPadding={false}>
                            <CIcon width={24} name="cil-check" />
                          </CWidgetIcon>
                        </CCol>
                        <CCol>
                          <CFade in={showCard} unmountOnExit={true}>
                            <CWidgetIcon text="Endorsed By Jingzhan and 10 others" header="Leadership" color="info" iconPadding={false}>
                              <CIcon width={24} name="cil-check" />
                            </CWidgetIcon>
                          </CFade>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCollapse>
                </CCard>
                <CCard className="mb-0">
                  <CCardHeader id="headingThree">
                    <CButton
                      block
                      className="text-left m-0 p-0"
                      onClick={() => setAccordion(accordion === 3 ? null : 3)}
                    >
                      <span className="title">Other Skills</span>
                    </CButton>
                  </CCardHeader>
                  <CCollapse show={accordion === 3}>
                    <CCardBody>
                      <CRow>
                        <CCol>
                          <CWidgetIcon header="Hip-hop" color="info" iconPadding={false}>
                            <CIcon width={24} name="cil-check" />
                          </CWidgetIcon>
                        </CCol>
                        <CCol>
                          <CWidgetIcon header="Piano" color="info" iconPadding={false}>
                            <CIcon width={24} name="cil-check" />
                          </CWidgetIcon>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCollapse>
                </CCard>
              </div>
              <CModal
                show={editSkill}
                onClose={() => setSkill(!editSkill)}
                color="primary"
                size="lg"
              >
                <CModalHeader closeButton>
                  <CModalTitle>Edit Skills</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CAlert color="danger">
                    Please note that the endorsement(s) corresponding to removed skills will not be recovered
                  </CAlert>
                  <CForm>
                    <h5>Tools and Technologies</h5>
                    <CRow>
                      <CCol>
                        <CWidgetIcon text="Endorsed By Ruichun and 10 others" header="Java" color="info" iconPadding={false}
                          footerSlot={
                            <CCardFooter className="card-footer px-3 py-2">
                              <CButton size="sm" variant="ghost" className="float-left" color="ghost" onClick={updateCard}>
                                Delete
                              </CButton>
                              <CIcon name="cil-trash" className="float-right" width="25" />
                            </CCardFooter>
                          }
                        >
                          <CIcon width={24} name="cil-check" className="mx-5" />
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CFade in={showTech} unmountOnExit={true}>
                          <CWidgetIcon text="Endorsed By Shengjing and 10 others" header="JavaScript" color="info" iconPadding={false}
                            footerSlot={
                              <CCardFooter className="card-footer px-3 py-2">
                                <CButton size="sm" variant="ghost" className="float-left" color="ghost" onClick={updateTech}>
                                  Delete
                              </CButton>
                                <CIcon name="cil-trash" className="float-right" width="25" />
                              </CCardFooter>
                            }
                          >
                            <CIcon width={24} name="cil-check" className="mx-5" />
                          </CWidgetIcon>
                        </CFade>

                        <CFade in={showNewTech} unmountOnExit={true}>
                          <CWidgetIcon header="php" color="info" iconPadding={false}
                            footerSlot={
                              <CCardFooter className="card-footer px-3 py-2">
                                <CButton size="sm" variant="ghost" className="float-left" color="ghost">
                                  Delete
                              </CButton>
                                <CIcon name="cil-trash" className="float-right" width="25" />
                              </CCardFooter>
                            }
                          >
                            <CIcon width={24} name="cil-check" className="mx-5" />
                          </CWidgetIcon>
                        </CFade>
                      </CCol>
                    </CRow>

                    <h5>Soft Skills</h5>
                    <CRow>
                      <CCol>
                        <CWidgetIcon text="Endorsed By Bryan and 10 others" header="Communication" color="info" iconPadding={false}
                          footerSlot={
                            <CCardFooter className="card-footer px-3 py-2">
                              <CButton size="sm" variant="ghost" className="float-left" color="ghost" onClick={updateCard}>
                                Delete
                              </CButton>
                              <CIcon name="cil-trash" className="float-right" width="25" />
                            </CCardFooter>
                          }
                        >
                          <CIcon width={24} name="cil-check" className="mx-5" />
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CFade in={showCard} unmountOnExit={true}>
                          <CWidgetIcon text="Endorsed By Jingzhan and 10 others" header="Leadership" color="info" iconPadding={false}
                            footerSlot={
                              <CCardFooter className="card-footer px-3 py-2">
                                <CButton size="sm" variant="ghost" className="float-left" color="ghost" onClick={updateCard}>
                                  Delete
                              </CButton>
                                <CIcon name="cil-trash" className="float-right" width="25" />
                              </CCardFooter>
                            }
                          >
                            <CIcon width={24} name="cil-check" className="mx-5" />
                          </CWidgetIcon>
                        </CFade>
                      </CCol>
                    </CRow>

                    <h5>Others</h5>
                    <CRow>
                      <CCol>
                        <CWidgetIcon header="Hip-hop" color="info" iconPadding={false}
                          footerSlot={
                            <CCardFooter className="card-footer px-3 py-2">
                              <CButton size="sm" variant="ghost" className="float-left" color="ghost" onClick={updateCard}>
                                Delete
                              </CButton>
                              <CIcon name="cil-trash" className="float-right" width="25" />
                            </CCardFooter>
                          }
                        >
                          <CIcon width={24} name="cil-check" className="mx-5" />
                        </CWidgetIcon>
                      </CCol>
                      <CCol>
                        <CWidgetIcon header="Piano" color="info" iconPadding={false}
                          footerSlot={
                            <CCardFooter className="card-footer px-3 py-2">
                              <CButton size="sm" variant="ghost" className="float-left" color="ghost" onClick={updateCard}>
                                Delete
                              </CButton>
                              <CIcon name="cil-trash" className="float-right" width="25" />
                            </CCardFooter>
                          }
                        >
                          <CIcon width={24} name="cil-check" className="mx-5" />
                        </CWidgetIcon>
                      </CCol>
                    </CRow>

                    <CFormGroup variant="custom-checkbox" className="my-2 mt-4">
                      <CInputCheckbox
                        id="autohide"
                        checked={autohide}
                        onChange={e => { setAutohide(e.target.checked) }}
                        custom
                      />
                      <CLabel variant="custom-checkbox" htmlFor="autohide">
                        Add New Skills
                      </CLabel>
                    </CFormGroup>
                    {
                      autohide &&
                      <CFormGroup className="my-2">
                        <CCol>
                          <CLabel htmlFor="ccyear">Skill Type</CLabel>
                          <CSelect custom name="select" id="select">
                            <option value="0">Please select</option>
                            <option value="1">Tools & Technologies</option>
                            <option value="2">Soft Skills </option>
                            <option value="3">Other Skills</option>
                          </CSelect>
                        </CCol>
                        <CCol>
                          <CLabel htmlFor="ccyear">Skill Name</CLabel>
                          <CInput id="text-input" name="text-input" placeholder="Skill Name" />
                        </CCol>
                        <CCol>
                          <br></br>
                          <CButton
                            className="mr-1 w-25"
                            color="info"
                            onClick={updateNewTech}
                          >
                            Add
                          </CButton>
                        </CCol>

                      </CFormGroup>

                    }


                  </CForm>

                </CModalBody>
                <CModalFooter>
                  <CButton color="primary" onClick={saveSkills}>
                    Save
                </CButton>{' '}
                  <CButton color="secondary" onClick={() => setSkill(!editSkill)}>
                    Cancel
                </CButton>
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h4>Projects Involved</h4>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem action>
                  <CRow>
                    <CCol xs="12" xl="6">
                      <div class="experience-main">
                        <div class="experience-detail">
                          <div class="experience-data">
                            <div class="experience-image">
                              <img src="https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"></img>
                            </div>
                            <h5>
                              <strong>
                                &nbsp; &nbsp; &nbsp; &nbsp; NUSTeams
                          </strong>
                            </h5>
                            <div>
                              &nbsp; &nbsp; &nbsp; &nbsp; Project focuses on design and critique
                        </div>
                          </div>
                        </div>
                      </div>
                    </CCol>
                    <CCol xs="12" sm="6" lg="3">
                      <div>
                        <strong>
                          Module Project
                      </strong>
                      </div>
                      <div>
                        CS3240 Interaction Design
                    </div>
                    </CCol>
                    <CCol xs="12" sm="6" lg="3">
                      <div>
                        <strong>
                          2020-2021 Semester 1
                      </strong>
                      </div>
                      <div className="float-right">
                        <CBadge color="success" className="float-middle">COMPLETED</CBadge>
                      </div>
                    </CCol>
                  </CRow>
                </CListGroupItem>
                <CListGroupItem action>
                  <CRow>
                    <CCol xs="12" xl="6">
                      <div class="experience-main">
                        <div class="experience-detail">
                          <div class="experience-data">
                            <div class="experience-image">
                              <img src="https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"></img>
                            </div>
                            <h5>
                              <strong>
                                &nbsp; &nbsp; &nbsp; &nbsp; IS4103 Team 2
                          </strong>
                            </h5>
                            <div>
                              &nbsp; &nbsp; &nbsp; &nbsp; Project focuses on full stack development
                        </div>
                          </div>
                        </div>
                      </div>
                    </CCol>
                    <CCol xs="12" sm="6" lg="3">
                      <div>
                        <strong>
                          Module Project
                      </strong>
                      </div>
                      <div>
                        IS4103 Capstone Project
                    </div>
                    </CCol>
                    <CCol xs="12" sm="6" lg="3">
                      <div>
                        <strong>
                          2020-2021 Semester 1
                      </strong>
                      </div>
                      <div className="float-right">
                        <CBadge color="success" className="float-middle">COMPLETED</CBadge>
                      </div>
                    </CCol>
                  </CRow>
                </CListGroupItem>
                <CListGroupItem action>
                  <CRow>
                    <CCol xs="12" xl="6">
                      <div class="experience-main">
                        <div class="experience-detail">
                          <div class="experience-data">
                            <div class="experience-image">
                              <img src="https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"></img>
                            </div>
                            <h5>
                              <strong>
                                &nbsp; &nbsp; &nbsp; &nbsp; IS3106 Team 2
                          </strong>
                            </h5>
                            <div>
                              &nbsp; &nbsp; &nbsp; &nbsp; Project focuses on front end development
                        </div>
                          </div>
                        </div>
                      </div>
                    </CCol>
                    <CCol xs="12" sm="6" lg="3">
                      <div>
                        <strong>
                          Module Project
                      </strong>
                      </div>
                      <div>
                        IS3106 Enterprise Systems Interface Design and Development
                    </div>
                    </CCol>
                    <CCol xs="12" sm="6" lg="3">
                      <div>
                        <strong>
                          2020-2021 Semester 1
                      </strong>
                      </div>
                      <div className="float-right">
                        <CBadge color="success" className="float-middle">COMPLETED</CBadge>
                      </div>
                    </CCol>
                  </CRow>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h4>Education</h4>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem action>
                  <div class="education-main">
                    <div class="education-detail">
                      <div class="education-data">
                        <div class="education-image">
                          <img src="https://cdn.worldvectorlogo.com/logos/nus.svg"></img>
                        </div>
                        <h5>
                          <strong>
                            &nbsp; &nbsp; &nbsp; &nbsp;National University of Singapore
                    </strong>
                        </h5>
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp; Bachelor of Computing, Information Systems
                    </div>
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp; 2017-2021
                    </div>
                      </div>
                    </div>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <div class="education-main">
                    <div class="education-detail">
                      <div class="education-data">
                        <div class="education-image">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png"></img>
                        </div>
                        <h5>
                          <strong>
                            &nbsp; &nbsp; &nbsp; &nbsp; Georgia Institute of Technology
                    </strong>
                        </h5>
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp; Student Exchange
                    </div>
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp; 2018-2019
                    </div>
                      </div>
                    </div>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <div class="education-main">
                    <div class="education-detail">
                      <div class="education-data">
                        <div class="education-image">
                          <img src="https://rafflesmun.files.wordpress.com/2017/01/copy-of-icon.png"></img>
                        </div>
                        <h5>
                          <strong>
                            &nbsp; &nbsp; &nbsp; &nbsp; Raffles Institute
                      </strong>
                        </h5>
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp; Singapore-Cambridge GCSE A-level
                    </div>
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp; 2015-2017
                    </div>
                      </div>
                    </div>
                  </div>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h4>Teammates Feedback</h4>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem action>
                  <CRow>
                    <CCol xs="12" xl="6">
                      <div class="experience-main">
                        <div class="experience-detail">
                          <div class="experience-data">
                            <div class="experience-image">
                              <img src="https://textgod.com/wp-content/uploads/2019/06/louis-roze-trui-pink.jpg"></img>
                            </div>
                            <h5>
                              <strong>
                                &nbsp; &nbsp; &nbsp; &nbsp; Tom Cruise
                        </strong>
                            </h5>
                            <div>
                              &nbsp; &nbsp; &nbsp; &nbsp; Posted 3 days ago
                        </div>
                          </div>
                        </div>
                      </div>
                    </CCol>
                    <CCol xs="12" xl="6">
                      <div>
                        Stephen is a hardworker who values teamwork. Highly recommended!
                  </div>
                      <CIcon width={24} className="float-right" name="cil-warning" onClick={() => setReport(!report)} />
                    </CCol>
                  </CRow>
                </CListGroupItem>
                <CListGroupItem action>
                  <CRow>
                    <CCol xs="12" xl="6">
                      <div class="experience-main">
                        <div class="experience-detail">
                          <div class="experience-data">
                            <div class="experience-image">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLpo2kLh0mOYWWqzKaVwIp-FhQkOAkIIDqdg&usqp=CAU"></img>
                            </div>
                            <h5>
                              <strong>
                                &nbsp; &nbsp; &nbsp; &nbsp; Matt Damon
                        </strong>
                            </h5>
                            <div>
                              &nbsp; &nbsp; &nbsp; &nbsp; Posted on 3/29/2020
                        </div>
                          </div>
                        </div>
                      </div>
                    </CCol>
                    <CCol xs="12" xl="6">
                      <div>
                        Good programmer
                  </div>
                      <CIcon width={24} className="float-right" name="cil-warning" onClick={() => setReport(!report)} />
                    </CCol>
                  </CRow>
                </CListGroupItem>
                <CListGroupItem action>
                  <CRow>
                    <CCol xs="12" xl="6">
                      <div class="experience-main">
                        <div class="experience-detail">
                          <div class="experience-data">
                            <div class="experience-image">
                              <img src="https://selectedsoundsblog.files.wordpress.com/2015/09/george1.jpg"></img>
                            </div>
                            <h5>
                              <strong>
                                &nbsp; &nbsp; &nbsp; &nbsp; Sam Smith
                        </strong>
                            </h5>
                            <div>
                              &nbsp; &nbsp; &nbsp; &nbsp; Posted on 3/29/2020
                        </div>
                          </div>
                        </div>
                      </div>
                    </CCol>
                    <CCol xs="12" xl="6">
                      <div>
                        Pleasant teammate who you can consult with anything.
                  </div>
                      <CIcon width={24} className="float-right" name="cil-warning" onClick={() => setReport(!report)} />
                    </CCol>
                  </CRow>
                </CListGroupItem>
              </CListGroup>
              <CModal
                show={report}
                onClose={setReport}
              >
                <CModalHeader closeButton>
                  <CModalTitle>Report an issue</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>Name</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <p className="form-control-static">Tom Cruise</p>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>Content</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <p className="form-control-static">Stephen is a hardworker who values teamwork. Highly recommended!</p>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>Reason(s)</CLabel>
                      </CCol>
                      <CCol md="9">
                        <CFormGroup variant="checkbox">
                          <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                          <CLabel variant="checkbox" htmlFor="radio1">False Information</CLabel>
                        </CFormGroup>
                        <CFormGroup variant="checkbox">
                          <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                          <CLabel variant="checkbox" htmlFor="radio2">Illegal Information</CLabel>
                        </CFormGroup>
                        <CFormGroup variant="checkbox">
                          <CInputRadio className="form-check-input" id="radio3" name="radios" value="option3" />
                          <CLabel variant="checkbox" htmlFor="radio3">Personal Attack</CLabel>
                        </CFormGroup>
                        <CFormGroup variant="checkbox">
                          <CInputRadio className="form-check-input" id="radio4" name="radios" value="option3" />
                          <CLabel variant="checkbox" htmlFor="radio3">Others</CLabel>
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">Textarea</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea
                          name="textarea-input"
                          id="textarea-input"
                          rows="9"
                          placeholder="Report description..."
                        />
                      </CCol>
                    </CFormGroup>
                  </CForm>
                </CModalBody>
                <CModalFooter>
                  <CButton color="primary" onClick={saveReport}>Report</CButton>{' '}
                  <CButton
                    color="secondary"
                    onClick={() => setReport(false)}
                  >Cancel</CButton>
                </CModalFooter>

              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserProfile
