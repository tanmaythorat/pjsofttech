import React from 'react';
import './OnlineExaminationSystem.css';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const OnlineExaminationSystem = () => {
  const blogs = [
    {
      id: 1,
      title: "Modifiable Inquiries",
      image: "https://www.mastersofterp.com/images/Customizable-Questions.webp",
      content:
        "Faculty have the flexibility to establish various question formats tailored to diverse subjects, including open-ended inquiries, multiple-choice questions (MCQs), descriptive assessments, quizzes, and formative tests.",
    },
    {
      id: 2,
      title: "Generate Transcript",
      image: "https://www.mastersofterp.com/images/Generate-Transcripts.webp",
      content:
        "Transcribing audio or video content into written text is a vital task for various industries, from media production to legal documentation and academic research. Automating this process through transcript generation offers numerous benefits, including increased efficiency and accuracy. ",
    },
    {
      id: 3,
      title: "Automated Test Evaluation Systems",
      image: "https://www.mastersofterp.com/images/Automates-Test-Evaluations.webp",
      content:
        "Automated test evaluation systems are revolutionizing the way assessments are conducted. By leveraging technology, these systems aim to provide objective, efficient, and unbiased evaluations. However, to achieve these goals, it's essential to implement robust frameworks and processes. ",
    },
  ];

  return (
    <div>
      <div className="row" style={{ position: "relative" }}>
        <div className="col">
          <img
            // className='img1'
            src="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486312338219-ce68d2c6f44d%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Donline%252Bexam%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Mnx8b25saW5lJTIwZXhhbXxlbnwwfHx8fDE3MTY2MjU4Mjl8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60"
            alt="online examination"
          />
        </div>
        <div className="col div1">
          <h1 className="h1">Online Examination System</h1>
          <p className="top_text">
          Simplify the examination process by seamlessly configuring various exam formats using question databases, conducting assessments via mobile or computer devices, and implementing timers for exams. Transition from traditional pen-and-paper tests to a digital, paperless approach, leading to significant cost savings. Automatically generate detailed report cards and distribute them to parents and students via SMS and email.
          </p>
        </div>
      </div>

      <Container fluid className="p-5 text-center mt-3">
        <Typography variant="h1">
          Efficient and Secure Examination Management System Ensuring Seamless Student Assessments
        </Typography>
        <hr/>
        <Typography variant="body1">
          Get an online examination system that is compatible with mobile devices, allowing students to take exams on laptops, desktops, or mobile devices. Embrace a cost-efficient strategy by eliminating the necessity for organizing physical invigilators, printing question papers, coordinating with examiners, and renting exam halls for entrance exams, among other expenses.
        </Typography>
      </Container>

      <div className="div2">
        <Container className="mt-5">
          <Grid container spacing={3}>
            {blogs.map((blog, index) => (
              <Grid item key={index} lg={4} md={6} sm={12} className="mb-4">
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

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>With a constant stream of students participating in tests and exams monthly and annually, there's a steady influx of data, encompassing answer sheets and extensive question repositories. This data undergoes continual uploading to cloud platforms, ensuring accessibility for students throughout the academic cycle. The online exam software boasts high scalability, adept at managing vast quantities of data seamlessly. Faculty members can effectively supervise and conduct data analysis for exams, covering score distribution, pass rates, identification of erroneous questions, and beyond.</p>
            <p>
            The perpetual cycle of student assessments generates a wealth of data, including completed answer sheets and an extensive array of question banks. This data is systematically uploaded to cloud-based platforms, providing students with continuous access to their academic records and resources. Powered by robust infrastructure, the online exam software effortlessly scales to accommodate the substantial volumes of data generated by student assessments. Faculty members leverage sophisticated data analysis tools to monitor exam performance metrics such as score distribution, pass rates, and the identification of problematic questions. This proactive approach enables educators to refine their teaching methodologies and enhance the overall learning experience for students.
            </p>
          </div>
          <div className="col">
          <h1 className="pt-4 pb-2 text-center">Assessment Information Control</h1>
          <img src="https://www.xiphiastec.com/hk/assets/img/onlineexaminationgraph.png" alt="img" className='image'></img>
          </div>
        </div>
      </div>

      

      <div className="container div3 mt-5">
        <div className="row">
        <div className="col">
          <h1 className="pt-4 pb-2">Online Proctoring</h1>
          <img className='image1' src="https://www.eklavvya.com/wp-content/uploads/2022/09/Remote-proctoring-1.webp" alt="img"></img>
          </div>
          <div className="col sub">
            <p>Students are now empowered to complete online application forms and apply for admission to the institute seamlessly. The admission management system efficiently collects and securely stores all data provided by prospective students, encompassing personal information, academic qualifications, and course preferences.<br/> <br/>Upon confirmation of eligibility and subsequent admission confirmation, students are required to submit documentary evidence and supporting documents to validate the information provided during the application process.<br/> <br/>The online admission software factors in student preferences alongside entrance exam results or eligibility scores for respective courses, culminating in the generation of merit lists. Students can conveniently access their personalized login credentials on the online portal to review the merit list and monitor their admission status effortlessly.</p>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>The online examination software includes advanced analytics and visualization features, empowering administrators with valuable insights into exam performance and trends. Through intuitive dashboards, administrators can access key metrics such as student attendance, test frequency, question distribution, and more. These dashboards serve as dynamic tools for decision-making, allowing administrators to focus on critical areas of improvement.</p>
            <br/>
            <p>
            Educators and students alike benefit from customizable filter options embedded within the dashboard interface. This functionality enables users to refine data queries based on specific parameters, enhancing their ability to analyze and interpret exam-related information effectively.
            </p>
            <br/>
            <p>Faculty members leverage the software's robust reporting capabilities to generate visually engaging reports that offer holistic views of individual student performance. By providing a 360-degree perspective, these reports enable educators to identify learning gaps and tailor instructional strategies accordingly, ultimately driving positive learning outcomes for students.</p>
          </div>
          <div className="col">
          <h1 className="pt-4 pb-2 text-center">Reports & Dashboards</h1>
          <img src="https://images.ctfassets.net/pdf29us7flmy/7JveLJE1mu2wAsbKbtqm9L/908bf7f8dec992c9defe75459a45c339/-IND-004-81-_How_To_Create_Customized_Sales_Dashboards_in_6_Steps_Final.png?w=720&q=100&fm=jpg" alt="img" className='image'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineExaminationSystem;