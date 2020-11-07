import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CCard,
} from "@coreui/react";
//import { DocsLink } from "src/reusable";

const ViewAllProject = () => {
  const projectsData = [
    {
      id: 0,
      projectdetails : "15 Five",
      projecttype: "Module Project",
      projectidentifier: "CS3240",
      vacancy: "6/6",
      status: "ONGOING",
    },
    {
      id: 1,
      projectdetails : "Associations Now",
      projecttype: "Module Project",
      projectidentifier: "CS3240",
      vacancy: "3/5",
      status: "OPEN",
    },
    {
      id: 2,
      projectdetails : "Fast Ball",
      projecttype: "Public Project",
      projectidentifier: "Language",
      vacancy: "2/4",
      status: "OPEN",
    },
    {
      id: 3,
      projectdetails : "Next Gala",
      projecttype: "Module Project",
      projectidentifier: "AH2101",
      vacancy: "2/4",
      status: "OPEN",
    },
    {
      id: 4,
      projectdetails: "Evening Shindig",
      projecttype: "Module Project",
      projectidentifier: "CE3116",
      vacancy: "3/4",
      status: "OPEN",
    },
    {
      id: 5,
      projectdetails: "Super Happy Fun Time!",
      projecttype: "Module Project",
      projectidentifier: "LL4032",
      vacancy: "5/5",
      status: "CLOSED",
    },
    {
      id: 6,
      projectdetails: "A Night to Celebrate",
      projecttype: "Module Project",
      projectidentifier: "CS3240",
      vacancy: "1/5",
      status: "OPEN",
    },
    {
      id: 7,
      projectdetails: "An Evening Affair",
      projecttype: "Public Project",
      projectidentifier: "Tech",
      vacancy: "2/4",
      status: "OPEN",
    },
    {
      id: 8,
      projectdetails: "The Morning Ceremony",
      projecttype: "Module Project",
      projectidentifier: "AH2101",
      vacancy: "2/4",
      status: "OPEN",
    },
    {
      id: 9,
      projectdetails: "The Coding Awards",
      projecttype: "Module Project",
      projectidentifier: "CE3116",
      vacancy: "3/4",
      status: "OPEN",
    },
    {
      id: 10,
      projectdetails: "A Triumph of Softwares",
      projecttype: "Module Project",
      projectidentifier: "LL4032",
      vacancy: "5/5",
      status: "CLOSED",
    },
    {
      id: 11,
      projectdetails: "The Wonders of Geek",
      projecttype: "Module Project",
      projectidentifier: "CS3240",
      vacancy: "1/5",
      status: "OPEN",
    },
    {
      id: 12,
      projectdetails: "Ceremony Worthy of time",
      projecttype: "Public Project",
      projectidentifier: "Tech",
      vacancy: "2/4",
      status: "OPEN",
    },
    {
      id: 13,
      projectdetails: "In Recognition of Codes",
      projecttype: "Module Project",
      projectidentifier: "AH2101",
      vacancy: "2/4",
      status: "OPEN",
    },
    {
      id: 14,
      projectdetails: "Moving Bird",
      projecttype: "Module Project",
      projectidentifier: "CE3116",
      vacancy: "4/4",
      status: "ONGOING",
    },
    {
      id: 15,
      projectdetails: "The Blue Bird",
      projecttype: "Module Project",
      projectidentifier: "LL4032",
      vacancy: "4/5",
      status: "OPEN",
    },
    {
      id: 16,
      projectdetails: "Social Geek Made",
      projecttype: "Module Project",
      projectidentifier: "CS3240",
      vacancy: "2/5",
      status: "OPEN",
    },
    {
      id: 17,
      projectdetails: "Made by Me",
      projecttype: "Public Project",
      projectidentifier: "Language",
      vacancy: "2/4",
      status: "OPEN",
    },
    {
      id: 18,
      projectdetails: "The Discovery of Era",
      projecttype: "Module Project",
      projectidentifier: "AH2101",
      vacancy: "2/4",
      status: "OPEN",
    },
    {
      id: 19,
      projectdetails: "Remembering Our Ancestors",
      projecttype: "Module Project",
      projectidentifier: "CE3116",
      vacancy: "2/2",
      status: "CLOSED",
    },
    {
      id: 20,
      projectdetails: "Meetup for the Good",
      projecttype: "Module Project",
      projectidentifier: "LL4032",
      vacancy: "4/5",
      status: "OPEN",
    },
  ];

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(projectsData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "projectdetails", label: "Project Details", _style: { width: "25%" } },
    { key: "projecttype", label:"Project Type", _style: { width: "20%" } },
    { key: "projectidentifier", label:"Project Identifier", _style: { width: "20%" } },
    { key: "vacancy", _style: { width: "10%" } },
    { key: "status", _style: { width: "10%" } },
    {
      key: "action",
      sorter: false,
      filter: false,
    },
  ];

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

  const history = useHistory()

  const pageChange = () => {
    history.push(`/project/project-details`)
  }

  return (
    <CCard>
      <CCardBody>
        <CDataTable 
          items={projectsData}
          fields={fields}
          columnFilter
          tableFilter={{label: "Search:", placeholder: "Type any keyword"}}   
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
            'action': (item) => {
              return (
                <td className="py-2">
                  <CButton size="sm" color="info" onClick={pageChange}>VIEW DETAILS</CButton>     
                </td>
              );
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default ViewAllProject;
