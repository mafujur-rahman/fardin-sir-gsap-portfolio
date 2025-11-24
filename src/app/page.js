import Banner from "@/components/home/Banner";
import Quote from "@/components/home/Quote";
import Skills from "@/components/home/Skills";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      <Quote />
      <Skills />
      <Skills />
    </div>
  );
}
