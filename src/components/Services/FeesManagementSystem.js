import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './FeesManagementSystem.css';

const FeesManagementSystem = () => {
  const blogs = [
    {
      id: 1,
      title: "Automate Calculations",
      image: "https://www.mastersofterp.com/images/fees-Automate-Calculations.webp",
      content:
        "The fee management system automatically assigns fee structures to students based on various criteria.The fee management system effortlessly assigns customized fee structures to students based on diverse factors. ",
    },
    {
      id: 2,
      title: "Send Reminders",
      image: "https://www.mastersofterp.com/images/Send-Reminder.webp",
      content:
        "The software automatically sends reminders to students for pending fees when half-yearly or quarterly payments are approaching. The software ensures timely reminders for pending fees, notifying students when half-yearly or quarterly payments are approaching.",
    },
    {
      id: 3,
      title: "Generate Reports",
      image: "https://www.mastersofterp.com/images/fees-Generate-Reports.webp",
      content:
        "Regularly collecting data, the system generates daily reports accessible at any time. Simplify the laborious task of fee management. Consistently gathering data, the system generates daily reports accessible at your convenience. Streamline the labor-intensive process of fee management effortlessly",
    },
  ];

  return (
    <>
      <div>
        <div className="row" style={{ position: "relative" }}>
          <div className="col">
            <img src="https://www.mastersofterp.com/images/Online-fees-management.webp" alt="Banner"></img>
          </div>
          <div className="col div1">
            <h1 className="h1">Online Fees Management System</h1>
            <p className="top_text">
              Experience seamless and secure fee management with MasterSoft's Fee Management Software. Customize diverse fee structures, facilitate hassle-free online or offline payments, and uphold meticulous records with unparalleled accuracy. Indulge in a streamlined fee collection experience with MasterSoft's Fee Management Software. Tailor various fee categories to meet your institution's unique requirements effortlessly. Whether it's tuition fees, exam fees, or miscellaneous charges, our software ensures smooth online or offline payment processing, accommodating diverse payment preferences.
            </p>
          </div>
        </div>

        <Container fluid className="p-5 text-center mt-3">
          <Typography variant="h1">Collect Tuition Fees, examination fees and library fines using a one stop fees management system</Typography>
          <Typography variant="body1" className="mt-4">An Integrated Solution Empowering Institutions to Customize Fee Structures Based on Selected Courses, Scholarships, and Other Institution-Defined Categories. A Unified Platform Empowering Institutions to Tailor Fee Structures According to Selected Courses, Scholarships, and Other Custom Institute Categories for Efficient Financial Management.</Typography>
        </Container>
        <div className="div2">
          <Container className="mt-5">
            <Grid container spacing={3}>
              {blogs.map((blog, index) => (
                <Grid item key={index} lg={4} md={6} className="mb-4">
                  <Card className="d-flex justify-content-center align-items-center bg-light">
                    <CardMedia
                      className="img2"
                      component="img"
                      image={blog.image}
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
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

        <div className="container div3">
          <div className="row">
            <div className="col sub">
              <p>The fee collection software streamlines fee transactions for students, enabling remote payments for tuition, admission, bus fees, library fines, and more without the need for cash. Payments can be conveniently made through various methods, including payment gateways, checks, credit/debit cards, and UPI IDs.<br/> <br/>Furthermore, the fee management software promptly confirms fee receipt to students via SMS or online receipts, simplifying the entire fee collection process for both students and parents. This eliminates the need for queuing at the institute for fee payments. The online fee collection software extends its functionality to accommodate payments for various purposes, such as hostel fees, bus fees, and optional courses within educational institutions.<br/> <br/> Additionally, the fee management system automates fee reminders to students and parents, ensuring a streamlined fee collection process for the institute while maintaining comprehensive transaction records.</p>
            </div>
            <div className="col">
              <h1 className="pt-4 pb-2 text-center">Fee Collection</h1>
              <img src="https://www.mastersofterp.com/images/Fees-Collection.webp" alt="Fee Collection" className='image'></img>
            </div>
          </div>
        </div>

        <div className="container div3">
          <div className="row">
            <div className="col">
              <h1 className="pt-4 pb-2">Fees Reports</h1>
              <img src="https://www.mastersofterp.com/images/Fees-Reports%20(1).webp" alt="Fees Reports"></img>
            </div>
            <div className="col sub">
            <p>Students are now empowered to complete online application forms and apply for admission to the institute seamlessly. The admission management system efficiently collects and securely stores all data provided by prospective students, encompassing personal information, academic qualifications, and course preferences.<br/> <br/>Upon confirmation of eligibility and subsequent admission confirmation, students are required to submit documentary evidence and supporting documents to validate the information provided during the application process.<br/> <br/>The online admission software factors in student preferences alongside entrance exam results or eligibility scores for respective courses, culminating in the generation of merit lists. Students can conveniently access their personalized login credentials on the online portal to review the merit list and monitor their admission status effortlessly.</p>
          </div>
        </div>
      </div>


      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>
            The register compiles comprehensive data on fees, payment specifics, student information, and all relevant details within the system. Continuously updated with new fee-related activities initiated by students, the fee collection software simplifies fee record maintenance, minimizing manual input by faculty members.<br/> <br/>Additionally, the fee management software meticulously tracks every student and parent activity, providing faculty members with insights into daily fee confirmations, admission statuses, lists of students with pending fees, those subject to additional late fees, and other exceptional cases among students.
            </p>
          </div>
          <div className="col">
          <h1 className="pt-4 pb-2 text-center">Fees Register</h1>
          <img className='image' src="https://www.mastersofterp.com/images/Fees-Register%20(1).webp" alt="img"></img>
          </div>
        </div>
      </div>


      <div className="container div3">
        <div className="row div4">
        <div className="col">
          <h1 className="pt-3 pb-2">Fee Structure Allocation</h1>
          <img src="https://www.mastersofterp.com/images/Fees-Structure-Allocation.webp" alt="img"></img>
          </div>
          <div className="col sub">
            <p>
            The online fee management software efficiently assigns individualized fees to all students enrolled at the institute, considering diverse parameters such as course, location, reservations, scholarships, and more. <br/> <br/>Furthermore, the fee management system meticulously maintains detailed records of students' scholarships, awards, fellowships, and fee waiver programs, utilizing this data to formulate customized fee structures. Additionally, it tracks students' initial fee payments at the commencement of their courses and sends reminders for any outstanding fees, ensuring prompt payments within the institute.
            </p>
          </div>
        </div>
      </div>


      
    </div>
    </>
  )
}

export default FeesManagementSystem;