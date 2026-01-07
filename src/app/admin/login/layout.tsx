import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentification Prestige | Melek Clothing",
    description: "Espace sécurisé réservé aux curateurs et administrateurs de Melek Clothing. Excellence et contrôle.",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
