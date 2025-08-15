import React from "react";
import "@/app/Contact/Contact.css"

export default function Contact() {
  return (
    <>
      <main className="flex flex-col justify-center items-center px-6" style={{ height: "84vh", marginTop: "8vh", marginBottom: "8vh"}}>
        <section className="flex flex-col justify-center items-center w-full h-full max-w-4xl mx-auto">
          <div className="w-full h-full">
            <iframe 
              className="iframe" 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdc8GAcDDiLQADawH6URS7wDhNO2_SOVGKyqfRePfRbL7MKSw/viewform?embedded=true" 
              style={{
                width: "100%", 
                height: "100%", 
                backgroundColor: "#ffffff",
                border: "none",
                borderRadius: "8px"
              }}
              title="Formulaire de contact"
            >
              Chargement…
            </iframe>
          </div>
        </section>
      </main>
    </>
  );
}
