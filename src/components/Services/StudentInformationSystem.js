import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./StudentInformationSystem.css";

const StudentInformationSystem = () => {
  const blogs = [
    {
      id: 1,
      title: "Student data Security",
      image: "https://icons.veryicon.com/png/o/education-technology/school-general-icon/student-information.png",
      content:
        "Protecting the integrity and confidentiality of student data is paramount in today's educational landscape. To safeguard sensitive information effectively, institutions must deploy comprehensive security measures within their Student Information Systems (SIS). Here's how you can ensure the utmost security for student data:",
    },
    {
      id: 2,
      title: "Scholarship Management",
      image: "https://w7.pngwing.com/pngs/665/652/png-transparent-education-student-information-system-management-learning-student-microphone-class-people-thumbnail.png",
      content:
        "Managing scholarships efficiently is crucial for educational institutions and organizations to ensure that financial aid reaches the most deserving candidates. An effective scholarship management system can streamline processes, improve communication, and enhance the overall experience.",
    },
    {
      id: 3,
      title: "Examination Module",
      image: "https://static.thenounproject.com/png/984922-200.png",
      content:
        "Ensuring compliance with state regulatory requirements is a critical responsibility for educational institutions. To facilitate this process and mitigate risks, institutions can implement tailored reporting systems that are easily configurable to align with both institutional needs and regulatory prerequisites. Additionally, a robust examination module can automate exam",
    },
    {
      id: 4,
      title: "Course Management",
      image: "https://icons.veryicon.com/png/128/education-technology/school-general-icon/certificate-46.png",
      content:
        "Effective course management is essential for providing quality education and maintaining institutional standards. A comprehensive course management system helps in planning, scheduling, and monitoring course delivery. It also facilitates communication between faculty and students, ensuring that course objectives are met efficiently.",
    },
    {
      id: 5,
      title: "Security and Privacy",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmrTJZrejbMpdFkJcYgtuskzXri10UCIJqB--rr_7tuIxUSrUe8ZmcD0a_lPUTKpWWLs&usqp=CAU",
      content:
        "Efficient campus operations are essential for ensuring the smooth functioning of educational institutions. To streamline processes and enhance productivity, institutions can leverage customizable solutions that seamlessly integrate institute-specific workflows, automating every facet of the process, Customizable solutions.",
    },
    {
      id: 6,
      title: "Attendance and Tracking",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-swear-1478844-1250514.png",
      content:
        "Ensuring compliance with state regulatory requirements is a critical responsibility for educational institutions. To facilitate this process and mitigate risks, institutions can implement tailored reporting systems that are easily configurable.",
    },
    {
      id: 7,
      title: "24*7 Support",
      image: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
      content:
        "Providing round-the-clock support is crucial for addressing the diverse needs of students, faculty, and staff. A 24*7 support system ensures that technical issues, queries, and concerns are promptly resolved, enhancing the overall experience and minimizing disruptions to the learning process.",
    },
    {
      id: 8,
      title: "Reports and Dashboard",
      image: "https://www.4me.com/wp-content/uploads/2019/03/4me-icon-dashboard.png",
      content:
        "Effective decision-making relies on accurate and timely information. Implementing comprehensive reports and dashboards allows educational institutions to visualize data, track key performance indicators, and generate insights that drive strategic planning and operational improvements.",
    },
    {
      id: 9,
      title: "Next Generation Software",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT003mM6ayyH3qHORxwe14gGfRaNHLS-xMXug&s",
      content:
        "Adopting next-generation software solutions is essential for staying ahead in the rapidly evolving educational landscape. These advanced systems offer innovative features, enhanced user experience, and greater flexibility, enabling institutions.",
    },
  ];

  return (
    <>
      <div>
        <div className="row" style={{ position: "relative" }}>
          <div className="col">
            <img
              src="https://www.mastersofterp.com/images/higher-ed-sims-banner.webp"
              alt="student_photo"
            />
          </div>
          <div className="col div1">
            <h1 className="h1">
              <div className="h1-content">
                <span className="span">A</span>dvanced Student{" "}
                <span className="span">I</span>nformation{" "}
                <span className="span">M</span>anagement Platform
              </div>
            </h1>
            <p className="top_text">
              Institutions of higher education are continuously striving to
              optimize their operations while simultaneously enhancing the
              student experience. The adoption of an integrated modular student
              information system (M-SIS) presents a transformative opportunity
              to streamline daily institutional functions, harness real-time,
              accurate data, and propel efforts toward student retention,
              improved learning outcomes, and the attainment of institutional
              objectives.
            </p>
          </div>
        </div>

        <div className="container-fluid p-5 text-center mt-3">
          <h2>
            Flexible Modular Student Information System: Empowering Adaptability
          </h2>
          <p className="mt-4">
            Integrate Workflow-Enabled Systems for Enhanced Adaptability with a
            Customized Higher Ed SIS. Centralize Student Data Management with
            Role-Based Access Control in Student Management Software,
            Facilitating Interdepartmental Collaboration and Data Segregation
            for Improved Security.
          </p>
        </div>
        <div>
        <h2 className="text-center mt-5 key-features">Key Features</h2>
        </div>
        
        <div className="div2">
          <Container className="mt-5">
            <Grid container spacing={3}>
              {blogs.map((blog) => (
                <Grid item key={blog.id} lg={4} md={6} className="mb-4">
                  <Card className="d-flex justify-content-center align-items-center bg-light">
                    <CardMedia
                      component="img"
                      image={blog.image}
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        className="d-flex justify-content-center align-items-center"
                      >
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {blog.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>

        

        <div className="container div3">
        <div className="row">
          <div className="col sub">
            <h4>Pre-Enrollment Management</h4>
            <p>EEffortlessly handle student applications by integrating with your Student Information System (SIS) to create an extensive merit list database. Automate the sending of system-generated offer letters via email for efficient communication with prospective students. Enhance financial management with a versatile fee collection system that calculates fees based on course or subject weightages.</p>
            <h4>Enrollment Process</h4>
            <p>Achieve seamless student information processing by integrating with lead management systems, eliminating redundancy and improving efficiency. Simplify the bulk generation of registration IDs and provide adaptable fee collection options through online portals or offline methods, ensuring convenience for all students.</p>
            <h4>Post-Enrollment Services</h4>
            <p>Enhance document verification and repository setup immediately upon enrollment confirmation by securely storing scanned student documents in the institute’s database. Efficiently generate enrollment numbers in bulk and resolve issues promptly with a sophisticated help desk ticketing system, ensuring effective and smooth post-enrollment operations.</p>
          </div>
          <div className="col">
          <h1 className="pt-4 pb-2 text-center">Admissions Management System</h1>
          <img className="Img1" src="https://images.squarespace-cdn.com/content/v1/5f8a1cfb2ad7a514c3fa8a88/1604354481681-DK4Y4SUFVKZ9D6BD4IC1/Choosing-a-SIS.png" alt="img"></img>
          </div>
        </div>
      </div>



      <div className="container div4">
        <div className="row">
        <div className="col">
          <h1 className="pt-4 pb-2 text-center">Fee Management System</h1>
          <img src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/2/d/2d59f7935798471b31ae5e80195c06a14f374ab6bc6eca5eb38d3fc12da8ecfe/fee-management-slide1.png" alt="img"></img>
          </div>
          <div className="col sub">
            <h4>Enrollment Processing</h4>
            <p>Streamline student information processing through seamless integration with lead management systems, reducing redundancy and enhancing efficiency. Facilitate bulk registration ID generation and offer flexible fee collection options through both online portals and offline channels, ensuring convenience for all students.</p>
            <h4>Fee Types Definition</h4>
            <p>Efficiently Manage Student Applications with SIS Integration to Build a Comprehensive Merit List Database. Automate the Dispatch of System-Generated Offer Letters via Email for Seamless Communication with Prospective Students. Optimize Financial Operations with a Dynamic Fee Collection System that Calculates Fees Based on Course/Subject Weightages.</p> 
            <h4>Post-Enrollment Services</h4>
            <p>Enhance document verification and repository setup immediately upon admission confirmation by securely storing scanned student documents in the institution’s database. Efficiently generate enrollment numbers in bulk and ensure prompt issue resolution with an advanced help desk ticketing system, ensuring smooth and effective post-enrollment operations.</p>
          </div>
        </div>
      </div>


      <div className="container div5">
        <div className="row">
          <div className="col sub">
            <h4>Hostel Enrollment</h4>
            <p>After configuring hostel details within the system—such as the number of hostels, blocks, rooms, and amenities—the admission procedure transitions to an online format. Students have the option to be assigned rooms automatically, based on either merit-based criteria or a first-come, first-served basis.</p>
            <h4>Cafeteria Management</h4>
            <p>Integrate a cafeteria module within the system, associating it with individual hostels or clusters of hostels, and defining cafeteria charges and expenses. Maintain comprehensive records of cafeteria personnel and inventory. Automate monthly expenditure calculations and effortlessly generate individual cafeteria bills for students.</p>
            <h4>Hostel Financial Management</h4>
            <p>Overseeing hostel financial affairs, encompassing payments for both hostel and cafeteria fees, staff salaries, and additional expenses. Harnessing the integrated functionalities of the student management software facilitates smooth handling of hostel penalties and fees via various online payment gateways.</p>
          </div>
          <div className="col">
          <h1 className="pt-4 pb-2 text-center">Hostel Management</h1>
          <img className="Img2" src="https://5.imimg.com/data5/SELLER/Default/2023/12/366607362/UW/BL/LH/49179336/hostel-management-system-500x500.png" alt="img"></img>
          </div>
        </div>
      </div>


      <div className="container div6">
        <div className="row div4">
        <div className="col">
          <h1 className="pt-3 pb-2 text-center">E Learning</h1>
          <img src="https://www.scnsoft.com/education-industry/elearning-portal/elearning-portals-cover-picture.svg" alt="img"></img>
          </div>
          <div className="col sub">
            <h4>Interactive Learning Platforms</h4>
            <p>Unlocking the Power of Modern Educational Software: Leveraging Technology to Elevate Student Participation. Providing an Immersive Teaching-Learning Experience through Web-Based Platforms. Integrating Student Information Systems (SIS) with Learning Management Systems (LMS) for Enhanced Online Learning.</p>
            <h4>Faculty Engagement</h4>
            <p>Empowering Educators with Advanced Tools for Seamless Interaction with Today's Learners. Embracing Digital Innovations to Connect Effortlessly with Students. Enabling Information Sharing, Resource Management, Forum Moderation, Syllabus Design, Lecture Delivery, and FAQ Assistance through Integrated Systems.</p>
            <h4>Students Experience</h4>
            <p>Embracing Diverse Online Activities, Students Effortlessly Participate in Online Assessments, Submit Assignments, Access E-libraries, Engage in Discussions, and More. Stay Updated on Teaching Schedules and Receive Notifications via SMS, Email, or the Dedicated Mobile App Integrated with the Student Information System.</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default StudentInformationSystem;
