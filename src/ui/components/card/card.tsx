import "@/ui/components/card/card.css";
import Link from "next/link";

interface CardProps {
  titre: string;
  contenue: string;
  type: string;
  url: string;
  cover: string;
}

export default function Card({ titre, contenue, type, url, cover }: CardProps) {
  // Fonction pour obtenir l'icône placeholder basée sur le type
  const getPlaceholderIcon = () => {
    switch (type.toLowerCase()) {
      case 'web':
      case 'website':
        return '🌐';
      case 'mobile':
      case 'app':
        return '📱';
      case 'design':
      case 'ui/ux':
        return '🎨';
      case 'backend':
      case 'api':
        return '⚙️';
      case 'database':
        return '🗄️';
      case 'game':
        return '🎮';
      case 'ai':
      case 'machine learning':
        return '🤖';
      default:
        return '📁';
    }
  };

  return (
    <div className="metro-tile">
      <Link href={url} className="metro-link">
        <div className="metro-icon">
          <span className="metro-placeholder-icon">
            {getPlaceholderIcon()}
          </span>
        </div>
        
        <div className="metro-label">
          {titre}
        </div>
      </Link>
    </div>
  );
}
