import Head from "next/head";
import BreathingExercise from "@/components/BreathingExercise";
import InfoCard from "@/components/InfoCard";
import Layout from "@/components/Layout";

export default function FourSevenEight() {
  return (
    <>
      <Head>
        <title>4-7-8 Breathing Method - Breathe-Ease</title>
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl m-4">4-7-8 Breathing Method</h1>
          <BreathingExercise technique="4-7-8" />
          <InfoCard technique="4-7-8" />
        </div>
      </Layout>
    </>
  );
}
