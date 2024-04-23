import "@/ui/components/card/card.css";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

interface CardProps {
  titre: string;
  contenue: string;
  type: string;
  url: string;
  cover: string
}

export default function Card({ titre, contenue, type, url ,cover}: CardProps) {
  return (
    <div className="card-container" style={{ flexGrow: 1  , backgroundImage: `url(${(cover === ""? "https://i.ibb.co/DVNLFLg/rien.png":cover)})`,backgroundSize:"cover"}} >
      <div className="card-item">
        <Link  href={url} className="card-item_link">
        <div className="card-item_image" >

        
            </div> 
          <div className="card-item_box"  >
            <div className="card-item_titre">{titre}</div>
            <div className="card-item_contenue">{contenue}</div>
            <div className="card-item_type">{type}</div>
          </div>
        </Link >
      </div>
    </div>
  );
}
