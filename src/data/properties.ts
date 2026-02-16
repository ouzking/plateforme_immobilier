import type { Property } from '../types';
import image2 from "../assets/appart1/App1.jpeg";
import image22 from "../assets/appart1/app11.jpeg";
import image222 from "../assets/appart1/App111.jpeg";
import image2222 from "../assets/appart1/App1111.jpeg";
import image3 from "../assets/appart2/APP22222.jpeg";
import image33 from "../assets/appart2/app22.jpeg";
import image333 from "../assets/appart2/app222.jpeg";
import image3333 from "../assets/appart2/app2222.jpeg";
import image33333 from "../assets/appart2/APP22222.jpeg";
import image4 from "../assets/appart3/app3.jpeg";
import image44 from "../assets/appart3/app33.jpeg";
import image444 from "../assets/appart3/app333.jpeg";
import image4444 from "../assets/appart3/app3333.jpeg";
import image44444 from "../assets/appart3/APP33333.jpeg";
import image444444 from "../assets/appart3/APP333333.jpeg";
import image5 from "../assets/hangars1/hangar1.jpeg";
import image55 from "../assets/hangars1/hangar11.jpeg";
import image555 from "../assets/hangars1/hangar111.jpeg";
import image6 from "../assets/appart4/app44.jpeg";
import image66 from "../assets/appart4/app4.jpeg";
import image666 from "../assets/appart4/app444.jpeg";
import image7 from "../assets/appart5/app5.jpeg";
import image77 from "../assets/appart5/app55.jpeg";
import image777 from "../assets/appart5/app555.jpeg";
import image7777 from "../assets/appart5/app5555.jpeg";
import image8 from "../assets/appart6/app6.jpeg";
import image88 from "../assets/appart6/app66.jpeg";
import image888 from "../assets/appart6/app666.jpeg";
import image9 from "../assets/appart7/app7.jpeg";
import image99 from "../assets/appart7/app77.jpeg";
import image999 from "../assets/appart7/app777.jpeg";
import image9999 from "../assets/appart7/app7777.jpeg";
import image99999 from "../assets/appart7/app77777.jpeg";
import image999999 from "../assets/appart7/app777777.jpeg";
import image9999999 from "../assets/appart7/app7777777.jpeg";
import image99999999 from "../assets/appart7/app77777777.jpeg";
import image10 from "../assets/appart8/app8.jpeg";
import image100 from "../assets/appart8/app88.jpeg";
import image1000 from "../assets/appart8/app888.jpeg";
import image10000 from "../assets/appart8/app8888.jpeg";
import image100000 from "../assets/appart8/app88888.jpeg";
import com1 from "../assets/commerce/commerce1.jpeg";
import com2 from "../assets/commerce/commerce2.jpeg";
import com3 from "../assets/commerce/commerce3.jpeg";
import com4 from "../assets/commerce/commerce4.jpeg";
import han2 from "../assets/hangars2/hangar2.jpeg";
import han22 from "../assets/hangars2/hangar22.jpeg";
import han222 from "../assets/hangars2/hangar222.jpeg";
import han2222 from "../assets/hangars2/hangar2222.jpeg";
import han3 from "../assets/hangars3/hangar3.jpeg";
import han33 from "../assets/hangars3/hangar33.jpeg";
import han333 from "../assets/hangars3/hangar333.jpeg";
import han4 from "../assets/hangars4/hangar4.jpeg";
import han44 from "../assets/hangars4/hangar44.jpeg";
import han444 from "../assets/hangars4/hangar444.jpeg";
import han4444 from "../assets/hangars4/hangar4444.jpeg";










export const properties: Property[] = [
  {
    id: '1',
    title: 'Appartement Meublé de Standing ',
    type: 'appartement',
    location: 'Point E, Dakar',
    price: 2000000,
    surface: 450,
    bedrooms: 3,
    bathrooms: 4,
    description: 'Une belle opportunité pour un cadre de vie agréable et sécurisé au cœur de Dakar. Architecture moderne et finitions haut de gamme.',
    images: [
image2,    
image22,      
image222, image2222    ],
    features: ['Ascenseur', 'Groupe électrogène', 'Cuisine entièrement équipée', 'Salon moderne et lumineux', 'Sécurité 24/7'],
  },
  {
    id: '2',
    title: 'Superbe Appartement Meublé',
    type: 'appartement',
    location: 'Point E, Dakar',
    price: 1500000,
    surface: 170,
    bedrooms: 3,
    bathrooms: 1,
    description: 'L’appartement est entièrement meublé avec goût, dans un style moderne et fonctionnel, parfait pour une installation immédiate. Le cadre est calme, familial et sécurisé, avec toutes les commodités à proximité (écoles, commerces, restaurants, axes routiers).',
    images: [
      image3, image33, image333, image3333, image33333],
    features: ['Terrasse', 'Ascenseur', 'Parking', 'Concierge', 'Climatisation', 'Vue panoramique'],
  },
  {
    id: '3',
    title: 'Villa Moderne Premium',
    type: 'villa',
    location: 'Ngor, Dakar',
    price: 1500000,
    surface: 380,
    bedrooms: 3,
    bathrooms: 1,
    description: 'Immeuble moderne situé dans un quartier résidentiel calme et sécurisé des Almadies, à proximité de la BICIS, grande piscine, domotique complète et espaces de vie lumineux.',
    images: [
      image4, image44, image444, image4444, image44444, image444444
    ],
    features: ['Piscine', 'Ascenseur', 'Jardin', 'Garage', 'Climatisation', 'Salle de sport', 'Surpresseur et réservoir d’eau', 'Sécurité 24h/24'],
  },
  {
    id: '4',
    title: 'Hangar Standing Premium',
    type: 'hangar',
    location: ' Colobane, Dakar',
    price: 5000000,
    surface: 1500,
    description: 'Espace professionnel d\'exception, zone accessible, proche des grands axes routiers,  idéale pour stockage, logistique ou activité industrielle, généreuse, facilitant la manutention et le stockage en hauteur, Accès poids lourds et sécurité renforcée.',
    images: [
      image5, image55, image555
    ],
    features: ['Localisation stratégique', 'Structure adaptée ', 'Hauteur sous plafond ', 'Sécurité', 'Accès poids lourds'],
  },
  {
    id: '5',
    title: 'Apparemment Grand Standing',
    type: 'appartement',
    location: 'Fann Résidence, Dakar',
    price: 1600000,
    surface:245,
    bedrooms: 3,
    bathrooms: 4,
    description: 'Ascenseur, Salle de sport, Salle de festivités, Services gardiennage, nettoyage, Piscine, garage sous-sol.',
    images: [
      image6, image66, image666
    ],
    features: ['Ascenseur', 'Garage', 'Salle de sport', ' Salle de festivités', 'Piscine', 'Accès sécurisé'],
  },
  {
    id: '6',
    title: 'Résidence de Prestige',
    type: 'appartement',
    location: 'Fann Résidence, Dakar',
    price: 2000000,
    surface: 500,
    bedrooms: 3,
    bathrooms: 4,
    description: 'Propriété d\'exception, architecture raffinée, Découvrez ce grand appartement de standing idéalement situé à Fann Résidence, dans un environnement calme, sécurisé et proche de toutes commodités.',
    images: [
      image7, image77, image77, image777, image7777
    ],
    features: ['Piscine', 'Réservoir d’eau', 'Ascenseur', 'Groupe électrogène', 'Sécurité'],
  },
   {
    id: '7',
    title: 'Villa Prestige',
    type: 'villa',
    location: 'Hann Marinas, Dakar',
    price: 2000000,
    surface: 400,
    bedrooms: 5,
    bathrooms: 4,
    description: 'Propriété d\'exception, architecture raffinée, Un cadre idéal pour une vie paisible, avec des espaces fonctionnels et un confort optimal, avec 2 cuisines : une américaine moderne + une cuisine africaine, sécurisé et proche de toutes commodités.',
    images: [
      image8, image88, image888
    ],
    features: ['Piscine privée', 'Réservoir d’eau', 'Jardin', 'Buanderie', 'Sécurité'],
  },
   {
    id: '8',
    title: 'Grande Villa Haut Standing',
    type: 'villa',
    location: 'Mamelles, Cité Mbackiyou Faye, Dakar',
    price: 2500000 ,
    surface: 400,
    bedrooms: 3,
    bathrooms: 4,
    description: 'Propriété d\'exception, architecture raffinée, un bien idéal pour une famille recherchant confort, standing et tranquillité dans un environnement sécurisé et proche de toutes commodités.',
    images: [
    image9, image99, image999, image9999, image99999, image999999, image9999999, image99999999
    ],
    features: ['Piscine', 'Réservoir d’eau', 'Terrasse', 'Garage', 'Buanderie', 'jardin', 'Sécurité'],
  },
  {
    id: '9',
    title: 'Villa Haut Standing',
    type: 'villa',
    location: 'Virage, Dakar',
    price: 2800000 , 
    surface: 400,
    bedrooms: 4,
    bathrooms: 5,
    description: 'Un cadre résidentiel idéal, proche de la plage, des commerces et de toutes commodités., un bien idéal pour une famille recherchant confort, standing et tranquillité dans un environnement sécurisé et proche de toutes commodités.',
    images: [
    image10, image100, image1000, image10000, image100000
    ],
    features: ['Piscine privé', 'Réservoir d’eau', 'Cuisine entièrement équipée', 'Garage', 'Buanderie', 'Jardin verdoyant', 'Sécurité'],
  },
  {
  id: '10',
  title: 'Grand Magasin Spacieux',
  type: 'commerce',   // 👈 IMPORTANT
  price: 700000,
  surface: 320,
  location: 'Dalifort Belvédère',
  description: 'Le local dispose de toilettes et convient idéalement pour commerce, bureaux ou showroom.',
  images: [com1, com2, com3, com4],
  features: ['A louer', 'Buanderie', 'une excellente visibilité', 'Sécurité'],
},
{
    id: '11',
    title: 'Hangar Standing',
    type: 'hangar',
    location: ' Rufisque, Dakar',
    price: 2000000,
    surface: 800,
    description: 'Espace professionnel d\'exception, zone accessible, Il dispose d’une toilette interne et offre un espace fonctionnel et facilement accessible,  idéale pour stockage, logistique ou activité industrielle, généreuse, facilitant la manutention et le stockage en hauteur, Accès poids lourds et sécurité renforcée.',
    images: [
      han2, han22, han222, han2222
    ],
    features: ['Localisation stratégique', 'Structure adaptée ', 'Hauteur sous plafond ', 'Sécurité', 'Accès poids lourds'],
  },
  {
    id: '12',
    title: 'Hangar Haut Standing',
    type: 'hangar',
    location: 'Diamniadio Dougar, Dakar',
    price: 6500000,
    surface: 2200,
    description: 'Espace professionnel d\'exception, zone accessible, proche des grands axes routiers,  Ce hangar est parfaitement adapté pour des activités de logistique, stockage ou industrielles, avec un accès facile aux grands axes et infrastructures de Diamniadio.',
    images: [
      han3, han33, han333
    ],
    features: ['Localisation stratégique', 'Structure adaptée ', 'Hauteur sous plafond ', 'Sécurité', 'Accès poids lourds'],
  },
   {
    id: '13',
    title: 'Hangar Ultra Premium',
    type: 'hangar',
    location: 'Diamniadio, Dakar',
    price: 2500000 ,
    surface: 800,
    description: 'Un bâtiment administratif avec bureaux et toilettes séparées, zone accessible, Des bureaux intégrés à l’intérieur,  un espace de réfection / cuisine pour plus de confort, parfaitement adapté pour des activités de logistique, stockage ou industrielles, Une chambre gardien pour assurer la sécurité',
    images: [
      han4, han44, han444, han4444
    ],
    features: ['Localisation stratégique', 'Structure adaptée ', 'Hauteur sous plafond ', 'Sécurité', 'Accès poids lourds'],
  },
];
