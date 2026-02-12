import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>('');

  const handleNavigate = (page: string, propertyId?: string) => {
    setCurrentPage(page);
    if (propertyId) {
      setSelectedPropertyId(propertyId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'ABS Immo Services - Immobilier de Prestige au Sénégal',
      properties: 'Nos Biens - ABS Immo Services',
      property: 'Détail du bien - ABS Immo Services',
      about: 'À Propos - ABS Immo Services',
      contact: 'Contact - ABS Immo Services',
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'properties':
        return <Properties onNavigate={handleNavigate} />;
      case 'property':
        return <PropertyDetail propertyId={selectedPropertyId} onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
