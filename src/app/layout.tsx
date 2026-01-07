import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Melek Clothing | Friperie de Luxe & Élégance",
  description: "Découvrez notre collection exclusive de friperie sélectionnée avec soin. Style, classe et durabilité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="py-20 border-t border-white/5 text-center">
            <div className="container">
              <p className="text-xs uppercase tracking-widest text-muted mb-4">Livraison partout au Bénin — Basé à Cotonou</p>
              <p className="text-xs uppercase tracking-widest text-muted opacity-50">© 2026 Melek Clothing. Tous droits réservés.</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
