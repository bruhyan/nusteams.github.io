import React, { lazy, Component, useState } from 'react'
import {
  CBadge,
  CButton,
  CTextarea,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem
} from '@coreui/react'

import {
  Alert, Progress
} from "reactstrap";

import CIcon from '@coreui/icons-react'

class ProjectDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      alertVisible: false,
      alertColor: "success",
      alertMessage: "Request is sent successfully!",
    }

  }

  send_request() {
    if (this.state.sent == false) {
      this.setState({ sent: true })
      console.log('send')
      // this.setState({
      //   alertVisible: true
      // alertColor: 'success',
      // alertMessage: message,
      // });
      this.onDismiss();
      // React.useState(10)
      // setVisible(10)
      setTimeout(this.onDismiss, 3000);
    }
  }
  onDismiss = () => {
    this.setState({ alertVisible: !this.state.alertVisible });
  };

  render() {
    return (
      <>
        {/* <WidgetsDropdown /> */}
        {/* <CAlert
              color={this.state.alertColor}
              show={this.state.alertVisible}
              closeButton
              // onShowChange={onDismiss}
              style={{ position: "fixed", top: "2rem", right: "1rem" }}
            >
              {this.state.alertMessage}
            </CAlert> */}
        <Alert
          color={this.state.alertColor}
          isOpen={this.state.alertVisible}
          toggle={this.onDismiss}
          style={{ position: "fixed", top: "2rem", right: "1rem", zIndex: "100000" }}
        >
          {this.state.alertMessage}
        </Alert>
        <CCard>

          <CCardBody>
            <CRow>
              <CCol sm='12' md="5">
                <div className="custome-tag">
                  <img
                    src="avatars/2102.jpg"
                    alt="project cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      marginBottom: "1rem",
                    }}
                  />
                  <p style={{ fontWeight: "bold" }}>Reqest Message</p>

                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="5"
                    placeholder="Content..."
                    className={this.state.sent == true ? "disabled" : ""}
                  />
                  <br />
                  <CButton block color={this.state.sent == true ? "dark" : "info"} onClick={() => this.send_request()} className={this.state.sent == true ? "disabled" : ""}>
                    Request to Join
                          </CButton>
                </div>
              </CCol>
              <CCol sm="12" md="7">
                <CListGroup>
                  <CListGroupItem style={{ padding: "30px" }}><h1 id="traffic" className="card-title mb-0" style={{}}>
                    CS3240 Design Project
                          </h1></CListGroupItem>
                  <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Project Type:</span>     Module Project</p></CListGroupItem>
                  <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Module Code:</span>     CS3240</p></CListGroupItem>
                  <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Skill Requirement:</span>     JavaScript, Java, Python</p></CListGroupItem>
                  <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Vacancy:</span>     4/5</p></CListGroupItem>
                  <CListGroupItem style={{ paddingLeft: "30px", paddingTop: "30px", paddingBottom: "20px", paddingTop: "20px" }}><span style={{ color: "gray" }} >Status:     </span><CBadge className="mr-1" color="success" shape="pill">OPEN</CBadge></CListGroupItem>
                  <CListGroupItem><p style={{ margin: "10px" }}><span style={{ color: "gray" }} >Application Deadline:</span>     2020-11-30</p></CListGroupItem>
                  <CListGroupItem style={{ paddingLeft: "30px", paddingTop: "30px", paddingBottom: "20px", paddingTop: "20px" }}><span style={{ color: "gray" }} >Description:     </span>Hi Guys, this is team DB Master from CS2102, we are currently looking for two more students who are interested in database implementition and web development! Feell free to send your request!</CListGroupItem>
                </CListGroup>

              </CCol>
            </CRow>
            {/* <MainChartExample style={{height: '300px', marginTop: '40px'}}/> */}
          </CCardBody>
          {/* <CCardFooter>    
              </CCardFooter> */}
        </CCard>
        <CCard>
          <CCardBody>
            <CRow>
              <CCol sm='12' md="12">
                <h3>Teammates</h3>
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
                        <CButton block color="info">
                          View Profile
                              </CButton>
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
                        Inforamtion Systems
                            </td>

                      <td className="text-center">
                        3
                            </td>
                      <td>
                        <CButton block color="info">
                          View Profile
                              </CButton>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardBody>
            <CRow>
              <CCol sm='6' md='10'>
                <h3>Updates</h3>

              </CCol>
              <CCol sm='6' md='2' style={{ float: "right" }}>
                {/* <CButton  block color="info">
                      + Add
                    </CButton> */}
              </CCol>
              <CCol sm='12' md="12">

                <CCard>
                  <CCardBody style={{ padding: "0" }}>
                    <CRow style={{ width: "inherit" }}>
                      <CCol sm='12' md="3" >
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

              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </>
    )
  }

}



export default ProjectDetails



// const ProjectDetails = () => {
//   const [visible, setVisible] = React.useState(10);
//   var sent = false;
//   const send_request=()=>{
//         if(sent==false){
//           sent = true
//           console.log('send'+sent)
//         }
//       }
//   return (
//     <>
//       <CCard>
//         <CCardBody>
//           <CRow>
//               <CCol sm='12' md="5">
//                 <div className="custome-tag">
//                     <img
//                         src="avatars/2102.jpg"
//                         alt="project cover"
//                         style={{
//                             width: "100%",
//                             height: "100%",
//                             marginBottom: "1rem",
//                         }}
//                     />
//                     <p style={{fontWeight: "bold"}}>Reqest Message</p>

//                     <CTextarea 
//                       name="textarea-input" 
//                       id="textarea-input" 
//                       rows="5"
//                       placeholder="Content..." 
//                     />
//                     <br/>
//                     <CButton  block color="info" color={sent==true? "dark":"info"} onClick={()=> send_request()} className={sent==true? "disabled":""}>
//                         Request to Join
//                     </CButton>
//                 </div>
//               </CCol>
//               <CCol sm="12" md="7">
//               <CListGroup>
//                 <CListGroupItem style={{padding:"30px"}}><h1 id="traffic" className="card-title mb-0" style={{}}>
//                         CS3240 Design Project
//                     </h1></CListGroupItem>
//                 <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Project Type:</span>     Module Project</p></CListGroupItem>
//                 <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Module Code:</span>     CS3240</p></CListGroupItem>
//                 <CListGroupItem><p style={{margin:"10px"}}><span style={{color:"gray"}} >Vacancy:</span>     4/5</p></CListGroupItem>
//                 <CListGroupItem style={{paddingLeft:"30px",paddingTop:"30px",paddingBottom:"20px",paddingTop:"20px"}}><span style={{color:"gray"}} >Status:     </span><CBadge className="mr-1" color="success" shape="pill">OPEN</CBadge></CListGroupItem>
//                 <CListGroupItem style={{paddingLeft:"30px",paddingTop:"30px",paddingBottom:"20px",paddingTop:"20px"}}><span style={{color:"gray"}} >Description:     </span>Hi Guys, this is team DB Master from CS2102, we are currently looking for two more students who are interested in database implementition and web development! Feell free to send your request!</CListGroupItem>
//               </CListGroup>

//               </CCol>
//           </CRow>
//           {/* <MainChartExample style={{height: '300px', marginTop: '40px'}}/> */}
//         </CCardBody>
//         {/* <CCardFooter>    
//         </CCardFooter> */}
//       </CCard>
//       <CCard>
//         <CCardBody>
//           <CRow>
//             <CCol sm='12' md="12">
//             <h3>Teammates</h3>
//               <table className="table table-hover table-outline mb-0 d-none d-sm-table">
//                   <thead >
//                     <tr>
//                       <th className="text-center"><CIcon name="cil-people" /></th>
//                       <th>User</th>
//                       <th className="text-center">Faculty</th>
//                       <th className="text-center">Major</th>
//                       <th className="text-center">Year</th>
//                       <th className="text-center">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="text-center">
//                         <div className="c-avatar">
//                           <img src={'avatars/tom.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
//                           <span className="c-avatar-status bg-secondary"></span>
//                         </div>
//                       </td>
//                       <td>
//                         <div>Tom Cruise</div>
//                         <div className="small text-muted">
//                           Updated 1 day ago
//                         </div>
//                       </td>
//                       <td className="text-center">
//                       <CIcon name="cil-star" style={{color:"#F3CD03"}} /> <span style={{color:"#F3CD03"}} >4.0</span>
//                       </td>

//                       <td className="text-center">
//                         Computer Science
//                       </td>

//                       <td className="text-center">
//                         4
//                       </td>
//                       <td>
//                         <CButton  block color="info">
//                           View Profile
//                         </CButton>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="text-center">
//                         <div className="c-avatar">
//                           <img src={'avatars/matt.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
//                           <span className="c-avatar-status bg-success"></span>
//                         </div>
//                       </td>
//                       <td>
//                         <div>Matt Damon</div>
//                         <div className="small text-muted">
//                           Updated 1 day ago
//                         </div>
//                       </td>
//                       <td className="text-center">
//                       <CIcon name="cil-star" style={{color:"#F3CD03"}} /> <span style={{color:"#F3CD03"}} >4.0</span>
//                       </td>

//                       <td className="text-center">
//                         Inforamtion Systems
//                       </td>

//                       <td className="text-center">
//                         3
//                       </td>
//                       <td>
//                         <CButton  block color="info">
//                           View Profile
//                         </CButton>
//                       </td>
//                     </tr>

//                   </tbody>
//                 </table>
//             </CCol>
//           </CRow>
//         </CCardBody>
//       </CCard>
//       <CCard>
//         <CCardBody>
//           <CRow>
//             <CCol sm='6' md='10'>
//             <h3>Updates</h3>

//             </CCol>
//             <CCol sm='6' md='2' style={{float:"right"}}>
//               <CButton  block color="info">
//                 + Add
//               </CButton>
//             </CCol>
//             <CCol sm='12' md="12">

//             <CCard>
//             <CCardBody style={{padding:"0"}}>
//               <CRow style={{width:"inherit"}}>
//                 <CCol sm='12' md="3" >
//                 <div className="custome-tag">
//                   <img
//                         src="avatars/recruit.jpg"
//                         alt="project cover"
//                         style={{
//                             width: "100%",
//                             height: "100%"
//                         }}
//                     />
//                 </div>

//                 </CCol>
//                 <CCol sm='12' md="9" style={{verticalAlign:"middle"}} >
//                   <h4 style={{paddingTop:"20px"}}>We are Recruting!</h4>
//                   <p style={{paddingTop:"10px"}}>Hi guys! We are still looking two more students in CS2102! Feel free to contact us!</p>
//                 </CCol>
//               </CRow>
//             </CCardBody>

//             </CCard>

//             </CCol>
//           </CRow>
//         </CCardBody>
//       </CCard>
//     </>
//   )
// }