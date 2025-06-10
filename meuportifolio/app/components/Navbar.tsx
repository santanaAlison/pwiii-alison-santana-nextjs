import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white text-black px-9 py-8 rounded-full mx-9 ">
      <ul className="flex items-center justify-between w-full">
        {/* Texto à esquerda */}
        <li className="font-bold text-4xl ">Bem Vindos!</li>

        {/* Links à direita */}
        <div className="flex gap-6">
          <li><Link href="#sobre">Sobre</Link></li>
          <li><Link href="#projetos">Projetos</Link></li>
          <li><Link href="#contato">Contato</Link></li>
        </div>
      </ul>
    </nav>
  );
}