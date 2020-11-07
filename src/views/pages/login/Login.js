import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import homebackground from '../../../assets/images/nus-home.png';

const Login = () => {

  const homeImage = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 100%",
    backgroundPosition: "center",
    backgroundImage: 'url(' + homebackground + ')'
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [invalidUser, setInvalidUser] = useState(false);

  const history = useHistory()

  const pageChange = () => {
    history.push(`/dashboard`)
  }

  const doLogin = () => {
    setInvalidUser(false);
    if (email !== 'test@u.nus.edu' || password === '') {
      setInvalidUser(true);
    } else {
      pageChange();
    }
  }

  const handleEmailChange = (event) => {
    setInvalidUser(false);
    const email = event.target.value;
    setEmail(email);
  }

  const handlePasswordChange = (event) => {
    setInvalidUser(false);
    const password = event.target.value;
    setPassword(password);
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center" style={ homeImage }>
        <CContainer >
          <CRow className="justify-content-center">
            <CCol md="7">
              <CCardGroup>
                <CCard className="p-4" style={{backgroundColor: 'white', opacity: 0.9 }}>
                  <CCardBody className="text-center">
                    <CForm>
                      <span className="display-4">Welcome to NUSTeams</span>
                      <p>Centralized collaboration platform for NUS students</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput color="black" type="text" placeholder="Username" autoComplete="username" onChange={handleEmailChange} />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={handlePasswordChange} />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6" className="text-left">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="primary" className="px-4" onClick={doLogin}>Login</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                    <CAlert color="danger" closeButton show={invalidUser} style={{ marginTop: 10 }}>
                      Invalid username / password
                    </CAlert>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
    </div>
  )
}

export default Login
