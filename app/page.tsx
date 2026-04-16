import NavBar from "./_components/NavBar";
import ImageSlider from "./_components/ImageSlider";
import ProjectPreview from "./_components/ProjectPreview";
import About from "./_components/About";
import Footer from "./_components/Footer";

export default function Home() {

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-pearl text-black font-sans">
        
        <section id="top"></section>
        <NavBar />
        <ImageSlider />

        <section id="projects"></section>
        <ProjectPreview />

        <section id="about"></section>
        <About />

        <Footer />
        <section id="contact"></section>
      </div>
    </>
  );
}
