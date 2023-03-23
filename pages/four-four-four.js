import Head from "next/head";
import Nav from "@/components/Nav";
import BreathingExercise from "@/components/BreathingExercise";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/Footer";

export default function FourFourFour() {
  return (
    <>
      <Head>
        <title>4-4-4-4 Box Breathing Technique - Breathe-Ease</title>
        {/* Add other meta tags */}
      </Head>
      <Nav />
      <div className="container mx-auto">
        <h1 className="text-center text-2xl mt-4">4-4-4-4 Box Breathing Technique</h1>
        <BreathingExercise technique="4-4-4" />
        <InfoCard technique="4-4-4" />
      </div>
      <Footer />
    </>
  );
}
