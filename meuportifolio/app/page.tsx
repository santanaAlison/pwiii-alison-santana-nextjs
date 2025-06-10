'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { FaGithub, FaBehance, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  const [scale, setScale] = useState(1);
  const [borderRadius, setBorderRadius] = useState('20px');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.7, 1 - scrollY / 600);
      setScale(newScale);

      const radiusValue = Math.min(50, 20 + scrollY / 10);
      setBorderRadius(radiusValue >= 50 ? '50%' : `${radiusValue}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* TOPO - BRANCO */}
      <header className="bg-white text-black shadow-md">
        <Navbar />
      </header>

      {/* FUNDO PRINCIPAL COM CINZA CLARO */}
      <main className="bg-[#f5f5f5] text-black">
        {/* SOBRE */}
        <section id="sobre" className="h-[90vh] px-6 flex flex-col md:flex-row items-center justify-center gap-10">
          <div
            className="transition-transform duration-300 flex justify-center"
            style={{ transform: `scale(${scale})` }}
          >
            <Image
              src="/foto.jpeg"
              alt="Minha foto"
              width={400}
              height={350}
              className="shadow-lg object-cover transition-all duration-300"
              style={{ borderRadius, width: '800px', height: '800px' }}
            />
          </div>

          <div
  className="bg-white text-black p-12 rounded-xl shadow-md transition-transform duration-300 w-full md:w-[900px] md:h-[800px] flex flex-col justify-center items-center text-center"
  style={{ transform: `scale(${scale})` }}
>
  <h1 className="text-6xl font-bold mb-6">Olá! Eu sou Alison!</h1>
  <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
    Desenvolvedor e designer gráfico em formação, com paixão por tecnologia, design e soluções criativas. Atua na criação de sistemas e interfaces modernas, unindo lógica e estética para transformar ideias em experiências visuais e interativas de impacto.
  </p>
</div>
        </section>

        {/* CONHECIMENTOS */}
        <section id="conhecimentos" className="mb-10 p-6 rounded bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Linguagens e Programas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/ilustrator.png", alt: "Adobe Illustrator", label: "Adobe Illustrator" },
              { src: "/photoshop.png", alt: "Photoshop", label: "Photoshop" },
              { src: "/javascript.png", alt: "JavaScript", label: "JavaScript" },
              { src: "/Reactnative.png", alt: "React Native", label: "React Native" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded shadow flex flex-col items-center">
                <Image src={item.src} alt={item.alt} width={80} height={80} className="mb-2" />
                {item.label}
              </div>
            ))}
          </div>
        </section>

        {/* PROJETOS */}
        <section id="meus-projetos" className="mb-32 p-6 bg-white rounded shadow">
          <h2 className="text-3xl font-semibold mb-8 text-center">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PROJETO 1 */}
            <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <div className="w-full h-64 relative mb-4">
                <Image
                  src="/logocompleta.jpg"
                  alt="Projeto 1"
                  fill
                  className="rounded-md object-cover"
                  sizes="100%"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Plataforma Anxity</h3>
              <p className="text-sm text-gray-700 mb-3">
                Aplicativo feito para a conclusão de curso de Desenvolvimento de Sistemas.
              </p>
              <a
                href="https://github.com/KenjiCaique/Anxiety-TCC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Ver no GitHub →
              </a>
            </div>

            {/* PROJETO 2 */}
            <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col">
              <div className="w-full h-64 relative mb-4">
                <Image
                  src="/socialmedia.jpg"
                  alt="Projeto 2"
                  fill
                  className="rounded-md object-cover"
                  sizes="100%"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Portfólio Visual</h3>
              <p className="text-sm text-gray-700 mb-3">
                Design de identidade visual desenvolvido no Illustrator e Photoshop.
              </p>
              <a
                href="https://www.behance.net/carneirsantana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Ver no Behance →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* CONTATO */}
<section id="contato" className="bg-white w-full text-black py-12 px-6 border-t border-gray-300">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Contatos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
      
      {/* Email */}
      <a
        className="flex flex-col items-center text-center hover:text-red-600 transition"
      >
        <MdEmail className="text-4xl mb-2" />
        <span className="text-lg font-medium">alisonsantana866@gmail.com</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/santanaAlison"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center hover:text-purple-800 transition"
      >
        <FaGithub className="text-4xl mb-2" />
        <span className="text-lg font-medium">santanaAlison</span>
      </a>

      {/* Behance */}
      <a
        href="https://www.behance.net/carneirsantana"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center hover:text-blue-600 transition"
      >
        <FaBehance className="text-4xl mb-2" />
        <span className="text-lg font-medium">Alison Santana</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/alison-santana-048b78297/" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center hover:text-blue-700 transition"
      >
        <FaLinkedin className="text-4xl mb-2" />
        <span className="text-lg font-medium">Alison Santana</span>
      </a>

    </div>
  </div>
</section>

    </>
  );
}
