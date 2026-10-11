import { Product, TileCategory, TileSpace, TileFinish, TileLook } from '../types';

export const products: Product[] = [
  // 1. Statuario Oro
  {
    id: 'statuario-oro-vitrified',
    name: 'Statuario Oro Polished Slab',
    category: 'Vitrified Tiles',
    spaces: ['Living Room', 'Commercial Spaces', 'Office Spaces', 'Entrance and Foyer'],
    finish: 'Glossy',
    look: 'Marble Look',
    size: '1200 x 1800 mm',
    thickness: '9 mm',
    color: 'Warm Greige & Gold',
    image: '/images/tile-marble-statuary.jpg',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'An Italian Statuario-inspired vitrified slab defined by flowing smoky graphite veins and delicate warm ochre undertones. Designed for seamless luxury flooring with minimal grout lines.',
    surfaceDetail: 'High-definition digital glaze with mirror gloss polish and diamond-rectified edges.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.05% (Impervious)',
      slipResistance: 'R9 (Polished Interior)',
      suitability: ['Living Hall Flooring', 'Foyer & Entrance', 'Commercial Lobbies', 'Feature Accent Walls'],
      coveragePerBox: '23.25 sq.ft / 2 pcs'
    }
  },
  // 2. Travertino Navona
  {
    id: 'travertino-sand-matte',
    name: 'Travertino Navona Honed',
    category: 'Floor Tiles',
    spaces: ['Living Room', 'Bathroom', 'Balcony', 'Entrance and Foyer'],
    finish: 'Matte',
    look: 'Stone Look',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Sand Beige',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'A warm, soothing travertine stone texture with micro-linear sedimentation bands. The honed matte surface offers a tactile, serene foundation that harmonizes with natural wood and linen.',
    surfaceDetail: 'Silky micro-matte touch with enhanced scratch resistance.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.08%',
      slipResistance: 'R10 (Safe for Dry & Wet Footfall)',
      suitability: ['Master Bathrooms', 'Drawing Rooms', 'Covered Verandas', 'Entrance Foyers'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 3. Fluted Sand
  {
    id: 'fluted-greige-ceramic-wall',
    name: 'Linear Fluted Sand Relieve',
    category: 'Wall Tiles',
    spaces: ['Bathroom', 'Kitchen', 'Living Room', 'Bedroom'],
    finish: 'Satin',
    look: 'Decorative Tiles',
    size: '300 x 600 mm',
    thickness: '10 mm',
    color: 'Warm Ivory',
    image: '/images/space-bathroom.jpg',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Sculptural fluted ceramic wall tile providing rhythmic architectural shadow-lines. Perfect for creating tactile bathroom vanity backdrops, powder rooms, and bedroom bed-head walls.',
    surfaceDetail: 'Three-dimensional vertical concave flutes with soft satin ceramic enamel.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Cushioned Edge',
      waterAbsorption: '< 10% (Wall Grade)',
      slipResistance: 'Not applicable (Wall Only)',
      suitability: ['Vanity Backsplashes', 'Shower Accent Walls', 'Powder Rooms', 'Living Room Niches'],
      coveragePerBox: '15.5 sq.ft / 8 pcs'
    }
  },
  // 4. Urban Cement
  {
    id: 'urban-cement-smoke',
    name: 'Urban Cement Grigio',
    category: 'Porcelain Tiles',
    spaces: ['Kitchen', 'Living Room', 'Commercial Spaces', 'Office Spaces'],
    finish: 'Matte',
    look: 'Concrete Look',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Smoky Charcoal',
    image: '/images/space-kitchen.jpg',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Contemporary micro-cement aesthetic inspired by modern architectural lofts. Balanced tonal variations and subtle trowel marks create a calm industrial backdrop for open-plan kitchens.',
    surfaceDetail: 'Ultra-flat dry granular surface with natural light dispersion.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Kitchen Floors', 'Contemporary Dining', 'Commercial Offices', 'Art Studios'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 5. Nordic Oak
  {
    id: 'nordic-oak-chevron',
    name: 'Nordic Oak Plank Porcellanato',
    category: 'Floor Tiles',
    spaces: ['Bedroom', 'Living Room', 'Balcony', 'Office Spaces'],
    finish: 'Satin',
    look: 'Wood Look',
    size: '200 x 1200 mm',
    thickness: '10.5 mm',
    color: 'Natural Oak',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    roomImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    description: 'Faithfully captures the authentic grain, soft knots, and warm honey-amber tones of Scandinavian white oak without the maintenance, warping, or termite worries of real timber.',
    surfaceDetail: 'Synchronized grain relief matching visible knots and fine grain lines.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Straight Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Bedrooms', 'Walk-in Closets', 'Covered Balconies', 'Boutique Offices'],
      coveragePerBox: '15.5 sq.ft / 6 pcs'
    }
  },
  // 6. Terra Cotto Paver
  {
    id: 'terra-cotto-paver',
    name: 'Terra Cotto Anti-Skid Paver',
    category: 'Outdoor Tiles',
    spaces: ['Outdoor and Terrace', 'Balcony', 'Parking and Utility Areas', 'Staircases'],
    finish: 'Textured',
    look: 'Stone Look',
    size: '600 x 1200 mm',
    thickness: '12 mm',
    color: 'Earthy Terracotta',
    image: '/images/space-outdoor.jpg',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Heavy-duty exterior porcelain paver crafted for Aurangabad climatic conditions. Superior UV stability, high breaking strength, and high-traction textured grit suitable for monsoons.',
    surfaceDetail: 'Corundum-infused anti-skid structured finish with thermal shock resistance.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Beveled Rectified',
      waterAbsorption: '< 0.03%',
      slipResistance: 'R11 / Wet Pendulum Class C',
      suitability: ['Garden Patios', 'Terraces & Balconies', 'Driveways & Car Porches', 'Parking Areas'],
      coveragePerBox: '15.5 sq.ft / 2 pcs'
    }
  },
  // 7. Nero Marquina
  {
    id: 'nero-marquina-polishing',
    name: 'Nero Marquina Velvet Polished',
    category: 'Vitrified Tiles',
    spaces: ['Living Room', 'Bathroom', 'Commercial Spaces', 'Entrance and Foyer'],
    finish: 'Glossy',
    look: 'Marble Look',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Deep Charcoal & White',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    roomImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    description: 'Dramatic Spanish black marble inspiration featuring intense obsidian depth interrupted by crisp, lightning-like calcite white veining. High drama for statement walls and boutique hotel lobbies.',
    surfaceDetail: 'Deep crystalline vitrification with mirror optical reflectivity.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Accent Feature Walls', 'Dining Room Borders', 'Executive Offices', 'Showroom Foyers'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 8. Botticino Classico
  {
    id: 'bottochino-classic-vitrified',
    name: 'Botticino Classico Vitrified',
    category: 'Vitrified Tiles',
    spaces: ['Living Room', 'Bedroom', 'Staircases', 'Entrance and Foyer'],
    finish: 'Glossy',
    look: 'Neutral Tones',
    size: '600 x 1200 mm',
    thickness: '9 mm',
    color: 'Sand Beige',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'A timeless Italian Botticino beige with soft golden clouding and subtle fossilized mineral specks. The beloved classic for Indian family homes looking for warmth, durability, and luminosity.',
    surfaceDetail: 'Nano-sealed high gloss glaze resistant to everyday household stains.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Entire Residential Floor', 'Living and Bedrooms', 'Staircase Steps & Risers'],
      coveragePerBox: '15.5 sq.ft / 2 pcs'
    }
  },
  // 9. Basaltina Slate
  {
    id: 'basalt-slate-matte',
    name: 'Basaltina Slate Charcoal',
    category: 'Ceramic Tiles',
    spaces: ['Bathroom', 'Kitchen', 'Balcony', 'Parking and Utility Areas'],
    finish: 'Matte',
    look: 'Stone Look',
    size: '600 x 600 mm',
    thickness: '9.5 mm',
    color: 'Deep Charcoal',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Volcanic basalt stone texture with subtle mineral shimmer and organic cleft relief. Ideal for modern monochromatic bathrooms, providing grounding contrast against light ceramics.',
    surfaceDetail: 'Natural stone split-face relief with matte non-reflective seal.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.5%',
      slipResistance: 'R10',
      suitability: ['Bathroom Floors', 'Shower Recesses', 'Balcony Flooring', 'Kitchen Utility Areas'],
      coveragePerBox: '15.5 sq.ft / 4 pcs'
    }
  },
  // 10. Artisan Encaustic
  {
    id: 'moroccan-heritage-encaustic',
    name: 'Artisan Zellige Geometric',
    category: 'Decorative Tiles',
    spaces: ['Kitchen', 'Bathroom', 'Living Room', 'Balcony'],
    finish: 'Matte',
    look: 'Decorative Tiles',
    size: '300 x 300 mm',
    thickness: '9 mm',
    color: 'Warm Ivory & Terracotta',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Handcrafted encaustic tile revival featuring Mediterranean-meets-Marathwada geometric motifs in muted terracotta, olive, and sand beige tones. Perfect for breakfast nooks and niches.',
    surfaceDetail: 'Silk matte ceramic body with high pigment density.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Classic Pressed',
      waterAbsorption: '< 3%',
      slipResistance: 'R10',
      suitability: ['Kitchen Splashbacks', 'Pooja Room Floors & Walls', 'Balcony Feature Corners', 'Bar Counters'],
      coveragePerBox: '9.7 sq.ft / 10 pcs'
    }
  },
  // 11. Granito Bullnose Step & Riser
  {
    id: 'granito-step-riser',
    name: 'Granito Bullnose Step & Riser',
    category: 'Floor Tiles',
    spaces: ['Staircases', 'Commercial Spaces', 'Entrance and Foyer', 'Parking and Utility Areas'],
    finish: 'Textured',
    look: 'Stone Look',
    size: '300 x 1200 mm',
    thickness: '12 mm',
    color: 'Olive Slate',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Engineered full-body porcelain stair treads with factory-milled anti-skid grooves and rounded bullnose profile. Designed for heavy residential duplexes and commercial stairwells.',
    surfaceDetail: 'Three anti-slip safety grooves with full-body through-color composition.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Bullnose Tread + Square Riser',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R11 Anti-Skid',
      suitability: ['Internal Duplex Stairs', 'External Commercial Staircases', 'Villa Entrances'],
      coveragePerBox: 'Step + Riser pair'
    }
  },
  // 12. Calacatta Royale Satin
  {
    id: 'calacatta-gold-satin',
    name: 'Calacatta Royale Satin Slab',
    category: 'Porcelain Tiles',
    spaces: ['Kitchen', 'Bathroom', 'Living Room', 'Bedroom'],
    finish: 'Satin',
    look: 'Marble Look',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Warm Greige & Gold',
    image: '/images/tile-marble-statuary.jpg',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Soft-touch velvet satin finish bringing subtle luminescence to Calacatta marble designs. Eliminates glaring light reflections while preserving luxurious warmth.',
    surfaceDetail: 'Honed silk touch finish with zero light glare.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9 / Satin',
      suitability: ['Kitchen Island Cladding', 'Dining Room Floors', 'Bathroom Vanity Walls'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 13. Terrazzo Veneziano
  {
    id: 'terrazzo-veneziano-greige',
    name: 'Terrazzo Veneziano Bianco',
    category: 'Porcelain Tiles',
    spaces: ['Kitchen', 'Bathroom', 'Commercial Spaces', 'Entrance and Foyer'],
    finish: 'Matte',
    look: 'Terrazzo Effect',
    size: '600 x 1200 mm',
    thickness: '9.5 mm',
    color: 'Ivory with Mineral Flecks',
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Bespoke Italian terrazzo revival with micro-aggregates of river stone, quartz, and marble flecks suspended in a neutral porcelain matrix. Timeless charm for contemporary cafes and bathrooms.',
    surfaceDetail: 'Honed smooth stone micro-texture with high scratch resistance.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Modern Kitchens', 'Boutique Bathrooms', 'Retail Showrooms', 'Entrance Lobbies'],
      coveragePerBox: '15.5 sq.ft / 2 pcs'
    }
  },
  // 14. French Ash Chevron Wood
  {
    id: 'french-ash-chevron',
    name: 'French Ash Herringbone Plank',
    category: 'Floor Tiles',
    spaces: ['Bedroom', 'Living Room', 'Office Spaces'],
    finish: 'Satin',
    look: 'Wood Look',
    size: '150 x 900 mm',
    thickness: '10 mm',
    color: 'Muted Ash Grey',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1000&q=80',
    roomImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    description: 'Slender chevron and herringbone wood porcelain planks with refined quarter-sawn ash grain. Brings Parisian salon elegance without moisture expansion.',
    surfaceDetail: 'Authentic brushed timber feel with satin low-glare sheen.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Bedrooms', 'Private Studies', 'Penthouse Living Areas'],
      coveragePerBox: '12.8 sq.ft / 8 pcs'
    }
  },
  // 15. Sahara Sandstone Textured
  {
    id: 'sahara-sandstone-textured',
    name: 'Sahara Dune Textured Paver',
    category: 'Outdoor Tiles',
    spaces: ['Outdoor and Terrace', 'Balcony', 'Parking and Utility Areas'],
    finish: 'Textured',
    look: 'Stone Look',
    size: '600 x 600 mm',
    thickness: '16 mm',
    color: 'Sand Beige',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Heavy 16mm vitrified structural paver with ribbed wind-swept dune ripple texture. Ideal for drive-over porch areas, monsoon terraces, and poolside decking.',
    surfaceDetail: 'R11 high-traction structured grain immune to tyre scuffing and moss.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Chamfered Edge',
      waterAbsorption: '< 0.02%',
      slipResistance: 'R11 / Class 3',
      suitability: ['Driveways', 'Rooftop Terraces', 'Open Verandas', 'Pool Areas'],
      coveragePerBox: '7.75 sq.ft / 2 pcs'
    }
  },
  // 16. Pure Crema Minimal
  {
    id: 'pure-crema-minimal',
    name: 'Crema Nude Minimalist Slab',
    category: 'Vitrified Tiles',
    spaces: ['Living Room', 'Bedroom', 'Office Spaces', 'Entrance and Foyer'],
    finish: 'Matte',
    look: 'Minimal Designs',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Warm Ivory',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'A pure, quiet mineral surface with zero pattern distraction. Emphasizes architectural proportions, furniture shapes, and natural soft light.',
    surfaceDetail: 'Silky micro-fine powder touch glaze.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Minimalist Interiors', 'Living Halls', 'Art Galleries', 'Bedrooms'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 17. Pietra Grey Glossy
  {
    id: 'pietra-grey-glossy',
    name: 'Pietra Grey Polished Porcelain',
    category: 'Vitrified Tiles',
    spaces: ['Living Room', 'Commercial Spaces', 'Entrance and Foyer', 'Office Spaces'],
    finish: 'Glossy',
    look: 'Marble Look',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Smoky Charcoal & White',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    roomImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    description: 'Iconic Iranian marble aesthetic characterized by deep pewter-grey fields traversed by fine white linear veins. High sophistication for corporate suites and executive dining.',
    surfaceDetail: 'Ultra-glossy liquid glass glaze with deep specular reflections.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Boardrooms', 'Formal Dining Rooms', 'Reception Lounges'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 18. Terracotta Hexagon Decorative
  {
    id: 'terracotta-hex-decorative',
    name: 'Artisan Hexagon Cotto',
    category: 'Decorative Tiles',
    spaces: ['Balcony', 'Kitchen', 'Bathroom', 'Outdoor and Terrace'],
    finish: 'Matte',
    look: 'Decorative Tiles',
    size: '200 x 230 mm',
    thickness: '9.5 mm',
    color: 'Earthy Terracotta',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Hexagonal interlocking terracotta ceramic tiles that create a rustic, warm Mediterranean atmosphere. Pairs beautifully with brass hardware and potted ferns.',
    surfaceDetail: 'Traditional extruded matte finish with slight organic edge softening.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Pressed Geometric',
      waterAbsorption: '< 2%',
      slipResistance: 'R10',
      suitability: ['Balcony Floors', 'Kitchen Islands', 'Pooja Rooms', 'Veranda Borders'],
      coveragePerBox: '8.5 sq.ft / 25 pcs'
    }
  },
  // 19. Micro-Terrazzo Grigio
  {
    id: 'micro-terrazzo-grigio',
    name: 'Micro-Terrazzo Grigio Honed',
    category: 'Porcelain Tiles',
    spaces: ['Bathroom', 'Kitchen', 'Commercial Spaces', 'Office Spaces'],
    finish: 'Matte',
    look: 'Terrazzo Effect',
    size: '600 x 600 mm',
    thickness: '9 mm',
    color: 'Cool Grey with Dark Granules',
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Fine-grained architectural terrazzo featuring micro-basalt and quartz inclusions. A durable, forgiving surface that conceals everyday dust and splashes with ease.',
    surfaceDetail: 'Dry honed finish with gentle anti-slip texture.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Bathroom Floors & Walls', 'Cafeterias', 'High-traffic Corridors'],
      coveragePerBox: '15.5 sq.ft / 4 pcs'
    }
  },
  // 20. Concrete Loft Slate
  {
    id: 'concrete-loft-anthracite',
    name: 'Cast Concrete Anthracite',
    category: 'Porcelain Tiles',
    spaces: ['Living Room', 'Commercial Spaces', 'Office Spaces', 'Staircases'],
    finish: 'Matte',
    look: 'Concrete Look',
    size: '600 x 1200 mm',
    thickness: '9.5 mm',
    color: 'Deep Charcoal',
    image: '/images/space-kitchen.jpg',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Deep charcoal shuttered concrete look with subtle formwork patterns. Delivers architectural weight and modern gravitas to open floor plans.',
    surfaceDetail: 'Micro-textured matte porcelain with zero reflectance.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Commercial Lofts', 'Living Areas', 'Staircase Walls', 'Offices'],
      coveragePerBox: '15.5 sq.ft / 2 pcs'
    }
  },
  // 21. Natural Teakwood Plank
  {
    id: 'natural-teakwood-plank',
    name: 'Golden Teak Strip Vitrified',
    category: 'Floor Tiles',
    spaces: ['Bedroom', 'Living Room', 'Balcony', 'Staircases'],
    finish: 'Satin',
    look: 'Wood Look',
    size: '200 x 1200 mm',
    thickness: '10 mm',
    color: 'Warm Teak Ochre',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    roomImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    description: 'Captures the warm golden luster of Indian teakwood. Deep oil-rubbed appearance without vulnerability to moisture, spills, or sunlight fading.',
    surfaceDetail: 'Structured wood grain with satin finish.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Master Bedrooms', 'Guest Suites', 'Staircase Steps', 'Balconies'],
      coveragePerBox: '15.5 sq.ft / 6 pcs'
    }
  },
  // 22. Moroccan Star Wall
  {
    id: 'moroccan-star-wall',
    name: 'Zellige Star & Cross Relieve',
    category: 'Wall Tiles',
    spaces: ['Bathroom', 'Kitchen', 'Entrance and Foyer'],
    finish: 'Glossy',
    look: 'Decorative Tiles',
    size: '300 x 450 mm',
    thickness: '8.5 mm',
    color: 'Warm Ivory & Sage',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Gloss-glazed ceramic wall tiles reminiscent of traditional artisan Moroccan tiles. Hand-molded undulating edges reflect light with shimmering fluidity.',
    surfaceDetail: 'High gloss reactive enamel glaze with subtle color pools.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Artisanal Soft Edge',
      waterAbsorption: '< 10%',
      slipResistance: 'Wall Only',
      suitability: ['Shower Niches', 'Kitchen Splashbacks', 'Powder Room Vanity'],
      coveragePerBox: '14.5 sq.ft / 10 pcs'
    }
  },
  // 23. Heavy Duty Chequered Parking
  {
    id: 'chequered-heavy-duty-parking',
    name: 'Industrial Chequered Paver',
    category: 'Outdoor Tiles',
    spaces: ['Parking and Utility Areas', 'Outdoor and Terrace'],
    finish: 'Textured',
    look: 'Stone Look',
    size: '400 x 400 mm',
    thickness: '20 mm',
    color: 'Charcoal & Terracotta',
    image: '/images/space-outdoor.jpg',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Ultra-heavy 20mm vitrified vehicle paver featuring raised pyramidal tread buttons. Engineered for commercial car parks, driveway ramps, and utility wash yards.',
    surfaceDetail: 'Industrial diamond button relief with compressive strength >45 N/mm².',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Heavy Chamfer',
      waterAbsorption: '< 0.01%',
      slipResistance: 'R12 High-Traction',
      suitability: ['Car Parking Porch', 'Ramps', 'Service Utility Yards', 'Driveways'],
      coveragePerBox: '6.88 sq.ft / 4 pcs'
    }
  },
  // 24. Linen Mute Neutral
  {
    id: 'linen-mute-neutral',
    name: 'Woven Linen Silk Ceramic',
    category: 'Wall Tiles',
    spaces: ['Bedroom', 'Living Room', 'Bathroom', 'Office Spaces'],
    finish: 'Satin',
    look: 'Neutral Tones',
    size: '300 x 600 mm',
    thickness: '9 mm',
    color: 'Sand Beige',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Textile-inspired ceramic wall cladding mimicking natural unbleached raw linen fabric. Imparts warmth, acoustic softness, and tactile intimacy to private spaces.',
    surfaceDetail: 'Micro-embossed fabric cross-weave satin texture.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 8%',
      slipResistance: 'Wall Only',
      suitability: ['Bedroom Headboard Walls', 'Dressing Rooms', 'Executive Offices'],
      coveragePerBox: '15.5 sq.ft / 8 pcs'
    }
  },
  // 25. Alpine Slate Paver
  {
    id: 'alpine-slate-paver',
    name: 'Alpine Cleft Quartzite Slab',
    category: 'Outdoor Tiles',
    spaces: ['Outdoor and Terrace', 'Balcony', 'Parking and Utility Areas', 'Staircases'],
    finish: 'Textured',
    look: 'Stone Look',
    size: '600 x 1200 mm',
    thickness: '12 mm',
    color: 'Smoky Charcoal & Olive',
    image: '/images/space-outdoor.jpg',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Natural mountain cleft quartzite reproduced with 3D sync scanning. Natural split-face clefts provide superior barefoot traction even after heavy rain.',
    surfaceDetail: 'Multi-level relief texture with anti-algae glaze.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.03%',
      slipResistance: 'R11 Anti-Skid',
      suitability: ['Open Sky Terraces', 'Staircases', 'Garden Walkways', 'Balconies'],
      coveragePerBox: '15.5 sq.ft / 2 pcs'
    }
  },
  // 26. Minimalist White Matte
  {
    id: 'minimalist-white-matte',
    name: 'Nordic Pure White Micro-Matte',
    category: 'Wall Tiles',
    spaces: ['Kitchen', 'Bathroom', 'Commercial Spaces', 'Office Spaces'],
    finish: 'Matte',
    look: 'Minimal Designs',
    size: '300 x 900 mm',
    thickness: '9 mm',
    color: 'Pure White',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Crisp, velvety architectural white wall slab with zero yellow undertones. Designed to reflect soft ambient light evenly throughout modern kitchens and minimalist bathrooms.',
    surfaceDetail: 'Ultra-clean velvety matte ceramic glaze.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 8%',
      slipResistance: 'Wall Only',
      suitability: ['Kitchen Walls', 'Bathroom Walls', 'Office Reception Backdrops'],
      coveragePerBox: '17.4 sq.ft / 6 pcs'
    }
  },
  // 27. Sand Dune Bullnose Step
  {
    id: 'sand-dune-step-tread',
    name: 'Sand Dune Anti-Slip Step & Riser',
    category: 'Floor Tiles',
    spaces: ['Staircases', 'Entrance and Foyer', 'Outdoor and Terrace'],
    finish: 'Textured',
    look: 'Neutral Tones',
    size: '300 x 1200 mm',
    thickness: '12 mm',
    color: 'Sand Beige',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Full-body porcelain stair tread in soothing sand beige with rounded safety bullnose and carved drainage grooves. Matches seamlessly with Botticino or Travertine main halls.',
    surfaceDetail: 'R11 anti-skid step grooves with factory rounded profile.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Bullnose Tread',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R11',
      suitability: ['Duplex Stairs', 'Bungalow Entry Steps', 'Terrace Stairwells'],
      coveragePerBox: 'Step + Riser Set'
    }
  },
  // 28. Onyx Emerald Polished
  {
    id: 'onyx-emerald-polished',
    name: 'Onyx Verde Nuvolato Slab',
    category: 'Vitrified Tiles',
    spaces: ['Living Room', 'Commercial Spaces', 'Entrance and Foyer'],
    finish: 'Glossy',
    look: 'Marble Look',
    size: '1200 x 1800 mm',
    thickness: '9 mm',
    color: 'Warm Greige & Olive Veins',
    image: '/images/tile-marble-statuary.jpg',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'Mesmerizing translucent onyx effect with smoky jade and sage ribbons woven into a crystalline background. A show-stopping centerpiece slab for luxury foyers and powder rooms.',
    surfaceDetail: 'High-translucency nano vitrified gloss polish.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.03%',
      slipResistance: 'R9',
      suitability: ['Feature Backlit Walls', 'Foyer Centerpieces', 'Luxury Living Rooms'],
      coveragePerBox: '23.25 sq.ft / 2 pcs'
    }
  },
  // 29. Scandinavian Birch Wood
  {
    id: 'scandinavian-birch-wood',
    name: 'Scandinavian Birch Plank',
    category: 'Floor Tiles',
    spaces: ['Bedroom', 'Living Room', 'Balcony', 'Office Spaces'],
    finish: 'Satin',
    look: 'Wood Look',
    size: '200 x 1200 mm',
    thickness: '10 mm',
    color: 'Pale Blonde Birch',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    roomImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    description: 'Airy, light-toned Nordic birch porcelain planks that brighten compact bedrooms and contemporary apartments with natural timber grain warmth.',
    surfaceDetail: 'Fine-sawn relief texture with satin touch.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Bedrooms', 'Kids Rooms', 'Private Studies', 'Balconies'],
      coveragePerBox: '15.5 sq.ft / 6 pcs'
    }
  },
  // 30. Smoked Walnut Chevron
  {
    id: 'smoked-walnut-chevron',
    name: 'Smoked Walnut Chevron Parquet',
    category: 'Floor Tiles',
    spaces: ['Living Room', 'Bedroom', 'Office Spaces', 'Staircases'],
    finish: 'Matte',
    look: 'Wood Look',
    size: '150 x 900 mm',
    thickness: '10.5 mm',
    color: 'Deep Roasted Walnut',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1000&q=80',
    roomImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    description: 'Rich dark espresso and walnut tones arranged in refined chevron geometry. Adds dramatic gentleman-study warmth to duplex master suites.',
    surfaceDetail: 'Deep matte wire-brushed finish.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Executive Offices', 'Master Bedrooms', 'Staircases'],
      coveragePerBox: '12.8 sq.ft / 8 pcs'
    }
  },
  // 31. Zen Sand Minimal
  {
    id: 'zen-sand-minimal',
    name: 'Zen Sand Micro-Matte',
    category: 'Floor Tiles',
    spaces: ['Living Room', 'Bedroom', 'Bathroom', 'Entrance and Foyer'],
    finish: 'Matte',
    look: 'Minimal Designs',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Warm Greige',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'An architectural neutral canvas with uniform micro-grain dispersion. Crafted for japandi and minimalist interiors requiring zero visual clutter.',
    surfaceDetail: 'Micro-matte silk touch.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Living Rooms', 'Gallery Spaces', 'Bedrooms'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 32. Florentine Terracotta Relief
  {
    id: 'florentine-relief-tile',
    name: 'Florentine Terracotta Medallion',
    category: 'Decorative Tiles',
    spaces: ['Balcony', 'Kitchen', 'Bathroom', 'Outdoor and Terrace', 'Entrance and Foyer'],
    finish: 'Textured',
    look: 'Decorative Tiles',
    size: '300 x 300 mm',
    thickness: '10 mm',
    color: 'Earthy Terracotta & Sand',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Bas-relief floral and geometric terracotta motifs inspired by heritage courtyards. Creates tactile architectural borders and kitchen cooker niches.',
    surfaceDetail: 'Raised sculptural relief with rustic matte finish.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Pressed Relieve',
      waterAbsorption: '< 3%',
      slipResistance: 'R10',
      suitability: ['Feature Borders', 'Courtyard Niches', 'Kitchen Splashbacks'],
      coveragePerBox: '9.7 sq.ft / 10 pcs'
    }
  },
  // 33. Taupe Mute Porcelain
  {
    id: 'taupe-mute-porcelain',
    name: 'Taupe Mute Architectural Slab',
    category: 'Vitrified Tiles',
    spaces: ['Living Room', 'Bedroom', 'Office Spaces', 'Entrance and Foyer'],
    finish: 'Matte',
    look: 'Neutral Tones',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Warm Taupe',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'Earthy taupe shade harmonizing grey and warm beige pigments. Flawlessly bridges modern concrete elements with natural wooden furniture.',
    surfaceDetail: 'Subtle honed skin with silky anti-reflection finish.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Drawing Rooms', 'Bedrooms', 'Lobby Areas'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 34. Artisan Glazed Subway Emerald
  {
    id: 'artisan-glazed-subway-emerald',
    name: 'Artisan Glazed Zellige Subway Emerald',
    category: 'Ceramic Tiles',
    spaces: ['Bathroom', 'Kitchen', 'Living Room'],
    finish: 'Glossy',
    look: 'Decorative Tiles',
    size: '75 x 300 mm',
    thickness: '8 mm',
    color: 'Deep Forest Emerald',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Handcrafted Moroccan-look glossy subway ceramic tile with subtle undulated surface and pooling translucent glaze. Perfect for splashbacks and feature niches.',
    surfaceDetail: 'Deep vitreous mirror glaze with artisanal organic edge contouring.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Cushioned Handcrafted Edge',
      waterAbsorption: '< 0.3%',
      slipResistance: 'Glossy Wall Grade',
      suitability: ['Kitchen Backsplashes', 'Shower Feature Niches', 'Powder Room Vanity Walls'],
      coveragePerBox: '10.8 sq.ft / 44 pcs'
    }
  },
  // 35. Spanish Cotto Relief Wall Tile
  {
    id: 'spanish-cotto-relief-wall',
    name: 'Terra Naturalis Fluted Ceramic',
    category: 'Ceramic Tiles',
    spaces: ['Living Room', 'Bathroom', 'Bedroom'],
    finish: 'Satin',
    look: 'Neutral Tones',
    size: '300 x 600 mm',
    thickness: '9 mm',
    color: 'Warm Terracotta Blush',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'A 3D sculpted ceramic wall tile inspired by Mediterranean rammed earth. Gentle architectural reeds introduce light-and-shadow play across accent walls.',
    surfaceDetail: 'Silky satin glaze over undulating linear reeded geometry.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.5%',
      slipResistance: 'Wall Only',
      suitability: ['Bedhead Feature Walls', 'Dining Room Partitions', 'Bathroom Vanities'],
      coveragePerBox: '15.5 sq.ft / 8 pcs'
    }
  },
  // 36. Moroccan Encaustic Blue Ceramic
  {
    id: 'moroccan-encaustic-blue-ceramic',
    name: 'Marrakech Encaustic Motif Ceramic',
    category: 'Ceramic Tiles',
    spaces: ['Kitchen', 'Bathroom', 'Balcony', 'Staircases'],
    finish: 'Matte',
    look: 'Decorative Tiles',
    size: '200 x 200 mm',
    thickness: '9 mm',
    color: 'Cobalt Blue & Chalk White',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Traditional geometric encaustic ceramic tiles featuring heritage symmetry. Ideal for stair risers, breakfast bars, and veranda floor borders.',
    surfaceDetail: 'Chalky ultra-matte touch with high-density ceramic body.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Square Cut',
      waterAbsorption: '< 0.5%',
      slipResistance: 'R10',
      suitability: ['Kitchen Flooring & Walls', 'Stair Risers', 'Balcony Borders'],
      coveragePerBox: '10.75 sq.ft / 25 pcs'
    }
  },
  // 37. Artisan Beveled Gloss Ceramic Subway
  {
    id: 'beveled-subway-ivory-gloss',
    name: 'Metro Beveled Vitreous Subway Ivory',
    category: 'Ceramic Tiles',
    spaces: ['Kitchen', 'Bathroom', 'Commercial Spaces'],
    finish: 'Glossy',
    look: 'Minimal Designs',
    size: '100 x 300 mm',
    thickness: '8 mm',
    color: 'Warm Ivory White',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Classic beveled-edge subway ceramic tile with high-lustre pearl glaze. Bounces natural light throughout culinary spaces and boutique cafes.',
    surfaceDetail: 'Diamond-angled bevel with ultra-reflective gloss glaze.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Beveled Edge',
      waterAbsorption: '< 0.3%',
      slipResistance: 'Wall Only',
      suitability: ['Commercial Cafes', 'Kitchen Walls', 'Compact Restrooms'],
      coveragePerBox: '12.9 sq.ft / 40 pcs'
    }
  },
  // 38. Glazed Mediterranean Turquoise Zellige
  {
    id: 'turquoise-zellige-ceramic',
    name: 'Casablanca Handcrafted Zellige Ceramic',
    category: 'Ceramic Tiles',
    spaces: ['Bathroom', 'Kitchen', 'Entrance and Foyer'],
    finish: 'Glossy',
    look: 'Decorative Tiles',
    size: '100 x 100 mm',
    thickness: '9 mm',
    color: 'Seafoam Turquoise',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Charming handcrafted-look ceramic square tile with subtle color variegation. Brings organic warmth and artisanal luxury to bathroom feature walls.',
    surfaceDetail: 'Gloss crackle-effect aesthetic with sealed stain-proof protective glaze.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Hand-Cut Look',
      waterAbsorption: '< 0.3%',
      slipResistance: 'Wall Only',
      suitability: ['Shower Feature Walls', 'Bar Counters', 'Foyer Niches'],
      coveragePerBox: '10.76 sq.ft / 100 pcs'
    }
  },
  // 39. Concrete Look: Anthracite Industrial Slab
  {
    id: 'anthracite-industrial-concrete',
    name: 'Anthracite Cast Loft Concrete Slab',
    category: 'Porcelain Tiles',
    spaces: ['Living Room', 'Commercial Spaces', 'Office Spaces'],
    finish: 'Matte',
    look: 'Concrete Look',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Charcoal Industrial Grey',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'A dark, moody architectural concrete porcelain slab inspired by cast formwork and raw urban textures. Provides striking contrast with light upholstery.',
    surfaceDetail: 'Fine screed texture with subtle formwork wire imprint.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Corporate Boardrooms', 'Industrial Lofts', 'Modern Living Rooms'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 40. Concrete Look: Raw Greige Cast Porcelain
  {
    id: 'raw-greige-cast-concrete',
    name: 'Cast Greige Micro-Cement Porcelain',
    category: 'Floor Tiles',
    spaces: ['Living Room', 'Kitchen', 'Bedroom', 'Office Spaces'],
    finish: 'Honed',
    look: 'Concrete Look',
    size: '600 x 1200 mm',
    thickness: '9 mm',
    color: 'Warm Greige Stone-Cement',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'Softened cementitious finish combining warm beige and cement tones. Offers a velvety tactile surface that creates tranquil minimalism.',
    surfaceDetail: 'Ultra-smooth honed touch with zero gloss glare.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Open Concept Living', 'Master Bedrooms', 'Quiet Office Studios'],
      coveragePerBox: '15.5 sq.ft / 2 pcs'
    }
  },
  // 41. Concrete Look: Urban Ash Screed Porcelain
  {
    id: 'urban-ash-screed-porcelain',
    name: 'Urban Ash Architectural Screed',
    category: 'Floor Tiles',
    spaces: ['Commercial Spaces', 'Office Spaces', 'Balcony'],
    finish: 'Matte',
    look: 'Concrete Look',
    size: '600 x 600 mm',
    thickness: '9.5 mm',
    color: 'Ash Grey',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-outdoor.jpg',
    description: 'High-traffic technical porcelain replicating troweled concrete screed. Highly durable for retail corridors, commercial offices, and modern balconies.',
    surfaceDetail: 'Fine-grained slip-resistant matte texture.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Retail Boutiques', 'Covered Balconies', 'Office Corridors'],
      coveragePerBox: '15.5 sq.ft / 4 pcs'
    }
  },
  // 42. Concrete Look: Cotto Cemento Warm Earth
  {
    id: 'cotto-cemento-warm-earth',
    name: 'Cotto Cemento Warm Earth Paver',
    category: 'Outdoor Tiles',
    spaces: ['Balcony', 'Outdoor and Terrace', 'Parking and Utility Areas'],
    finish: 'Anti-skid',
    look: 'Concrete Look',
    size: '600 x 600 mm',
    thickness: '12 mm',
    color: 'Warm Ochre & Terracotta Ash',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Heavy-gauge 12mm exterior porcelain blending fired cotto clay tones with industrial cement strength. Non-porous and frost/heat proof.',
    surfaceDetail: 'R11 high-grip traction profile for outdoor wet safety.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Beveled Paver Edge',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R11 Anti-Skid',
      suitability: ['Garden Pathways', 'Terrace Decks', 'Car Porches'],
      coveragePerBox: '11.6 sq.ft / 3 pcs'
    }
  },
  // 43. Terrazzo Effect: Venice Multicolour Aggregate
  {
    id: 'venice-multicolour-terrazzo',
    name: 'Venezia Multicolour Marble Aggregate',
    category: 'Porcelain Tiles',
    spaces: ['Living Room', 'Bathroom', 'Kitchen', 'Commercial Spaces'],
    finish: 'Honed',
    look: 'Terrazzo Effect',
    size: '600 x 1200 mm',
    thickness: '9 mm',
    color: 'Ivory Base with Ochre & Sage Chips',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Authentic Italian-style aggregate tile featuring suspended fragments of Carrara marble, jasper, and basalt in an ivory porcelain base.',
    surfaceDetail: 'Satin-honed tactile finish with sealed non-porous body.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Cafe Interiors', 'Bathroom Floors & Walls', 'Living Hall Accents'],
      coveragePerBox: '15.5 sq.ft / 2 pcs'
    }
  },
  // 44. Terrazzo Effect: Nero Carbon Terrazzo
  {
    id: 'nero-carbon-terrazzo-slab',
    name: 'Nero Carbon Fine-Flake Terrazzo',
    category: 'Vitrified Tiles',
    spaces: ['Commercial Spaces', 'Entrance and Foyer', 'Office Spaces'],
    finish: 'Polished',
    look: 'Terrazzo Effect',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Charcoal Black with White Quartz Flecks',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'Dramatic black composite stone look with sparkling white quartz crystals. High-gloss polish reflects ambient lighting with contemporary grandeur.',
    surfaceDetail: 'Mirror gloss polish with diamond-cut rectified edges.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Executive Boardrooms', 'Hotel Foyers', 'Powder Room Vanities'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 45. Terrazzo Effect: Micro-Flake Calacatta Terrazzo
  {
    id: 'micro-flake-calacatta-terrazzo',
    name: 'Calacatta Micro-Flake Terrazzo Matte',
    category: 'Floor Tiles',
    spaces: ['Bathroom', 'Kitchen', 'Bedroom'],
    finish: 'Matte',
    look: 'Terrazzo Effect',
    size: '600 x 600 mm',
    thickness: '9 mm',
    color: 'Warm Sand with Gold & Grey Mica',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Subtle micro-aggregate patterning designed for minimal visual noise. Ideal for serene bathrooms and Scandinavian-inspired kitchens.',
    surfaceDetail: 'Soft-touch matte skin resistant to water stains.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.08%',
      slipResistance: 'R10',
      suitability: ['En-Suite Bathrooms', 'Pantry Floors', 'Guest Bedrooms'],
      coveragePerBox: '15.5 sq.ft / 4 pcs'
    }
  },
  // 46. Terrazzo Effect: Verde Alpi Emerald Aggregate
  {
    id: 'verde-alpi-emerald-terrazzo',
    name: 'Verde Alpi Mineral Terrazzo Slab',
    category: 'Decorative Tiles',
    spaces: ['Bathroom', 'Living Room', 'Entrance and Foyer'],
    finish: 'Satin',
    look: 'Terrazzo Effect',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Forest Emerald with White Marble Inlays',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Deep jewel-toned green terrazzo with authentic mineral chip scattering. A striking bespoke surface for luxury master baths and dining backdrops.',
    surfaceDetail: 'Honed satin sheen with tactile stone depth.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Feature Accent Walls', 'Luxury Bathrooms', 'Dining Credenza Backdrops'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 47. Minimal Designs: Monolith Chalk Silk Matte
  {
    id: 'monolith-chalk-silk-matte',
    name: 'Monolith Chalk Pure White Silk Matte',
    category: 'Vitrified Tiles',
    spaces: ['Living Room', 'Bedroom', 'Office Spaces'],
    finish: 'Matte',
    look: 'Minimal Designs',
    size: '1200 x 1800 mm',
    thickness: '9 mm',
    color: 'Chalk White',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'An architectural monolithic slab free of heavy veining or noise. Creates a calm, expansive gallery floor for modern Indian minimalist architecture.',
    surfaceDetail: 'Micro-powder matte touch with diffuse ambient light reflection.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Gallery Living Rooms', 'Art Studios', 'Master Suites'],
      coveragePerBox: '23.25 sq.ft / 2 pcs'
    }
  },
  // 48. Minimal Designs: Slate Basaltina Honed
  {
    id: 'slate-basaltina-honed-minimal',
    name: 'Basaltina Volcanic Ash Honed Porcelain',
    category: 'Floor Tiles',
    spaces: ['Living Room', 'Kitchen', 'Commercial Spaces', 'Staircases'],
    finish: 'Honed',
    look: 'Minimal Designs',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Deep Slate Basalt',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-kitchen.jpg',
    description: 'Sleek volcanic basaltina stone look with uniform micro-pores. Understated, dark, and exceptionally resilient for high-traffic modern rooms.',
    surfaceDetail: 'Silky honed texture with anti-fingerprint coating.',
    isFeatured: false,
    isNewArrival: false,
    specifications: {
      edge: 'Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Staircase Landings', 'Modern Kitchens', 'Executive Offices'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 49. Neutral Tones: Raw Sandstone Travertine Honed
  {
    id: 'raw-sandstone-travertine-honed',
    name: 'Tuscan Linen Honed Travertine',
    category: 'Floor Tiles',
    spaces: ['Living Room', 'Bedroom', 'Entrance and Foyer'],
    finish: 'Honed',
    look: 'Neutral Tones',
    size: '800 x 1600 mm',
    thickness: '9 mm',
    color: 'Warm Wheat & Natural Linen',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Soft sedimentary travertine banding in calming wheat tones. Bridges warm oak wood furniture and whitewashed walls effortlessly.',
    surfaceDetail: 'Natural honed skin with R10 footfall security.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Drawing Rooms', 'Family Lounges', 'Private Suites'],
      coveragePerBox: '27.5 sq.ft / 2 pcs'
    }
  },
  // 50. Anti-Skid / Exterior Paver: Kota Green Flamed Paver
  {
    id: 'kota-green-flamed-paver',
    name: 'Kota Heritage Flamed Grip Exterior Slab',
    category: 'Outdoor Tiles',
    spaces: ['Outdoor and Terrace', 'Parking and Utility Areas', 'Balcony', 'Staircases'],
    finish: 'Anti-skid',
    look: 'Stone Look',
    size: '600 x 600 mm',
    thickness: '15 mm',
    color: 'Heritage Kota Sage Green',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-outdoor.jpg',
    description: '15mm extra-thick vitrified paver replicating flamed Kota limestone. Impervious to vehicle pressure, moss growth, and monsoon slippery conditions.',
    surfaceDetail: 'Heavy flame-textured R11 anti-skid surface for driveway and step safety.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Chamfered Paver Edge',
      waterAbsorption: '< 0.02%',
      slipResistance: 'R11 Heavy Anti-Skid',
      suitability: ['Car Driveways', 'Exterior Courtyards', 'Step Risers', 'Terraces'],
      coveragePerBox: '11.6 sq.ft / 3 pcs'
    }
  },
  // 51. Bleached Nordic Birch Wood Planks
  {
    id: 'bleached-nordic-birch-wood',
    name: 'Nordic Birch Pale Timber Porcelain Plank',
    category: 'Wall Tiles',
    spaces: ['Living Room', 'Bedroom', 'Bathroom', 'Commercial Spaces'],
    finish: 'Satin',
    look: 'Wood Look',
    size: '200 x 1200 mm',
    thickness: '9 mm',
    color: 'Pale Blonde Birch',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'Light Scandinavian timber plank tile with natural grain striations and gentle knots. Perfect for bedroom flooring or vertical accent walls in dining alcoves.',
    surfaceDetail: 'Tactile synchronized wood grain touch with satin finish.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Rectified Plank Edge',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R10',
      suitability: ['Feature Timber Walls', 'Bedroom Floors', 'Boutique Studios'],
      coveragePerBox: '15.5 sq.ft / 6 pcs'
    }
  },
  // 52. Arabescato Orobico Luxury Slab
  {
    id: 'arabescato-orobico-luxury-slab',
    name: 'Arabescato Orobico Bookmatched Marble Slab',
    category: 'Decorative Tiles',
    spaces: ['Living Room', 'Entrance and Foyer', 'Bathroom'],
    finish: 'Polished',
    look: 'Marble Look',
    size: '1200 x 1800 mm',
    thickness: '9 mm',
    color: 'Charcoal Grey with Cream Swirls',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/hero-luxury-living.jpg',
    description: 'Dramatic Italian Arabescato marble look featuring bold sweeping dove-grey and amber crystalline veins. Engineered for centerpiece drawing room walls.',
    surfaceDetail: 'High-definition mirror polished glaze with continuous veining.',
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      edge: 'Laser Rectified',
      waterAbsorption: '< 0.05%',
      slipResistance: 'R9',
      suitability: ['Living Hall Feature Walls', 'Entrance Porticos', 'Master Bath Paneling'],
      coveragePerBox: '23.25 sq.ft / 2 pcs'
    }
  },
  // 53. Sculptural Ceramic Wall Flute Ivory
  {
    id: 'sculptural-ceramic-wall-flute',
    name: 'Sculptural Reeds Off-White Wall Ceramic',
    category: 'Wall Tiles',
    spaces: ['Bathroom', 'Living Room', 'Bedroom', 'Office Spaces'],
    finish: 'Matte',
    look: 'Minimal Designs',
    size: '300 x 900 mm',
    thickness: '10 mm',
    color: 'Chalk Off-White',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-bathroom.jpg',
    description: 'Generous 300x900mm ceramic wall tile featuring architectural fluting. Creates horizontal or vertical shadow rhythm on vanity and credenza backdrops.',
    surfaceDetail: 'Ultra-matte velvety glaze over sculpted relief.',
    isFeatured: false,
    isNewArrival: true,
    specifications: {
      edge: 'Precision Rectified',
      waterAbsorption: '< 0.3%',
      slipResistance: 'Wall Only',
      suitability: ['Powder Room Vanities', 'Dining Credenzas', 'Reception Desks'],
      coveragePerBox: '14.5 sq.ft / 5 pcs'
    }
  },
  // 54. Encaustic Heritage Geometric Accent
  {
    id: 'encaustic-heritage-geometric',
    name: 'Heritage Encaustic Star Motif Accent',
    category: 'Decorative Tiles',
    spaces: ['Kitchen', 'Balcony', 'Staircases', 'Entrance and Foyer'],
    finish: 'Textured',
    look: 'Decorative Tiles',
    size: '200 x 200 mm',
    thickness: '9 mm',
    color: 'Charcoal, Ochre & Biscuit',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    roomImage: '/images/space-outdoor.jpg',
    description: 'Historic star-motif decorative tile inspired by traditional haveli courtyards. Adds artisanal character to stair risers, pantry niches, and terrace borders.',
    surfaceDetail: 'Textured slip-resistant hydraulic cement tile aesthetic.',
    isFeatured: true,
    isNewArrival: false,
    specifications: {
      edge: 'Square Cut',
      waterAbsorption: '< 0.4%',
      slipResistance: 'R10',
      suitability: ['Staircase Risers', 'Balcony Floor Borders', 'Kitchen Backsplashes'],
      coveragePerBox: '10.75 sq.ft / 25 pcs'
    }
  }
];

export const tileCategories: TileCategory[] = [
  'Floor Tiles',
  'Wall Tiles',
  'Vitrified Tiles',
  'Ceramic Tiles',
  'Porcelain Tiles',
  'Decorative Tiles',
  'Outdoor Tiles'
];

export const tileSpaces: TileSpace[] = [
  'Living Room',
  'Bedroom',
  'Bathroom',
  'Kitchen',
  'Balcony',
  'Outdoor and Terrace',
  'Commercial Spaces',
  'Office Spaces',
  'Staircases',
  'Entrance and Foyer',
  'Parking and Utility Areas'
];

export const tileFinishes: TileFinish[] = [
  'Glossy',
  'Matte',
  'Satin',
  'Textured',
  'Honed',
  'Polished',
  'Anti-skid'
];

export const tileLooks: TileLook[] = [
  'Wood Look',
  'Stone Look',
  'Marble Look',
  'Concrete Look',
  'Terrazzo Effect',
  'Minimal Designs',
  'Neutral Tones',
  'Decorative Tiles'
];
