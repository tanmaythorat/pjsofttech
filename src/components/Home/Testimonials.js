import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './Testimonials.css'; // Import the CSS file for styles
const testimonials = [
  {
    name: 'Padamkumar Jain',
    title: 'Founder',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
    image: '', // Add image path or URL
  },
  {
    name: 'John Doe',
    title: 'CEO',
    content: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    image: 'https://static.vecteezy.com/system/resources/previews/007/209/020/non_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg', // Add image path or URL
  },
  {
    name: 'Jane Smith',
    title: 'Manager',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    image: 'path/to/image3.jpg', // Add image path or URL
  },
  
];
const Testimonials = () => {
  return (
    <Container className="testimonials mt-5">
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} lg={4} md={6} xs={12}>
            <Card className="testimonial-card">
              <CardMedia
                component="img"
                alt={testimonial.name}
                height="140"
                image={testimonial.image}
                className="card-media"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="div">
                  {testimonial.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {testimonial.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Testimonials;