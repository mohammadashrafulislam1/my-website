import ProjectSubmissionForm from "../AdminDashboard/ProjectSubmissionForm/ProjectSubmissionForm.jsx";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer.jsx";
import LandingHero from "./LandingHero/LandingHero";
import Languages from "./Languages/Languages";
import ProjectSection from "./ProjectSection/ProjectSection";
import Services from "./Services/Services/Services";
import TestimonialSection from "./TestimonialSection/TestimonialSection.jsx";
import TimeLine from "./TimeLine/TimeLine";
const LandingPage = () => {
    return (
        <div>
        <LandingHero></LandingHero> 
        <div className="max-w-7xl md:mx-auto pb-10 mx-5">
        <Languages></Languages>
        </div>
        <div className="max-w-7xl md:mx-auto pb-10 mx-5 relative">
        <Services></Services> 
        </div>
        <div className="max-w-7xl md:mx-auto pb-10 mx-5">
        <TestimonialSection></TestimonialSection>
        <ProjectSection></ProjectSection>
        </div>
        <Contact></Contact>
        <Footer></Footer>
        </div>
    );
};

export default LandingPage;