import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import SubjectsSection from "../components/SubjectsSection";
import TeachingMethodSection from "../components/TeachingMethodSection";
import ResultsSection from "../components/ResultsSection";
import StudyGallery from "../components/StudyGallery";
import StaffSection from "../components/StaffSection";
import TestimonialsSection from "../components/TestimonialsSection";
import EnquiryForm from "../components/EnquiryForm";
import LocationSection from "../components/LocationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <SubjectsSection />
      <TeachingMethodSection />
      <ResultsSection />
      <StudyGallery />
      <StaffSection />
      <TestimonialsSection />
      <EnquiryForm />
      <LocationSection />
    </>
  );
}
