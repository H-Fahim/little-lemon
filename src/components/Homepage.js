import Heading from "./Main/Hero/Hero";
import Specials from "./Main/Header/Specials";
import Testimonials from './Main/Card/TestimonialCards'
import About from "./Main/About/AboutUs";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
