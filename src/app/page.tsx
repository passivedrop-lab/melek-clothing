import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />

      {/* Elegance Section */}
      <section className="py-32 bg-secondary border-y border-white/5">
        <div className="container text-center">
          <h2 className="text-6xl md:text-9xl opacity-10 font-serif absolute left-0 right-0 pointer-events-none select-none">VINTAGE</h2>
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl mb-8">Plus qu'une friperie,<br /><span className="italic">un héritage de style.</span></h3>
            <p className="text-muted leading-loose">
              Nous croyons que chaque vêtement a une histoire à raconter. Nos pièces sont soigneusement sélectionnées à Cotonou pour leur qualité, leur rareté et leur capacité à subjuguer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
