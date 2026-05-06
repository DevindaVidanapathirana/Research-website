import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import Domain   from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents  from './pages/Documents';
import Slides     from './pages/Slides';
import AboutUs    from './pages/AboutUs';
import ContactUs  from './pages/ContactUs';

/**
 * Single-Page App – all sections rendered on one page.
 * Navigation scrolls smoothly to each section by id.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Domain />
        <Milestones />
        <Documents />
        <Slides />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
