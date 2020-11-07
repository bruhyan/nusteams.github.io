import React, { Fragment } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CBadge,
    CLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router-dom';

const ViewMyProjects = () => {
    const history = useHistory()
    const pageChangeMyProject = () => {
        history.push(`/my_project/:123`)
    }

    return (
        <Fragment>
            <CRow>
                <CCol md="4" s="6" xs="12">
                    <CCard>
                        <CCardHeader>
                            <CLink onClick={pageChangeMyProject}>
                                <h5>CS3203 Software Engineering Project</h5>
                            </CLink>
                            <CBadge color={'warning'}>ONGOING</CBadge>
                        </CCardHeader>
                        <CCardBody>
                            <p>Module Project: CS3203</p>
                            <p>Started from 1 Jan 2020</p>
                            <CIcon name="cil-bell" style={{ color: "#FC7B28" }} /> <span style={{ color: "#FC7B28" }} >You have pending requests to join this project</span>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol md="4" s="6" xs="12">
                    <CCard>
                        <CCardHeader>
                            <CLink>
                                <h5>CS3240 Design Project</h5>
                            </CLink>
                            <CBadge color={'success'}>OPEN</CBadge>
                        </CCardHeader>
                        <CCardBody>
                            <p>Module Project: CS3240</p>
                            <p>Started from 1 Jan 2020</p>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol md="4" s="6" xs="12">
                    <CCard>
                        <CCardHeader>
                            <CLink>
                                <h5>CS2103 Software Engineering</h5>
                            </CLink>
                            <CBadge color={'warning'}>ONGOING</CBadge>
                        </CCardHeader>
                        <CCardBody>
                            <p>Module Project: CS2103</p>
                            <p>Started from 1 Jan 2020</p>

                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <CRow>
                <CCol md="4" s="6" xs="12">
                    <CCard>
                        <CCardHeader>
                            <CLink>
                                <h5>Teach kids to Code</h5>
                            </CLink>
                            <CBadge color={'danger'}>CLOSED</CBadge>
                        </CCardHeader>
                        <CCardBody>
                            <p>Public Project: Volunteering</p>
                            <p>Started from 1 Jan 2020</p>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol md="4" s="6" xs="12">
                    <CCard>
                        <CCardHeader>
                            <CLink>
                                <h5>NOC Startup Project: Caroutrade</h5>
                            </CLink>
                            <CBadge color={'danger'}>CLOSED</CBadge>
                        </CCardHeader>
                        <CCardBody>
                            <p>Public Project: Tech</p>
                            <p>Started from 1 Jan 2020</p>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </Fragment>
    )
}

export default ViewMyProjects