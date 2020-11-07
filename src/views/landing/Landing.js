// import React, { Fragment, useState } from 'react'
// import {
//     CNavbar,
//     CToggler,
//     CNavbarBrand,
//     CCollapse,
//     CNavLink,
//     CNavbarNav,
//     CForm,
//     CInput,
//     CButton,
//     CCard,
//     CRow,
//     CCol,
//     CLabel,
//     CToast,
//     CToastBody,
//     CToastHeader,
//     CToaster,
//     CCardBody, CContainer, CFormGroup
// } from '@coreui/react'

// import styled from 'styled-components';
// import bannerImage from '../../assets/images/banner1.gif';
// import createImage from '../../assets/images/creating.png';
// import joinImage from '../../assets/images/collaboration.png';
// import portfolioImage from '../../assets/images/resume.png';
// import networkImage from '../../assets/images/network.png';
// import statsImage from '../../assets/images/stats.gif';
// import contactImage from '../../assets/images/contact.gif';

// import { useHistory } from 'react-router-dom';

// const BannerContainer = styled.div`
//     margin-left: 10vw;
//     margin-right: 10vw;
// `;

// const BannerImg = styled.img`
//     object-fit: cover;
//     height: 90%;
//     width: 100%;
// `;

// const Feature = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding-bottom: 3rem;
// `;

// const FeatureTitleContainer = styled.div`
//     margin-bottom: 3rem;
//     text-align: center;
// `;

// const BannerImgContainer = styled.div`
//     /* height: 500px;
//     width: 500px; */
// `;

// const LandingBody = styled.div`
//     background-color: white;
//     height: 100%;
// `;

// const BannerRight = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     /* margin-top: 25vh; */
// `;

// const FeaturesContainer = styled.div`
//     margin-top: 3rem;
//     margin-left: 10vw;
//     margin-right: 10vw;
// `;

// const StatsContainer = styled.div`
//     margin-top: 5rem;
//     margin-left: 15vw;
//     margin-right: 15vw;
// `;

// const ContactContainer = styled.div`
//     margin-top: 10rem;
//     margin-left: 15vw;
//     margin-right: 15vw;
//     margin-bottom: 10rem;
// `;

// const StatsRight = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     height: 80%;
//     /* margin-top: 25vh; */
// `;

// const FooterContainer = styled.div`
//     height: 300px;
//     background-color: #01c99b;
// `;

// const ContactformContainer = styled.div`
//     padding-top: 5rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `;

// const Landing = () => {
//     // const positions = [
//     //     'top-left',
//     //     'top-center',
//     //     'top-right',
//     //     'top-full',
//     //     'bottom-left',
//     //     'bottom-center',
//     //     'bottom-right',
//     //     'bottom-full'
//     // ]

//     const [toasts, setToasts] = useState([
//     ])

//     const [position] = useState('top-right')
//     const [autohide] = useState(true)
//     const [autohideValue] = useState(5000)
//     const [closeButton] = useState(true)
//     const [fade] = useState(true)
//     const [isOpen, setIsOpen] = useState(false);

//     const addToast = () => {
//         setToasts([
//             ...toasts,
//             { position, autohide: autohide && autohideValue, closeButton, fade }
//         ])
//     }
//     const toasters = (() => {
//         return toasts.reduce((toasters, toast) => {
//             toasters[toast.position] = toasters[toast.position] || []
//             toasters[toast.position].push(toast)
//             return toasters
//         }, {})
//     })()

//     const history = useHistory()

//     const pageChange = () => {
//         history.push(`/login`)
//     }

//     return (
//         <Fragment>
//             {/* navbar start */}
//             <LandingBody>
//                 <div>
//                     <CNavbar expandable="sm" style={{ backgroundColor: "#01c99b" }}>
//                         <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
//                         <CNavbarBrand>
//                             NavbarBrand
//                     </CNavbarBrand>
//                         <CCollapse show={isOpen} navbar>
//                             <CNavbarNav>
//                                 <CNavLink>Home</CNavLink>
//                                 <CNavLink>Sign Up</CNavLink>
//                                 <CNavLink>Login</CNavLink>
//                                 <CNavLink>About</CNavLink>
//                             </CNavbarNav>
//                         </CCollapse>
//                     </CNavbar>
//                 </div>

//                 {/* navbar end */}

//                 {/* banner start */}
//                 <BannerContainer>
//                     <div class="row">
//                         <div class="col-md-6 col-s-6">
//                             <BannerImgContainer>
//                                 <BannerImg src={bannerImage} alt="no-img"></BannerImg>
//                             </BannerImgContainer>
//                         </div>
//                         <div class="col-md-6 col-s-6">
//                             <BannerRight>
//                                 <h1>Welcome to NUSTeams</h1>
//                                 <h4>Your One-Stop Collaboration Platform</h4>
//                                 <CButton color={'primary'} style={{ marginTop: 5 }} onClick={pageChange}>Get Started</CButton>
//                             </BannerRight>

//                         </div>
//                     </div>
//                 </BannerContainer>
//                 {/* banner end */}

//                 {/* features start */}
//                 <FeaturesContainer>
//                     <FeatureTitleContainer>
//                         <h1>Why NUSTeams?</h1>
//                     </FeatureTitleContainer>

//                     <div class="row">
//                         <div class="col-md-3 col-s-6">
//                             <Feature>
//                                 <img src={createImage} alt="no-img"></img>
//                                 <h4>Create / Recruit for your projects</h4>
//                             </Feature>
//                         </div>
//                         <div class="col-md-3 col-s-6">
//                             <Feature>
//                                 <img src={joinImage} alt="no-img"></img>
//                                 <h4>Join interesting ongoing projects</h4>
//                             </Feature>
//                         </div>
//                         <div class="col-md-3 col-s-6">
//                             <Feature>
//                                 <img src={portfolioImage} alt="no-img"></img>
//                                 <h4>Build up your portfolio</h4>
//                             </Feature>
//                         </div>
//                         <div class="col-md-3 col-s-6">
//                             <Feature>
//                                 <img src={networkImage} alt="no-img"></img>
//                                 <h4>Network with liked-minded people</h4>
//                             </Feature>
//                         </div>
//                     </div>
//                 </FeaturesContainer>
//                 {/* features end */}


//                 {/* statistics start */}
//                 <StatsContainer>
//                     <div class="row">
//                         <div class="col-md-6 col-s-12">
//                             <BannerImgContainer>
//                                 <BannerImg src={statsImage} alt="no-img"></BannerImg>
//                             </BannerImgContainer>
//                         </div>
//                         <div class="col-md-6 col-s-12">
//                             <StatsRight>
//                                 <h1>Statistics</h1>
//                                 <div class="row">
//                                     <div class="col-md-12 col-s-12">
//                                         <span style={{ fontSize: 64, color: "green" }}>126</span>&nbsp;<span style={{ fontSize: 32 }}>Projects Live</span>
//                                     </div>
//                                     <div class="col-md-12 col-s-12">
//                                         <span style={{ fontSize: 64, color: "navy" }}>734</span>&nbsp;<span style={{ fontSize: 32 }}>Registered Users</span>
//                                     </div>
//                                 </div>
//                             </StatsRight>

//                         </div>
//                     </div>
//                 </StatsContainer>
//                 {/* statistics end */}

//                 {/* contact start */}
//                 <ContactContainer>
//                     <div class="row">
//                         <div class="col-md-6 col-s-12">
//                             <ContactformContainer>
//                                 <CCard>
//                                     <CCardBody>
//                                         <CContainer>
//                                             <CRow>
//                                                 <CCol sm="12" lg="12">
//                                                     <CForm>
//                                                         <h2>Contact Us</h2>
//                                                         <CFormGroup className="my-2">
//                                                             <CLabel htmlFor="ccyear">Email</CLabel>
//                                                             <CInput
//                                                                 type="text"
//                                                             />
//                                                         </CFormGroup>
//                                                         <CFormGroup className="my-2">
//                                                             <CLabel htmlFor="ccyear">Inquiry Title</CLabel>
//                                                             <CInput
//                                                                 type="text"
//                                                             />
//                                                         </CFormGroup>
//                                                         <CFormGroup className="my-2">
//                                                             <CLabel htmlFor="ccyear">Inquiry</CLabel>
//                                                             <CInput
//                                                                 type="text"
//                                                             />
//                                                         </CFormGroup>
//                                                         <CButton
//                                                             className="mr-1 w-25"
//                                                             color="success"
//                                                             onClick={addToast}
//                                                         >
//                                                             Send Message
//                                                         </CButton>
//                                                     </CForm>
//                                                 </CCol>
//                                                 <CCol sm="12" lg="6">
//                                                     {Object.keys(toasters).map((toasterKey) => (
//                                                         <CToaster
//                                                             position={toasterKey}
//                                                             key={'toaster' + toasterKey}
//                                                         >
//                                                             {
//                                                                 toasters[toasterKey].map((toast, key) => {
//                                                                     return (
//                                                                         <CToast
//                                                                             key={'toast' + key}
//                                                                             show={true}
//                                                                             autohide={toast.autohide}
//                                                                             fade={toast.fade}
//                                                                         >
//                                                                             <CToastHeader closeButton={toast.closeButton} style={{ backgroundColor: "green", color: "white" }}>
//                                                                                 Message Sent
//                                                                              </CToastHeader>
//                                                                             <CToastBody>
//                                                                                 {`Your inquiry has been sent, we will respond to you within 3-5 working days.`}
//                                                                             </CToastBody>
//                                                                         </CToast>
//                                                                     )
//                                                                 })
//                                                             }
//                                                         </CToaster>
//                                                     ))}
//                                                 </CCol>
//                                             </CRow>
//                                         </CContainer>
//                                     </CCardBody>
//                                 </CCard>
//                             </ContactformContainer>
//                         </div>
//                         <div class="col-md-6 col-s-12">
//                             <BannerImgContainer>
//                                 <BannerImg src={contactImage} alt="no-img"></BannerImg>
//                             </BannerImgContainer>
//                         </div>
//                     </div>
//                 </ContactContainer>
//                 {/* constact end */}


//             </LandingBody>

//             <footer>
//                 <FooterContainer>

//                 </FooterContainer>
//             </footer>
//         </Fragment>

//     )
// }

// export default Landing
