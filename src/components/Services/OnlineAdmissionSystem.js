import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './OnlineAdmissionSystem.css';

const OnlineAdmissionSystem = () => {
  const blogs = [
    {
      id: 1,
      title: 'Merit List Compilation',
      image: 'https://www.mastersofterp.com/images/Merit-List-Generation.webp',
      content:
        "Automated Merit List Generation Based on Students' Scores and Preferences, Ensuring Precision and Efficiency. The online admission software seamlessly evaluates students' scores and preferences to produce merit lists automatically and precisely.",
    },
    {
      id: 2,
      title: 'Monitoring Admission Progress',
      image: 'https://www.mastersofterp.com/images/Tracking-Admission-Status.webp',
      content:
        'Students can monitor their admission progress through the online portal using provided login credentials. Applicants can check their admission status conveniently via online portal using the provided login credentials.',
    },
    {
      id: 3,
      title: 'Online Fees Payment',
      image: 'https://www.mastersofterp.com/images/Online-Fees-Payment.webp',
      content:
        'The online admission software facilitates online fee payments via UPI, credit/debit cards, and net banking options. The online admission software supports online fee payments through UPI, credit/debit cards, and net banking facilities.',
    },
  ];

  return (
    <>
      <div>
        <div className="row" style={{ position: 'relative' }}>
          <div className="col">
            <img src="https://www.mastersofterp.com/images/online-admission-system-banner.webp" alt="banner" />
          </div>
          <div className="col div1">
            <h1 className="h1">Online Admission & Enrollment Management System</h1>
            <p className="top_text">
              Transform your institution's admission procedures with MasterSoft's cutting-edge online admission software. Enjoy round-the-clock accessibility and a streamlined application process, enticing students to embrace online admissions. Save valuable time and deliver a seamless experience for prospective students.
            </p>
          </div>
        </div>

        <Container fluid className="p-5 text-center mt-3">
          <h1>Efficient Admission Management Simplified</h1>
          <p className="mt-4">An All-Encompassing Solution for Seamless Admission Management, Providing a Comprehensive 360-Degree Experience for Users</p>
        </Container>
        <div className="div2">
          <Container className="mt-5">
            <Grid container spacing={3}>
              {blogs.map((blog) => (
                <Grid item key={blog.id} lg={4} md={6} className="mb-4">
                  <Card className="d-flex justify-content-center align-items-center bg-light">
                    <CardMedia
                      className="img2"
                      component="img"
                      image={blog.image}
                      style={{
                        width: '75px',
                        height: '75px',
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div" className="d-flex justify-content-center align-items-center">
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

        <Container className="div3">
          <div className="row">
            <div className="col sub">
              <p>
                The Online Admission System revolutionizes every facet of the institution's admission process through a robust software infrastructure. It efficiently oversees a comprehensive student database, eligibility criteria, merit lists, fee structures, and institutional announcements. Furthermore, it ensures secure access control, granting authorities tailored access based on their roles and responsibilities within the organization. <br /> <br /> With seamless automation, the software streamlines institutional operations, eliminating the need for manual intervention. By transitioning all activities online, the admission management system significantly reduces paperwork. It effortlessly generates merit lists and allocates colleges to students based on their academic achievements and preferences. <br /> <br /> Conducting the entire admission process virtually, the system empowers students to monitor their application status through a dedicated online portal. Additionally, it fosters integration with various systems and devices, ensuring a seamless workflow and reducing human intervention to a minimum.
              </p>
            </div>
            <div className="col">
              <h1 className="pt-4 pb-2 text-center">Automating the Admission Workflow</h1>
              <img src="https://www.mastersofterp.com/images/Automation-of-Admission-Process%20(1).webp" alt="Automation" className="image" />
            </div>
          </div>
        </Container>

        <Container className="div3">
          <div className="row">
            <div className="col">
              <h1 className="pt-4 pb-2">Online Application Filling</h1>
              <img src="https://www.mastersofterp.com/images/Online-Application-Filling%20(1).webp" alt="Application Filling" />
            </div>
            <div className="col sub">
              <p>
                Students are now empowered to complete online application forms and apply for admission to the institute seamlessly. The admission management system efficiently collects and securely stores all data provided by prospective students, encompassing personal information, academic qualifications, and course preferences. <br /> <br /> Upon confirmation of eligibility and subsequent admission confirmation, students are required to submit documentary evidence and supporting documents to validate the information provided during the application process. <br /> <br /> The online admission software factors in student preferences alongside entrance exam results or eligibility scores for respective courses, culminating in the generation of merit lists. Students can conveniently access their personalized login credentials on the online portal to review the merit list and monitor their admission status effortlessly.
              </p>
            </div>
          </div>
        </Container>
        <div className="container div3">
          <div className="row">
            <div className="col">
              <h1 className="pt-4 pb-2">Online Application Filling</h1>
              <img src="https://www.mastersofterp.com/images/Online-Application-Filling%20(1).webp" alt="Application Filling" />
            </div>
            <div className="col sub">
              <p>
                Students are now empowered to complete online application forms and apply for admission to the institute seamlessly. The admission management system efficiently collects and securely stores all data provided by prospective students, encompassing personal information, academic qualifications, and course preferences. <br /> <br /> Upon confirmation of eligibility and subsequent admission confirmation, students are required to submit documentary evidence and supporting documents to validate the information provided during the application process. <br /> <br /> The online admission software factors in student preferences alongside entrance exam results or eligibility scores for respective courses, culminating in the generation of merit lists. Students can conveniently access their personalized login credentials on the online portal to review the merit list and monitor their admission status effortlessly.
              </p>
            </div>
          </div>
        </div>

        <div className="container div3">
          <div className="row">
            <div className="col sub">
              <p>
                The online admission software continually generates extensive data for admissions, encompassing applications, fee transactions, student inquiries, and more. This data is securely stored on a centralized cloud platform, ensuring safe processing and accessibility for future utilization. Utilizing the admission management system, the software dynamically produces tailored reports based on user preferences. <br /> <br /> These reports can be customized to cover specific timeframes, including daily, monthly, or periodic intervals. Additionally, the software generates reports in various formats, including Doc, PDF, and Word, catering to diverse institutional needs such as accreditation requirements. <br /> <br /> Furthermore, the generated reports prioritize readability and accuracy, eliminating any potential for data redundancy or gaps. This streamlined approach minimizes the need for file merging and simplifies data processing, enhancing overall operational efficiency.
              </p>
            </div>
            <div className="col">
          <h1 className="pt-4 pb-2 text-center">Report Generation</h1>
          <img className='image' src="https://www.mastersofterp.com/images/Report-Generation-online-admission.webp" alt="img"></img>
          </div>
        </div>
      </div>


      <div className="container div3">
        <div className="row div4">
        <div className="col">
          <h1 className="pt-3 pb-2">Data Analysis</h1>
          <img src="https://www.mastersofterp.com/images/Data-Analysis-onlineadmission.webp" alt="img"></img>
          </div>
          <div className="col sub">
            <p>The online admission software aggregates data from diverse sources and employs AI technology to conduct comprehensive analysis. Through continuous learning and refinement, the system enhances its functionality over time. This data is instrumental for institute authorities in making informed, data-driven decisions regarding financial allocations, investments, and pedagogical strategies.<br/> <br/>Moreover, the software facilitates faculty members in gaining insights into student behavior throughout the admissions process. It provides valuable insights into student interests, engagement levels, and overall experience, enabling educators to optimize their approach to teaching and learning.<br/>Utilizing Business Intelligence (BI) technology, the online admission system presents data analysis reports in a visually appealing format. Through graphical representations such as tables, graphs, and pie charts, the system empowers decision-makers with actionable insights, thereby augmenting the decision-making process within educational institutions.</p>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default OnlineAdmissionSystem;