import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rejoindre l'Élite | Melek Clothing",
    description: "Création de compte administrateur pour la gestion de l'empire Melek Clothing.",
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
