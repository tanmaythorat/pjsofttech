import React from "react";
import "./AttendanceManagementSystem.css";
import { Card, Container, Row, Col } from "react-bootstrap";

const AttendanceManagementSystem = () => {
  const blogs = [ 
    {
      id: 1,
      title: "Payroll Integration",
      image: "https://www.mastersofterp.com/images/attendance-Payroll.webp",
      content:
        "Efficiently manage payroll and benefits by integrating attendance summaries directly into your payroll system. Our comprehensive integration automates the calculation of salaries and benefits based on attendance data, including days present, absent, and on leave for faculty members.",
    },
    {
      id: 2,
      title: "Higher Institutional ROI",
      image: "https://www.mastersofterp.com/images/attendance-ROI.webp",
      content:
        "Transform your institution's efficiency and save valuable resources by implementing automated student attendance tracking. With our solution, you can reduce roll call time from minutes to mere seconds, freeing up valuable class time for instruction. ",
    },
    {
      id: 3,
      title: "Paperless Attendance",
      image: "https://www.mastersofterp.com/images/attendance-ROI.webp",
      content:
        "By adopting an online attendance system, your institute takes a significant step towards sustainability by reducing reliance on paper documentation. Embracing digital attendance tracking not only minimizes paper usage but also eliminates the need for printing, storing, and managing physical attendance records.",
    },
  ];

  return (
    <>
      <div>
        <div className="row" style={{ position: "relative" }}>
          <div className="col">
            <img src="https://www.mastersofterp.com/images/Attendance%20Management.webp"></img>
          </div>
          <div className="col div1">
            <h1 className="h1">Simplified Attendance Management System</h1>
            <p className="top_text">
              Effortlessly track student attendance in real-time, providing
              detailed insights on daily and subject-specific attendance with
              just a few clicks. Our automated system streamlines the process,
              ensuring accurate records in a matter of seconds. Additionally,
              students can conveniently request leave and receive instant
              updates, empowering both students and teachers while optimizing
              valuable classroom time.
            </p>
          </div>
        </div>

        <div className="container-fluid p-5 text-center mt-3">
          <h2>
            Simplify salary and payroll processing for faculty and
            administrative staff members by generating comprehensive attendance
            records effortlessly. With just a few clicks, our system streamlines
            the entire process, ensuring accuracy and efficiency.
          </h2>
          <p className="mt-4">
            Empower instructors with an advanced solution to effortlessly
            monitor student and staff attendance in real-time, eliminating the
            need for manual roll-calling. Our comprehensive report provides
            insights into students' regular attendance, allowing instructors to
            track and monitor attendance trends effectively. With automated
            tracking, instructors can focus more on delivering quality education
            while ensuring accountability and engagement among students and
            staff members.
          </p>
        </div>
        <div className="div2">
          <Container className="mt-5">
            <Row>
              {blogs.map((blog, index) => (
                <Col key={index} lg={4} md={6} className="mb-4">
                  <Card className="d-flex justify-content-center align-items-center bg-light w-100 h-100">
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
                Experience the simplicity and efficiency of Radio Frequency
                Identification (RFID) technology in revolutionizing attendance
                management. Unlike traditional roll-call processes, RFID swiftly
                records the attendance of entire classes with ease. Each student
                receives an RFID card containing a Unique Identification Number
                (UIN), enabling seamless scanning at various school locations.
                <br /> <br />
                RFID scanners installed at entrances, libraries, classrooms, and
                labs automatically register entries by scanning the UIN,
                ensuring efficient attendance recording. Capable of reading
                multiple cards simultaneously, the RFID reader marks the
                attendance of groups effortlessly. Integrated with school and
                college ERP software, attendance data is instantly accessible,
                providing real-time insights into student attendance for
                lectures and practicals.
                <br /> <br />
                Extend the utility of the RFID system to monitor staff and
                faculty attendance, simplifying payroll management. Operate
                without direct visual contact with RFID tags, saving valuable
                time. With RFID technology, achieve unparalleled accuracy in
                attendance tracking, eliminating human errors associated with
                barcode reading. Embrace the future of attendance management
                with RFID.
              </p>
            </div>
            <div className="col">
              <h1 className="pt-4 pb-2 text-center">
                RFID Attendance Management System
              </h1>
              <img
                src="https://www.mastersofterp.com/images/RFID-Attendance%20(1).webp"
                alt="img"
                className="image"
              ></img>
            </div>
          </div>
        </div>

        <div className="container div3">
          <div className="row">
            <div className="col">
              <h1 className="pt-4 pb-2">
                Biometric Attendance Management System
              </h1>
              <img
                src="https://www.mastersofterp.com/images/Biomatrics.webp"
                alt="img"
              ></img>
            </div>
            <div className="col sub">
              <p>
                Introducing the Biometric Attendance System, a robust electronic
                solution for student and employee attendance management. This
                innovative system utilizes biometric technology, requiring
                students to press their thumb on a biometric device for
                attendance. Each student's fingerprint is securely stored in the
                system, linked to the educational ERP.
                <br />
                <br />
                With fingerprints being unique to each individual, the biometric
                system ensures unparalleled accuracy, minimizing the risk of
                proxy attendance. Attendance data is seamlessly integrated into
                the educational ERP, allowing authorities to access, assess, and
                manage attendance in real-time. Role-based access further
                enhances security, enabling specific stakeholders to track
                attendance information as needed.
                <br />
                <br />
                The system tracks various attendance metrics, including early
                departures, late arrivals, and leaves, providing comprehensive
                insights for effective management. Leveraging secure cloud
                storage, it systematically identifies, verifies, and matches
                fingerprints within seconds, ensuring swift and reliable
                authentication.
                <br />
                <br />
                Integrated with HR and faculty management systems, the Biometric
                Attendance System streamlines payroll processing, using
                attendance and leave data for accurate calculations. Experience
                seamless attendance management with our advanced biometric
                solution.
              </p>
            </div>
          </div>
        </div>

        <div className="container div3">
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col sub">
              <p>
                Introducing our Mobile-Based Online Attendance System, a
                convenient mobile app designed to revolutionize attendance
                management in educational institutions. Say goodbye to the
                inefficiencies of manual attendance taking and the reliance on
                paper resources. With just a single click, students and faculty
                can effortlessly record their attendance using their unique
                individual logins.
                <br /> <br />
                Our mobile app provides educators with easy access to student
                lists and attendance management capabilities, allowing them to
                mark students as absent or present directly from their
                smartphones. Additionally, students can apply for leave through
                the app, triggering instant notifications to faculty members for
                efficient leave management.
                <br /> <br />
                Integration with Learning Management System (LMS) software
                further enhances the academic experience. The attendance
                management system seamlessly syncs with the LMS, enabling
                faculty to upload assignments, course materials, lecture notes,
                and more while taking attendance. This integration optimizes
                time efficiency and enhances academic delivery, providing a
                streamlined experience for both educators and students. Say
                hello to a new era of attendance management with our
                Mobile-Based Online Attendance System.
              </p>
            </div>
            <div className="col">
              <h1 className="pt-4 pb-2 text-center">
                Mobile App Based Attendance System
              </h1>
              <img
                className="image"
                src="https://www.mastersofterp.com/images/Mobile-Based-Attendance.webp"
                alt="img"
              ></img>
            </div>
          </div>
        </div>

        <div className="container div3">
          <div className="row div4" style={{ marginTop: "50px" }}>
            <div className="col">
              <h1 className="pt-3 pb-2">QR Code Based Attendance System</h1>
              <img
                src="https://www.mastersofterp.com/images/QR-Code-Attendance.webp"
                alt="img"
              ></img>
            </div>
            <div className="col sub">
              <p>
                Students and faculty simply scan their unique QR codes using
                their mobile devices to register their attendance, placing the
                responsibility directly in their hands. This not only saves time
                and effort for teachers but also encourages student
                accountability.
                <br /> <br />
                Our system also offers integration with SMS notification,
                automatically sending attendance details to teachers and parents
                on a daily basis. With frequent database backups, we ensure the
                highest level of security for attendance data.
                <br /> <br /> <strong>Generate Attendance Reports</strong>{" "}
                <br /> <br />
                Faculty members can easily generate attendance reports to
                monitor absenteeism and notify parents accordingly. Weekly and
                monthly reports provide insights into each student's attendance
                record, allowing educators to take proactive measures to improve
                attendance and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceManagementSystem;
