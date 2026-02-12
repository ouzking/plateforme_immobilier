import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Bed,
  Bath,
  Maximize,
  MapPin
} from 'lucide-react';
import Button from '../components/Button';
import { properties } from '../data/properties';
import type { PropertyType } from '../types';

interface PropertiesProps {
  onNavigate: (page: string, propertyId?: string) => void;
}

export default function Properties({ onNavigate }: PropertiesProps) {
  const { t } = useTranslation();

  const [selectedType, setSelectedType] = useState<PropertyType>('all');
  const [priceRange, setPriceRange] =
    useState<'all' | 'low' | 'medium' | 'high'>('all');

  const filteredProperties = properties.filter((property) => {
    const typeMatch =
      selectedType === 'all' || property.type === selectedType;

    let priceMatch = true;
    if (priceRange === 'low') priceMatch = property.price < 300_000_000;
    if (priceRange === 'medium')
      priceMatch =
        property.price >= 300_000_000 &&
        property.price < 600_000_000;
    if (priceRange === 'high')
      priceMatch = property.price >= 600_000_000;

    return typeMatch && priceMatch;
  });

  return (
    <div className="bg-[#f6f7f5] min-h-screen text-blue-950">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 bg-blue-950 text-white">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-20">

          <div>
            <span className="uppercase tracking-[0.4em] text-blue-300 text-xs">
              {t('properties.hero.label')}
            </span>

            <h1 className="text-5xl xl:text-6xl font-light mt-8 leading-tight">
              {t('properties.hero.titleLine1')}
              <br />
              <span className="font-semibold">
                {t('properties.hero.titleLine2')}
              </span>
            </h1>

            <p className="text-blue-200 mt-8 max-w-xl leading-relaxed">
              {t('properties.hero.description')}
            </p>
          </div>

          <div className="hidden lg:flex items-end justify-end text-sm tracking-widest text-blue-300">
            {filteredProperties.length}{' '}
            {filteredProperties.length > 1
              ? t('properties.hero.countPlural')
              : t('properties.hero.count')}
          </div>

        </div>
      </section>

      {/* ================= FILTRES ================= */}
      <section className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-wrap gap-6 items-center">

          {/* TYPES */}
          <div className="flex gap-2">
            {(['all', 'villa', 'appartement', 'terrain', 'bureau'] as PropertyType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2 text-xs tracking-widest uppercase border transition
                  ${
                    selectedType === type
                      ? 'bg-blue-950 text-white border-blue-950'
                      : 'border-gray-300 text-gray-600 hover:border-blue-950 hover:text-blue-950'
                  }`}
              >
                {t(`properties.filters.${type}`)}
              </button>
            ))}
          </div>

          {/* BUDGET */}
          <div className="flex gap-2 ml-auto">
            {[
              { key: 'all', label: 'budgetAll' },
              { key: 'low', label: 'budgetLow' },
              { key: 'medium', label: 'budgetMedium' },
              { key: 'high', label: 'budgetHigh' }
            ].map((range) => (
              <button
                key={range.key}
                onClick={() => setPriceRange(range.key as any)}
                className={`px-4 py-2 text-xs tracking-widest border transition
                  ${
                    priceRange === range.key
                      ? 'bg-blue-950 text-white border-blue-950'
                      : 'border-gray-300 text-gray-600 hover:border-blue-950 hover:text-blue-950'
                  }`}
              >
                {t(`properties.filters.${range.label}`)}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= LISTE ================= */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">

          <AnimatePresence>
            {filteredProperties.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <p className="text-xl text-gray-600 mb-10">
                  {t('properties.empty.title')}
                </p>
                <Button
                  onClick={() => {
                    setSelectedType('all');
                    setPriceRange('all');
                  }}
                >
                  {t('properties.empty.reset')}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ x: 8 }}
                onClick={() => onNavigate('property', property.id)}
                className="cursor-pointer bg-white border shadow-sm hover:shadow-2xl transition"
              >
                <div className="grid grid-cols-[260px_1fr]">

                  {/* IMAGE */}
                  <div className="relative h-full">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENU */}
                  <div className="p-10 flex flex-col justify-between">

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs tracking-widest text-gray-400 uppercase">
                          {property.type}
                        </span>

                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin className="w-3 h-3" />
                          {property.location}
                        </span>
                      </div>

                      <h3 className="text-2xl font-medium mb-6 leading-snug">
                        {property.title}
                      </h3>

                      <div className="flex gap-6 text-sm text-gray-600">
                        {property.bedrooms && (
                          <span className="flex items-center gap-1">
                            <Bed className="w-4 h-4" />
                            {property.bedrooms}
                          </span>
                        )}
                        {property.bathrooms && (
                          <span className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            {property.bathrooms}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Maximize className="w-4 h-4" />
                          {property.surface} m²
                        </span>
                      </div>
                    </div>

                    <div className="pt-6 mt-10 border-t flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-400">
                          {t('properties.card.estimatedValue')}
                        </p>
                        <div className="text-3xl font-semibold">
                          {(property.price / 1_000_000).toFixed(0)} M FCFA
                        </div>
                      </div>

                      <span className="text-xs tracking-widest text-blue-950">
                        {t('properties.card.seeFile')}
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
