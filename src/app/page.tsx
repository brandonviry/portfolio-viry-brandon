import Button from "@/ui/components/button/button"


export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center px-6" style={{ height: "84vh", marginTop: "8vh", marginBottom: "8vh"}}>
        <section className="flex flex-col justify-center items-center max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="titre1 text-center mb-6">Bienvenue</h1>
            <p className="titre2 text-center leading-relaxed px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
              Aspirant développeur web, je suis à la recherche d&apos;opportunités
              professionnelles pour appliquer mes compétences naissantes et
              développer mon savoir-faire dans le domaine du développement web.
              Motivé, adaptable et prêt à apprendre.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
