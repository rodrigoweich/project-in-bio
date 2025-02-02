import Hero from "@/app/components/landing-page/hero";
import Header from "@/app/components/landing-page/header";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto">
            <Header/>
            <Hero/>

            {/*
      <VideoExplanation />
      <Pricing />
      <FAQ /> */}
        </div>
    );
}
