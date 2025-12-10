import BlogHomeSection from "@/components/pages/home/blogsection";
import BlogSection from "@/components/pages/home/blogsection";
import Feedback from "@/components/pages/home/feedbacksection";
import Future from "@/components/pages/home/futuresection";
import HeroSection from "@/components/pages/home/herosection";
import LuxurySection from "@/components/pages/home/luxurysection";
import StoreSection from "@/components/pages/home/storesection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <LuxurySection/>
      <Future/>
      <Feedback/>
      <BlogSection showButton={true}/>
    </div>
  );
}
