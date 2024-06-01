import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import './Team.css'; // Importing the new CSS file

const teamMembers = [
  {
    name: "PadamKumar jain",
    position: "Founder",
    image: "https://via.placeholder.com/150",
    description: "John is the CEO with over 10 years of experience in the tech industry."
  },
  {
    name: "Jane Smith",
    position: "CEO",
    image: "https://via.placeholder.com/150",
    description: "Jane is the CEO who leads the development team.."
  },
  {
    name: "Alice Johnson",
    position: " Manager",
    image: "https://via.placeholder.com/150",
    description: "Alice ensures all projects are completed on time and meet client expectations."
  },
  {
    name: "Bob Brown",
    position: "Lead Developer",
    image: "https://via.placeholder.com/150",
    description: "Bob is the lead developer who specializes in front-end technologies."
  },
];

const Team = () => {
  return (
    <Container className="team-container" sx={{ py: 5 }}>
      <Typography variant="h2" align="center" gutterBottom>
        <span className='span'>M</span>eet Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card className="team-card" sx={{ textAlign: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                sx={{ borderRadius: '50%', width: '150px', height: '150px', margin: '20px auto' }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {member.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Team;
