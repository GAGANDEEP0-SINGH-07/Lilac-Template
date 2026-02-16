import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Profile from "../components/Profile";
import Challenges from "../components/Challenges";
import ProfessionalBackground from "../components/ProfessionalBackground";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Profile />
                <Challenges />
                <ProfessionalBackground />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
