import React from 'react'
import './LearningManagementSystem.css';
import { Card, Row, Col, Container } from "react-bootstrap";
const LearningManagementSystem = () => {
  const blogs = [
    {
      id: 1,
      title: "Analytics & Reporting ",
      image:
        "https://www.mastersofterp.com/images/Reporting-&-Analytics.webp",
      content:
        "Reporting and analytics tools allow educators to assess student performance across various metrics, including grades, attendance, and participation. By analyzing this data, educators can identify areas where students may be struggling and tailor instructional strategies to meet individual learning needs.",
    },
    {
      id: 2,
      title: "Survey Creation Tool",
      image:
        "https://www.mastersofterp.com/images/Create-Survey.webp",
      content:
        "Our survey creation tool empowers users to design and deploy surveys quickly and easily, facilitating data collection and analysis for various purposes. With a user-friendly interface and customizable features, creating surveys tailored to specific needs is straightforward.",
    },
    {
      id: 3,
      title: "Tailored User Permissions System",
      image:
        "https://www.mastersofterp.com/images/Customized-User-Roles.webp",
      content:
        "Our tailored user permissions system offers granular control over access and functionality within your organization's platform. With customized user roles, you can assign specific permissions and restrictions to different user groups based on their responsibilities and requirements.",
    },
  ];

  return (
    <div>
      <div className="row" style={{ position: "relative" }}>
        <div className="col">
          <img
            className="im1"
            src="https://www.kerntraining.com/fileadmin/user_upload/Images_Allgemein/Slider_TR/LMS-Integration.jpg"
          ></img>
        </div>
        <div className="col div1">
          <h1 className="h1">Learning Management System</h1>
          <p className="top_text">
          The Learning Management System (LMS) is a comprehensive platform designed to facilitate the delivery, management, and tracking of educational courses and training programs. At its core, the LMS provides a centralized hub where instructors can create and upload course content, students can access learning materials, and administrators can monitor progress and performance.
          </p>
        </div>
      </div>

      <div className="container-fluid p-5 text-center mt-3">
        <h1>
        E-learning software has become increasingly vital in Higher Education Institutions (HEIs) due to its transformative impact on teaching and learning. 
        </h1>
        <p className="mt-4">
        E-learning software facilitates continuous assessment and feedback, allowing educators to monitor student progress in real-time and provide timely feedback on assignments and assessments. This immediate feedback loop promotes student learning and helps identify areas where additional support may be needed.
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
            The Course Administration & Analytics Suite is a comprehensive platform designed to streamline course management processes and provide valuable insights through advanced analytics. This suite empowers educational institutions to efficiently administer and monitor their courses while gaining deeper understanding and optimization opportunities through data-driven analytics.
              <br /> <br />At its core, the suite offers robust tools for managing course logistics, including scheduling, enrollment, and resource allocation. Administrators can easily create and organize course offerings, set up class schedules, manage student enrollments, and allocate resources such as classrooms, instructors, and materials—all from a centralized platform.
              <br />
              <br />Furthermore, the suite's analytics capabilities provide actionable insights into various aspects of course performance and effectiveness. Through advanced reporting and analytics features, administrators can track key metrics such as student attendance, participation, grades, and completion rates. These insights enable institutions to identify trends, assess the impact of instructional strategies, and make data-driven decisions to improve course quality and student outcomes.
            </p>
          </div>
          <div className="col">
            <h1 className="pt-4 pb-2 text-center">Course Administration & Analytics Suite</h1>
            <img
              src="https://images.prismic.io/edapp-website/c4bfe4c4-6c6f-465e-8d45-9b43e7e8cdf2_Admin-analaytics-hero.png?auto=format,compress"
              alt="img"
              className="image"
            ></img>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col">
            <h1 className="pt-4 pb-2">Syllabus Creation & Curriculum Mapping Platform</h1>
            <img
              src="https://t3.ftcdn.net/jpg/03/65/85/48/360_F_365854836_mVMWeN9imQKYBKhnBPNduApnzYoKFoor.jpg"
              className="image2"
              alt="img"
            ></img>
          </div>
          <div className="col sub">
            <p>
            The Syllabus Creation & Curriculum Mapping Platform offers educators a centralized tool to efficiently develop syllabi and teaching plans while ensuring alignment with curriculum standards and learning objectives. This platform enables educators to create detailed syllabi that outline course objectives, topics, assignments, assessments, and learning outcomes.
              <br />
              <br />With intuitive drag-and-drop interfaces and customizable templates, educators can easily organize course content and sequence it according to the curriculum framework. The platform provides flexibility to incorporate multimedia resources, learning materials, and interactive elements to enhance the learning experience.
              <br /> <br />
              Moreover, the platform facilitates curriculum mapping by allowing educators to align course content with learning standards, competencies, and educational goals. This ensures that the syllabi are in sync with institutional objectives and accreditation requirements.
              <br /> <br /> Additionally, the platform supports collaboration among educators by enabling real-time sharing and feedback on syllabi and teaching plans. Educators can work together to refine course content, integrate interdisciplinary themes, and adapt teaching strategies to meet the diverse needs of learners.
            </p>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>
            The Online Assignment Tool & Scheduling platform offers educators and students a streamlined solution for managing assignments and scheduling deadlines in an online learning environment. This platform facilitates the creation, distribution, submission, and grading of assignments, while also providing features for scheduling and tracking deadlines.
              <br /><br/>Educators can easily create and customize assignments, specifying instructions, due dates, and submission formats. The platform supports a variety of assignment types, including essays, quizzes, presentations, and group projects, allowing for flexibility in assessment methods.
              <br /> <br /> Furthermore, the platform offers scheduling tools that enable educators to set deadlines and milestones for assignments, exams, and other course activities. Students receive notifications and reminders about upcoming deadlines, helping them stay organized and manage their workload effectively.</p>
          </div>
          <div className="col">
            <h1 className="pt-4 pb-2 text-center">Online Assignment Tool & Scheduling</h1>
            <img
              className="image"
              src="https://eclassopedia.com/wp-content/uploads/2023/07/A-Solution-for-Busy-Students-and-Parents-Alike-1024x683.webp"
              alt="img"
            ></img>
          </div>
        </div>
      </div>

      
      <div className="container div3">
        <div className="row">
          <div className="col">
            <h1 className="pt-4 pb-2">Internal Chat & Mailing</h1>
            <img
              src="https://www.sweetprocess.com/wp-content/uploads/2022/02/LMS-5-warning-signs-1-1150x642-1.png"
              className="image2"
              alt="img"
            ></img>
          </div>
          <div className="col sub">
            <p>
            The internal chat and mailing system is a versatile communication tool designed to facilitate seamless collaboration and information exchange within an organization. This integrated platform combines instant messaging and email functionalities, providing users with a centralized hub for real-time communication and correspondence.
              <br />
              <br />In addition to instant messaging, the mailing system allows users to send and receive emails directly within the platform. Users can compose emails, attach files, and manage their inbox, all from a single interface. This integration streamlines communication processes and eliminates the need to switch between multiple applications for internal correspondence.
              <br /> <br />
              Furthermore, the internal chat and mailing system prioritizes security and privacy, ensuring that sensitive information shared within the platform is protected. Users can control access to their conversations and emails, and administrators can implement security measures such as encryption and authentication protocols to safeguard data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningManagementSystem;