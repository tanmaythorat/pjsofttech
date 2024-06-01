import React from 'react'
import './FacultyManagementSystem.css';
import { Card, Row, Col, Container } from "react-bootstrap";
const FacultyManagementSystem = () => {
  const blogs = [
    {
      id: 1,
      title: "Streamlined Automated Operations",
      image:
        "https://www.mastersofterp.com/images/quick-operations.webp",
      content:
        "Experience the efficiency of streamlined automated operations with our advanced ERP system. Our solution automates a wide range of processes across various departments, minimizing manual intervention and reducing the risk of errors.",
    },
    {
      id: 2,
      title: "Accurate Reporting System",
      image:
        "https://www.mastersofterp.com/images/accurate-reports.webp",
      content:
        "Generate a wide array of customizable reports, tailored to fit your institution's specific format requirements, ensuring you are always compliance-ready.",
    },
    {
      id: 3,
      title: "BI Dashboards",
      image:
        "https://www.mastersofterp.com/images/bi-dashboard.webp",
      content:
        "Gain insights from critical faculty data with dynamic dashboards that present real-time information in a statistical format.",
    },
  ];
  return (
    <div>
      <div className="row" style={{ position: "relative" }}>
        <div className="col">
          <img
            className="im1"
            src="https://www.interfolio.com/wp-content/uploads/iStock-980838288.jpg"
          ></img>
        </div>
        <div className="col div1">
          <h1 className="h1">Comprehensive Faculty Management System</h1>
          <p className="top_text">
          A comprehensive faculty management system is essential for effectively handling all aspects of faculty administration within educational institutions. This robust system streamlines the recruitment process by automating job postings, applicant tracking, and interview scheduling. Once candidates are hired, it facilitates a smooth onboarding process with digital forms, orientation materials, and training resources.
          </p>
        </div>
      </div>

      <div className="container-fluid p-5 text-center mt-3">
        <h1>
      Integrated ERP solution provides total control over all aspects of your organization, ensuring seamless and efficient management of resources, operations, and processes.
        </h1>
        <p className="mt-4">
        Procurement and inventory management are optimized through automated purchase orders, stock level monitoring, and supplier management, ensuring that resources are always available when needed. The ERP system also supports project management, enabling efficient planning, execution, and monitoring of projects across the organization.
        </p>
      </div>

      <div className="div2">
        <Container className="mt-5">
          <Row>
            {blogs.map((blog, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <Card className="d-flex justify-content-center align-items-center bg-light">
                  <Card.Img
                    className="img2"
                    variant="top"
                    src={blog.image}
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "cover",
                    }}
                  />

                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center align-items-center">
                      {blog.title}
                    </Card.Title>
                    <Card.Text>{blog.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>
            The Digital Recruitment Management System revolutionizes the hiring process by leveraging digital technologies to streamline and optimize recruitment operations. This comprehensive system encompasses various functions, from job posting and candidate sourcing to application tracking and hiring decision-making.
              <br /> <br /> At its core, the Digital Recruitment Management System provides a centralized platform for posting job vacancies, reaching a wider pool of candidates through online channels such as job boards, social media platforms, and professional networking sites. It automates the process of collecting and managing applications, allowing recruiters to efficiently review candidate profiles, screen resumes, and schedule interviews.
              <br />
              <br /> Moreover, the system facilitates seamless communication between recruiters, hiring managers, and candidates through integrated messaging features and collaboration tools. It provides visibility into the recruitment pipeline, enabling stakeholders to track the progress of each job opening and monitor key metrics such as time-to-fill and candidate conversion rates.
            </p>
          </div>
          <div className="col">
            <h1 className="pt-4 pb-2 text-center">Digital Recruitment Management System</h1>
            <img
              src="https://www.streebo.com/wp-content/themes/streebo/images/recruitment-management-system/recruitment-management-system-left.png"
              alt="img"
              className="image"
            ></img>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col">
            <h1 className="pt-4 pb-2">Leave Management System</h1>
            <img
              src="https://www.scnsoft.com/_default_upload_bucket/leave-management-software.png"
              className="image2"
              alt="img"
            ></img>
          </div>
          <div className="col sub">
            <p>
            The Leave Management System is a comprehensive tool designed to streamline and automate the process of managing employee leaves within an organization. At its core, this system provides a centralized platform where employees can request leaves, managers can approve or deny requests, and HR personnel can track leave balances and maintain accurate records.
              <br />
              <br />HR administrators benefit from the system's ability to track leave balances, accruals, and usage patterns for each employee. This data can be used to generate reports and analytics, providing insights into employee leave trends and helping HR teams make informed decisions about resource allocation and staffing levels.
              <br /> <br />
              Furthermore, the Leave Management System automates the calculation of leave entitlements, ensuring accuracy and consistency in leave calculations. It also helps organizations stay compliant with labor laws and company policies by enforcing leave policies and regulations automatically.
              <br /> <br /> Overall, the Leave Management System simplifies leave management processes, reduces administrative burden, and improves efficiency for both employees and HR staff. By providing a user-friendly interface, automated workflows, and robust reporting capabilities.
            </p>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>
            The Employee Service Record System provides a comprehensive repository for managing and maintaining detailed records of an organization's workforce. It serves as a centralized database where essential employee information, such as personal details, employment history, training records, performance evaluations, and disciplinary actions, is securely stored and organized.
              <br /><br/>This system facilitates efficient record-keeping by automating data entry processes and ensuring data integrity through standardized formats and validation rules. HR administrators can easily access and update employee records, track changes over time, and generate reports for various purposes, including compliance, auditing, and decision-making.
              <br /> <br /> Moreover, the Employee Service Record System supports the tracking of employee milestones and achievements, such as promotions, awards, and certifications, enabling organizations to recognize and reward employee contributions effectively. It also facilitates workforce planning by providing insights into staffing levels, skill gaps, and talent development opportunities.</p>
          </div>
          <div className="col">
            <h1 className="pt-4 pb-2 text-center">Employee Service Record System</h1>
            <img
              className="image"
              src="https://cdn.techjockey.com/blog/wp-content/uploads/2021/10/Employee-Record-Management.jpg"
              alt="img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyManagementSystem