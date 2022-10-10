import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>OmniNet - Home</title>
        <meta name="author" content="Estevão Gomes" />
        <meta
          name="description"
          content="Esta é a página feita como desafio técnico para a Omnix Digital Experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <section className="m-8 flex">
          <div className="flex-1">
            <Image
              src="/Hero.jpg"
              height="500"
              width="800"
              layout="responsive"
            />
          </div>
          <div className="flex-1 p-4">
            <h1 className="text-5xl font-bold text-blue-500">
              <span id="shadow">OmniNet</span>
            </h1>
            <h2 className="my-4 text-3xl">
              A fibra óptica perfeita para sua família.
            </h2>
            <h3 className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur nam officiis ut ipsum, reiciendis excepturi ipsa
              laboriosam ab maiores.
            </h3>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
