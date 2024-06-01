import React from "react";
import "./Organization.css";

const Organization = () => {
  return (
    <>
      <div className="organization-page">
        <h1 className="mb-4 text-center mt-4 blog-title"><span className="span">PJ</span>SoftTech Core Values and Culture</h1>
        <div className="core-values container">
          <div className="header"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Transparent and Friendly Workplace
                </div>
                <div className="card-body">
                  <p>
                    We value every team member, fostering an open and amicable
                    environment to cultivate strong, healthy working
                    relationships.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Embrace Change</div>
                <div className="card-body">
                  <p>
                    We actively embrace change, continuously refining our
                    methodologies and products by incorporating the latest
                    technological advancements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Going the Extra Mile</div>
                <div className="card-body">
                  <p>
                    Whether for our team members, customers, or partners, we
                    consistently go above and beyond to provide assistance and
                    support.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Customers Come First</div>
                <div className="card-body">
                  <p>
                    Our decisions are centered around our customers,
                    prioritizing their needs to deliver high-quality ERP
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Collaborating with Academicians
                </div>
                <div className="card-body">
                  <p>
                    Our products are developed in consultation with
                    knowledgeable educationists, ensuring they meet the specific
                    needs of educational institutions.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Commitment to Integrity</div>
                <div className="card-body">
                  <p>
                    We uphold the highest standards of integrity, always doing
                    what is right to deliver exceptional service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="culture-section">
          <h1><span className="span">O</span>ur Culture</h1>
          <h3 className="mt-4">Dedication, Creativity, and Integrity.</h3>
        </div>
        <div className="container culture">
          <p>
            At PJSoftTech, collaboration is at the heart of everything we do. We
            believe in the power of teamwork and synergy, where every team
            member's voice is valued and respected. Our open-door policy fosters
            communication and encourages the sharing of ideas, leading to
            innovative solutions and successful outcomes. We are committed to
            the personal and professional growth of our employees. Our culture
            of continuous learning provides ample opportunities for skill
            development and career advancement. From workshops and training
            programs to mentorship and coaching, we invest in our team members'
            success and empower them to reach their full potential. We
            understand the importance of maintaining a healthy work-life
            balance. That's why we offer flexible work arrangements and remote
            work options to accommodate the diverse needs of our employees. By
            prioritizing well-being and flexibility, we ensure that our team
            members can thrive both personally and professionally. Innovation is
            in our DNA. We encourage creativity and out-of-the-box thinking,
            challenging our team members to push the boundaries and explore new
            possibilities. Whether it's developing cutting-edge solutions or
            refining existing processes, we embrace change and strive for
            excellence in everything we do. We celebrate diversity and believe
            in creating an inclusive workplace where everyone feels welcome and
            valued. By embracing different perspectives and backgrounds, we
            foster a culture of creativity, empathy, and mutual respect. We are
            committed to building a diverse team that reflects the world we live
            in and drives innovation through diversity.
          </p>
        </div>
      </div>
    </>
  );
};

export default Organization;
