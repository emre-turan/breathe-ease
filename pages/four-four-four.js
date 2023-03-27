// pages/four-four-four.js
import Head from "next/head";
import Layout from "@/components/Layout";
import BreathingExercise from "@/components/BreathingExercise";
import InfoCard from "@/components/InfoCard";

export default function FourFourFour() {
  return (
    <>
      <Head>
        <title>4-4-4-4 Box Breathing Method - Breathe-Ease</title>
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl m-4">
            4-4-4-4 Box Breathing Method
          </h1>
          <BreathingExercise technique="4-4-4" />
          <InfoCard technique="4-4-4" />
        </div>
      </Layout>
    </>
  );
}
