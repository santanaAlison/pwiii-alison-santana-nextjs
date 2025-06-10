// app/layout.tsx
import './globals.css'; // se você tiver esse arquivo

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
