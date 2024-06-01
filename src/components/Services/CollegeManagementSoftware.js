import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import "./CollegeManagementSystem.css";

const CollegeManagementSystem = () => {
  const blogs = [
    {
      id: 1,
      title: "Elevated Parent-Teacher Engagement",
      image:
        "https://www.mastersofterp.com/images/Enhanced-Parent-Teacher-Communication.webp",
      content:
        "Experience a new level of parent-teacher collaboration with our enhanced communication platform. Our innovative solution facilitates seamless interaction between parents and teachers, fostering a supportive environment for student success.",
    },
    {
      id: 2,
      title: "Streamlined Multi-Campus Coordination",
      image:
        "https://www.mastersofterp.com/images/Automated-Reports-and-Insights.webp",
      content:
        "Our efficient multi-campus management solution is designed to optimize operations across multiple locations, ensuring seamless coordination and collaboration between campuses. With our platform, educational institutions can centralize administrative processes, streamline communication, and enhance efficiency.",
    },
    {
      id: 3,
      title: "Automated Reporting and Analytical Insights",
      image:
        "https://www.mastersofterp.com/images/Efficient-Multi-Campus-Management.webp",
      content:
        "Our automated reports and analytical insights solution revolutionizes the way educational institutions harness data for informed decision-making. By automating the report generation process and providing advanced analytical capabilities, our platform empowers administrators to unlock valuable insights and drive strategic initiatives.",
    },
  ];
  return (
    <div>
      <div className="row" style={{ position: "relative" }}>
        <div className="col">
          <img
            className="im1"
            src="https://www.eedunext.com/assets/images/page-titles/case-two.jpg"
          ></img>
        </div>
        <div className="col div1">
          <h1 className="h1">Cutting-Edge College Management Platform</h1>
          <p className="top_text">
            Unveil the Future of College Management: Your Comprehensive Solution
            for Transforming Operations and Elevating Institutional Success.
            This Next-Generation College Management Software redefines
            efficiency by automating the entire student-faculty lifecycle and
            streamlining campus administration. With its intuitive interface and
            advanced features, this cutting-edge platform offers a modern,
            user-friendly approach to meet all your college management needs.
          </p>
        </div>
      </div>

      <div className="container-fluid p-5 text-center mt-3">
        <h1>
          Embark on a Journey to the Future of College Administration with Our
          Innovative ERP College Software!
        </h1>
        <p className="mt-4">
          Immerse yourself in the future of college administration with our
          revolutionary ERP college software! Our cutting-edge platform is
          designed to revolutionize the way colleges manage their operations,
          offering a seamless experience from admissions to alumni relations.
        </p>
      </div>

      <div>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={10} md={3}>
            <Card>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <Typography variant="h5" component="h2" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {blog.content}
                </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>
              Admission management is a crucial component of any educational
              institution's operations, encompassing the entire process from
              prospective student inquiries to enrollment. Our comprehensive
              admission management solution is designed to streamline this
              process, making it efficient, transparent, and user-friendly.
              <br /> <br /> At the heart of our admission management system is a robust online application portal that allows prospective students to easily submit their applications from anywhere in the world. This portal is customizable to reflect the institution's branding and can be tailored to collect specific information required for each program or course.
              <br />
              <br /> Once applications are received, our system automates the review process, allowing admissions officers to efficiently evaluate each applicant's qualifications, academic records, and supporting documents. Advanced features such as automated document verification and plagiarism detection ensure the integrity of the admissions process.
            </p>
          </div>
          <div className="col">
            <h1 className="pt-4 pb-2 text-center">Admission Management</h1>
            <img
              src="https://www.leadsquared.com/wp-content/uploads/2021/11/Prioritize-response.png"
              alt="img"
              className="image"
            ></img>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col">
            <h1 className="pt-4 pb-2">Comprehensive Student Records Administration</h1>
            <img
              src="https://www.extraaedge.com/wp-content/uploads/2022/02/adoption-education-crm-1.png"
              className="image2"
              alt="img"
            ></img>
          </div>
          <div className="col sub">
            <p>
            Student records administration is a fundamental aspect of managing educational institutions efficiently. Our comprehensive system for student records administration is designed to streamline the management of student data from admission to graduation and beyond.
              <br />
              <br /> At the core of our solution is a centralized database that securely stores and organizes student information, including personal details, academic transcripts, attendance records, and disciplinary history. This centralized repository ensures data integrity and accessibility, enabling authorized personnel to retrieve and update student records as needed.
              <br /> <br />
              Our platform facilitates seamless student enrollment and registration processes, allowing students to submit applications, register for courses, and access academic advising services online. Administrators can track the progress of each student's academic journey, monitor course enrollments, and manage academic standing and degree progress.
              <br /> <br /> Furthermore, our platform supports compliance with regulatory requirements such as the Family Educational Rights and Privacy Act (FERPA), ensuring that student records are handled in accordance with privacy laws and institutional policies.
            </p>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>
            Payroll management is a critical function for educational institutions, ensuring accurate and timely payment to faculty, staff, and administrators. Our comprehensive payroll management solution is designed to streamline financial operations, reduce administrative burden, and enhance compliance with regulatory requirements.
              <br />
              <br /> At the core of our solution is a robust payroll processing engine that automates the calculation of salaries, wages, taxes, and deductions. Our system is flexible and customizable, allowing institutions to configure payroll rules, salary structures, and benefit plans to meet their specific needs and requirements.
              <br /> <br /> Our platform simplifies the payroll process from start to finish, with features such as automated time tracking, leave management, and expense reimbursement. Employees can easily submit timesheets, request time off, and track their earnings and deductions through self-service portals, reducing the need for manual data entry and paperwork.
            </p>
          </div>
          <div className="col">
            <h1 className="pt-4 pb-2 text-center">Payroll Management</h1>
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJWLPBlQLhMqpvBmClS0rwdgviGSIRG-7B13jhPQYrw&s"
              alt="img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeManagementSystem;