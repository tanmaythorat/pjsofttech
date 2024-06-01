import React from "react";

function About1() {
  return (
    <div>
      <h1 className="text-center" style={{color:"orange"}}>About Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Our Values</h3>
            <p>
              Client-First: We prioritize your needs above all else. Constant
              Innovations and Improvisations: We believe in constantly evolving
              to meet the changing needs of education. Utmost Importance to Data
              Security & Confidentiality: Your data security is our top
              priority.
            </p>

            <h3>Our IT Solutions</h3>
            <p>
              Campus Management Systems: Streamline administrative processes,
              student management, and academic planning. E-Learning Platforms:
              Enhance teaching and learning experiences with interactive
              e-learning platforms. Virtual Collaboration Tools: Facilitate
              remote collaboration and communication among students, faculty,
              and staff. Data Analytics and Insights: Gain actionable insights
              into student performance and institutional effectiveness.
              Cybersecurity Solutions: Protect sensitive data and safeguard
              against cyber threats.
            </p>
          </div>
          <div className="col-sm-6">
            <img
              src="https://media.istockphoto.com/id/492025669/photo/group-of-business-people-holding-placards-forming-about-us.jpg?s=612x612&w=0&k=20&c=lgZYkFUmIIPgmjE9m5nHI_6PMJ-6M38lkPfiHpYZmzs="
              alt="imagee"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
