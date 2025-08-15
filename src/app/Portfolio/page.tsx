import React from "react";
import Card from "@/ui/components/card/card";
import Data from "@/data/projet.json"

export default function Portfolio() {
  const listProjet = Data["data"];

  return (
    <>
      <main className="flex flex-col justify-start items-center px-6 py-8" style={{ minHeight: "89vh", marginTop: "6vh", marginBottom: "5vh"}}>
        <section className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="titre1 text-center mb-4">Portfolio</h1>
            <p className="titre3 text-center">Découvrez mes projets et réalisations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {listProjet.map((elt, index) => {
              return (
                <Card
                  key={index}
                  titre={elt.titre}
                  contenue={elt.contenue}
                  type={elt.type}
                  url={elt.url}
                  cover={elt.cover}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
