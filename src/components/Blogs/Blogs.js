import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material"; // Importing from Material-UI
import "./Blogs.css"; // Import CSS file

const Blogs = () => {
  // Your blog post data
  const blogPosts = [
    {
      title: "Revolutionizing Education: The Role of Student Information Systems in Empowering Learning",
      image: "https://www.mastersofterp.com/blog/image/Student-Retention-subblog-banner.jpg",
    },
    {
      title: "Seamless Enrollment: Navigating the Future with Online Admission Systems",
      image: "https://www.mastersofterp.com/blog/image/Online-Assessment-Tool-Checklist%20-%20square.jpg",
    },
    {
      title: "Mastering Financial Success: Exploring the Benefits of Fees Management Systems",
      image: "https://www.mastersofterp.com/blog/image/Learning-Management-Systems-subblog-banner.jpg",
    },
  ];

  const blogPosts1 = [
    {
      title: "Unlocking Potential: The Power of Online Examination Systems in Modern Education",
      image: "https://www.mastersofterp.com/blog/image/Automated-Proctoring-for-Online-Exams-Square.webp",
    },
    {
      title: "Beyond Attendance: Maximizing Efficiency with Attendance Management Systems",
      image: "https://www.mastersofterp.com/blog/image/What-Is-Curriculum-Mapping-Square.jpg",
    },
    {
      title: "Elevating Excellence: Navigating the Dynamics of Higher Education Systems",
      image: "https://www.mastersofterp.com/blog/image/strategies-to-improve-student-retention-subblog-banner.jpg",
    },
  ];

  const blogPosts2 = [
    {
      title: "Transforming Institutions: The Impact of University Management Software on Academic Success",
      image: "https://www.mastersofterp.com/blog/image/Student-Information-System---Square.jpg",
    },
    {
      title: "Empowering Institutions: Exploring the Advantages of Institute Management Software",
      image: "https://www.mastersofterp.com/blog/image/Perfect-Student-Management-System_1.webp",
    },
    {
      title: "Shaping Tomorrow's Leaders: The Role of College Management Software in Educational Excellence",
      image: "https://www.mastersofterp.com/blog/image/5-Challenges-College-Admissions-blog.webp",
    },
  ];

  const blogPosts3 = [
    {
      title: "From Classroom to Cloud: The Evolution of School Management Software in Modern Education",
      image: "https://www.mastersofterp.com/blog/image/LMS-Software-square.webp",
    },
    {
      title: "Empowering Educators: Enhancing Academic Efficiency with Faculty Management Software",
      image: "https://www.mastersofterp.com/blog/image/LMS-softwares-square.webp",
    },
    {
      title: "Unleashing Learning Potential: How Learning Management Systems are Revolutionizing Education",
      image: "https://www.mastersofterp.com/blog/image/Importance-of-an-Automated-Library-System-in-Institute-square.webp",
    },
  ];

  return (
    <>
      <div>
        <h1 className="mb-4 text-center mt-4 blog-title"><span className="span">L</span>atest Blog Posts</h1>
        {[blogPosts, blogPosts1, blogPosts2, blogPosts3].map((posts, idx) => (
          <Container key={idx} className="mt-5 container-custom">
            <Grid container spacing={3}>
              {posts.map((post, index) => (
                <Grid item lg={4} md={6} sm={12} key={index} className="mb-4">
                  <Card className="blog-card">
                    <CardMedia
                      component="img"
                      height="140"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        ))}
      </div>
    </>
  );
};

export default Blogs;
