import React from "react";
import Card from "@/ui/components/card/card";
import Data from "@/data/projet.json"

export default function Portfolio() {
  const listProjet = Data["data"];

 
  

  return (
    <main className="flex flex-row flex-wrap flex-center items-center " style={{ minHeight: "80vh"}}>
      {listProjet.map((elt, index) => {
        return (
        
            <Card
            key={index}
            titre={elt.titre}
            contenue={elt.contenue}
            type={elt.type}
            url={elt.url}
            cover={elt.cover}
    

            
          
            
          ></Card>
          
        );
      })}
    </main>
  );
}
