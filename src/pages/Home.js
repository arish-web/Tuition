import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ExploreCategories from "../components/ExploreCategories";
import SubjectsSection from "../components/SubjectsSection";
import TeachingMethodSection from "../components/TeachingMethodSection";
import ResultsSection from "../components/ResultsSection";
import StudyGallery from "../components/StudyGallery";
// import StaffSection from "../components/StaffSection";
import TestimonialsSection from "../components/TestimonialsSection";
import EnquiryForm from "../components/EnquiryForm";
import LocationSection from "../components/LocationSection";

export default function Home() {
  return (
    <>
      <HeroSection /> {/* First impression */}
      <WhyChooseUs /> {/* Trust & value */}
      <ExploreCategories />{" "}
      {/* Classes / tuition types (THIS IS YOUR IMAGE SECTION) */}
      <SubjectsSection /> {/* What subjects you teach */}
      <TeachingMethodSection /> {/* How you teach */}
      <ResultsSection /> {/* Proof (results) */}
      <StudyGallery /> {/* Environment & photos */}
      {/* <StaffSection />                Teachers = credibility */}
      <TestimonialsSection /> {/* Social proof */}
      <EnquiryForm /> {/* Conversion */}
      <LocationSection /> {/* Final reassurance */}
    </>
  );
}
