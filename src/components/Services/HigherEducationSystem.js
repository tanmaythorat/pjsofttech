import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './HigherEducationSystem.css';

const HigherEducationSystem = () => {
  const blogs = [
    {
      id: 1,
      title: "Dashboards",
      image: "https://www.mastersofterp.com/images/bi-dashboard.webp",
      content:
        "Empower stakeholders with real-time, accurate data accessible via the School Portal and Mobile Apps. Utilize Business Intelligence (BI) dashboards to extract actionable insights, enabling informed decision-making and driving continuous improvement initiatives.",
    },
    {
      id: 2,
      title: "Tailored Reporting Solutions",
      image: "https://www.mastersofterp.com/images/customized-report.webp",
      content:
        "Utilize configurable reporting tools to generate customized reports that align with specific requirements and objectives. These adaptable reporting solutions offer flexibility and precision, enabling stakeholders to extract actionable insights and drive informed decision-making.",
    },
    {
      id: 3,
      title: "Customizable Workflow Solutions",
      image: "https://www.mastersofterp.com/images/user-defined.webp",
      content:
        "Implement user-defined processes that allow stakeholders to tailor workflows according to their unique needs and preferences. These flexible workflow solutions empower users to optimize efficiency, streamline operations, and adapt to changing requirements with ease.",
    },
  ];

  return (
    <div>
      <div className="row" style={{ position: "relative" }}>
        <div className="col">
          <img src="https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/6LK9MCbEafyPhE3YB5HLW0/c0fe08b894d0cff8a6838f9172d1a61c/Graduation_StudentsGroup_Smiling_Outdoor_GettyImages-907837926.jpg?fit=thumb" alt="Graduation" />
        </div>
        <div className="col div1">
          <Typography variant="h1" className="h1">Higher Education System</Typography>
          <Typography variant="body1" className="top_text">
            Facilitate seamless integration of campus operations by consolidating all processes onto a unified platform. Harness the power of intelligent analytics-driven business intelligence (BI) tools to glean actionable insights and facilitate informed decision-making. Enhance efficiency and productivity by streamlining workflows and minimizing complexities across all operations.
          </Typography>
        </div>
      </div>

      <div className="container-fluid p-5 text-center mt-3">
        <Typography variant="h2">Monitor, Track, and Analyze Microscopic Details</Typography>
        <Typography variant="body1" className="mt-4">
          Examine procedures meticulously and identify intervention opportunities through interconnected modules. By meticulously linking each aspect, discover areas for enhancement and optimize operations for maximum efficiency.
        </Typography>
      </div>
      
      <div className="div2">
        <Grid container spacing={4} className="mt-5">
          {blogs.map((blog) => (
            <Grid item key={blog.id} lg={4} md={6}>
              <Card className="d-flex justify-content-center align-items-center bg-light">
                <CardMedia
                  className="img2"
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography variant="h4" align="center">{blog.title}</Typography>
                  <Typography variant="body1" align="center">{blog.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>The library administration platform serves as a centralized hub for managing diverse resources, including books, journals, multimedia materials, and digital assets. Through intuitive cataloging tools and metadata management capabilities, librarians can efficiently organize and classify resources, making them easily searchable and accessible to patrons.<br/> <br/>Streamlined Circulation Processes: Simplify circulation processes with automated check-in, check-out, and renewal functionalities. Patrons can conveniently browse the catalog, place holds, and manage their borrowing history through the user-friendly interface, enhancing overall user satisfaction and engagement.<br/> <br/> Enhanced Patron Services: Empower patrons with self-service options, such as online reservations, renewals, and resource recommendations. Integrated communication features facilitate real-time notifications, overdue reminders, and personalized updates, ensuring seamless interaction between library staff and patrons.</p>
          </div>
          <div className="col">
            <Typography variant="h1" className="pt-4 pb-2 text-center">Library Administration Platform</Typography>
            <img src="https://www.elibrarysoftware.com/img/digital-library-system.jpg" alt="Library" className='image'></img>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col">
            <Typography variant="h1" className="pt-4 pb-2">Financial Management Platform</Typography>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GpNCBuW9jRQ8zkWJlzL8w63LSgUP556IQuJ9I5B2Bg&s" className='image2' alt="Financial Management" />
          </div>
          <div className="col sub">
            <p>Efficient Budgeting and Forecasting: The financial management platform provides tools for creating and managing budgets, enabling organizations to allocate resources effectively and plan for future expenses. <br/><br/> Advanced forecasting capabilities help anticipExpense Tracking and Management: Streamline expense tracking and management processes with automated workflows for expense approval, reimbursement, and reporting. Integrations with bank accounts and credit cards allow for seamless data synchronization, ensuring accurate and up-to-date financial records.<br/> <br/>Invoicing and Revenue Management: Simplify invoicing processes and improve cash flow management with customizable invoice templates, automated payment reminders, and online payment options. The platform supports multiple payment methods and currencies, facilitating transactions with clients and vendors worldwide.</p>
          </div>
        </div>
      </div>

      <div className="container div3">
        <div className="row">
          <div className="col sub">
            <p>
            Comprehensive Inventory Management: The inventory control platform provides robust tools for managing all aspects of inventory, including stock levels, item details, and supplier information. Users can easily track inventory movements, monitor stock levels in real-time, and streamline replenishment processes to ensure optimal inventory levels and minimize stockouts.<br/> <br/> Procurement and Supplier Management: Streamline procurement processes with automated workflows for purchase requisitions, approvals, and order generation. The platform facilitates seamless communication with suppliers, allowing users to compare quotes, negotiate terms, and track delivery schedules efficiently.<br/> <br/>Order Fulfillment and Customer Service: Improve order fulfillment processes with advanced order management features, including order processing, picking, packing, and shipping. Integration with customer relationship management (CRM) systems enables seamless order tracking and delivery notifications, enhancing the overall customer experience.
            </p>
          </div>
          <div className="col">
          <h1 className="pt-4 pb-2 text-center">Inventory Control Platform</h1>
          <img className='image' src="https://www.koops.in/image/imsTopImage.png" alt="img"></img>
          </div>
        </div>
      </div>
      </div>
  )
}

export default HigherEducationSystem