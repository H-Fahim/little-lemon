import Heading from "./HeadingPages/Heading";
import Specials from "./HeadingPages/Specials";
import Testimonials from "./HeadingPages/Testimonials";
import About from "./HeadingPages/About";
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
