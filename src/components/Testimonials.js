import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Star from '../assets/star.png';

const TestimonialCard = ({ name, description }) => {
    return (
        <article className="testimonial-card">
            <img src={Star} alt="delivery Icon"></img>
            <h3>{name}</h3>
            <p>{description}</p>
        </article>
    );
}

const TestimonialCarousel = () => {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            {testimonialData.map((testimonial, index) => (
                <TestimonialCard 
                    key={index}
                    name={testimonial.name} 
                    description={testimonial.description}
                />
            ))}
        </Carousel>
    )
}

const testimonialData = [
    {
        name: "Micheal Caldwell",
        description: "This is the best Mediterranean food that I've ever had!"
    },
    {
        name: "Alan Chen",
        description: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
    },
    {
        name: "Casey Lau",
        description: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."
    },
    {
        name: "John Rosenblum",
        description: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
    },
    {
        name: "Jim Reynor",
        description: "The food here really refreshed me after a late night shift at the local supply depot."
    },
    {
        name: "Brian Dean",
        description: "I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here."
    },
    {
        name: "Tyler Tohmine",
        description: "The food here was fire!! Everyone should try this place out at least once if they live in Chicago."
    },
    {
        name: "Jack Hu",
        description: "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>

            <section className="testimonials-cards">
                {testimonialData.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index}
                        name={testimonial.name} 
                        description={testimonial.description}
                    />
                ))}
            </section>

            <section className="testimonials-carousel">
                <TestimonialCarousel />
            </section>
        </section>
    );
}

export default Testimonials;