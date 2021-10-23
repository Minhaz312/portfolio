import Head from "next/head";
import About from "../components/About";
import Banner from "../components/Banner";
import Charge from "../components/Charge";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import NextNprogress from "nextjs-progressbar";

export default function Home() {
  return (
    <>
      <NextNprogress
        color="#00d6d8"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <div
        className="bg-custom-primary"
        style={{ minHeight: "100vh", overflow: "hidden" }}
      >
        <Head>
          <title>Mohammad Minhaz</title>
          <meta property="og:title" content="Mohammad Minhaz" />
          <meta
            name="description"
            content="Mohammad Shahidul Alam Minhaz is a web developer, experienced in React.js, Next.js, Node.js, Laravel, Lumen"
          />
          <meta
            property="og:description"
            content="Mohammad Shahidul Alam Minhaz is a web developer, experienced in React.js, Next.js, Node.js, Laravel, Lumen"
          />
          <link rel="icon" href="/images/me.jpg" />
          <meta property="og:image" content="/images/me.jpg" />
        </Head>

        <main>
          <Banner />
          <div className="container-md">
            <Projects />
            <About />
            <Skills />
            <Charge />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
