import { Catalogue } from '../types';

export const catalogues: Catalogue[] = [
  {
    id: 'vitrified-slabs-2026',
    title: 'Grand Formats & Vitrified Slabs Edition',
    category: 'Large Format Slabs',
    description: 'Comprehensive technical and visual showcase of 1200x1800mm and 800x1600mm continuous porcelain slabs for seamless residential halls and executive foyers.',
    coverImage: '/images/hero-luxury-living.jpg',
    pages: 48,
    format: 'Digital Architectural Catalogue',
    features: [
      'Continuous marble veining guides',
      'Laying instructions for large slabs',
      'Recommended joint widths & leveling systems',
      'Surface reflectance index ratings'
    ]
  },
  {
    id: 'bath-sanctuary-collection',
    title: 'The Bath Sanctuary & Fluted Ceramic Series',
    category: 'Bath & Wellness',
    description: 'Curated wall-and-floor pairings designed for contemporary Indian bathrooms, powder rooms, and master en-suites, featuring fluted textures and anti-skid floor pavers.',
    coverImage: '/images/space-bathroom.jpg',
    pages: 36,
    format: 'Digital Architectural Catalogue',
    features: [
      'Moisture-resistant ceramic finishes',
      'Anti-skid R10 floor tile selections',
      'Vanity splashback accent layouts',
      'Matching niche and border concepts'
    ]
  },
  {
    id: 'kitchen-culinary-surfaces',
    title: 'Culinary Surfaces & Micro-Cement Looks',
    category: 'Kitchen & Dining',
    description: 'Stain-resistant, heat-stable porcelain surfaces engineered for Indian kitchen counters, splashbacks, and dining floor environments.',
    coverImage: '/images/space-kitchen.jpg',
    pages: 32,
    format: 'Digital Architectural Catalogue',
    features: [
      'Stain resistance testing standards',
      'Concrete & micro-cement look palettes',
      'Grout maintenance recommendations',
      'Island waterfall cladding details'
    ]
  },
  {
    id: 'outdoor-heavy-duty-pavers',
    title: 'Terrace, Veranda & Exterior Pavers',
    category: 'Outdoor & Heavy Duty',
    description: 'Thickened 12mm exterior vitrified tiles crafted for Aurangabad weather, monsoon drainage, veranda sun exposure, and parking pavements.',
    coverImage: '/images/space-outdoor.jpg',
    pages: 28,
    format: 'Digital Architectural Catalogue',
    features: [
      'R11 anti-skid textured finishes',
      'Thermal shock & UV stability specs',
      'Sloping and water runoff guidance',
      'High breaking load capacity data'
    ]
  },
  {
    id: 'artisan-wood-planks',
    title: 'Architectural Timber Planks & Parquet Series',
    category: 'Living & Bedroom',
    description: 'Realistic grain porcelain wood tiles that combine the organic warmth of Scandinavian oak with the effortless durability of vitrified ceramic.',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    pages: 24,
    format: 'Digital Architectural Catalogue',
    features: [
      'Staggered and herringbone laying patterns',
      'Rectified edges for hairline joints',
      'Termite-proof & water-resistant guarantees',
      'Warm greige and natural honey finishes'
    ]
  },
  {
    id: 'commercial-architectural-surfaces',
    title: 'Commercial Architectural & High-Traffic Surfaces',
    category: 'Commercial & Corporate',
    description: 'Vitrified and technical porcelain engineered for executive boardrooms, retail showrooms, hotel lobbies, and heavy commercial footfall in Aurangabad.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    pages: 40,
    format: 'Digital Architectural Catalogue',
    features: [
      'Compressive strength & MOHS hardness standards',
      'Staircase bullnose step and riser details',
      'Stain and chemical resistance ratings',
      'Corporate entrance lobby visual layouts'
    ]
  }
];

export const catalogueCategories = [
  'All Collections',
  'Large Format Slabs',
  'Bath & Wellness',
  'Kitchen & Dining',
  'Outdoor & Heavy Duty',
  'Living & Bedroom',
  'Commercial & Corporate'
] as const;
