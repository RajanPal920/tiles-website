import { ResourceItem } from '../types';

export const resources: ResourceItem[] = [
  {
    id: 'tile-buying-guide-homeowners',
    slug: 'tile-buying-guide-homeowners',
    title: 'A Practical Homeowner Guide to Tile Selection',
    category: 'Tile Buying Guides',
    summary: 'Essential factors to weigh before choosing tiles in Aurangabad: room function, natural daylight, traffic patterns, and long-term maintenance.',
    readTime: '6 min read',
    image: '/images/hero-luxury-living.jpg',
    content: [
      'Choosing tiles for a home is an investment in surfaces you will live with for decades. Rather than beginning solely with color, start with room functionality.',
      'High-traffic family areas like living rooms and corridors benefit from fully vitrified tiles with low porosity (<0.05%) and R9 or R10 slip ratings.',
      'Consider the lighting conditions in your home. A glossy finish amplifies sunlight in north-facing or compact rooms, while matte surfaces diffuse strong western sunlight without creating glare.',
      'Always calculate room square footage accurately and add an 8% to 10% allowance for diagonal cuts, corner wastage, and reserve tiles for any future alterations.'
    ],
    keyTakeaways: [
      'Evaluate room traffic and natural light before choosing a finish.',
      'Ensure vitrified tiles are used in areas requiring high compressive strength.',
      'Always order 8-10% extra tiles for cuts, borders, and reserve stock.',
      'Visit our Aurangabad showroom to inspect physical samples under daylight.'
    ],
    relatedCategories: ['Floor Tiles', 'Vitrified Tiles']
  },
  {
    id: 'bathroom-tile-waterproofing-slip-resistance',
    slug: 'bathroom-tile-waterproofing-slip-resistance',
    title: 'Bathroom Tile Selection: Safety, Moisture & Grout',
    category: 'Tile Buying Guides',
    summary: 'How to strike the right balance between clean luxury design and safety underfoot in wet bathroom areas.',
    readTime: '5 min read',
    image: '/images/space-bathroom.jpg',
    content: [
      'Bathrooms require two distinct tile strategies: non-slip flooring that handles soap and water safely, and impervious wall claddings that protect underlying brickwork from moisture.',
      'For floors, matte or lightly textured R10-rated porcelain pavers provide superior traction compared to polished vitrified tiles.',
      'For shower cubicle walls and vanity splashbacks, large-format glazed ceramics or vertical fluted tiles minimize grout lines and resist soap scum.',
      'Use high-grade epoxy grout rather than standard cementitious grout in wet shower enclosures to prevent water seepage and bacterial discoloration.'
    ],
    keyTakeaways: [
      'Never install high-gloss tiles on bathroom shower floors.',
      'Choose R10 or textured porcelain for peace of mind underfoot.',
      'Fluted and 3D ceramic tiles make stunning vanity feature walls.',
      'Epoxy grout offers 100% water repellency in wet zones.'
    ],
    relatedCategories: ['Wall Tiles', 'Ceramic Tiles']
  },
  {
    id: 'tile-care-cleaning-maintenance',
    slug: 'tile-care-cleaning-maintenance',
    title: 'Daily Care & Stain Maintenance for Porcelain & Ceramic Tiles',
    category: 'Tile Care and Maintenance',
    summary: 'Best practices for cleaning vitrified porcelain, preserving gloss reflectivity, and keeping grout lines pristine.',
    readTime: '4 min read',
    image: '/images/space-kitchen.jpg',
    content: [
      'Modern vitrified tiles are virtually non-porous, making them one of the easiest surface materials to maintain in residential homes.',
      'For routine cleaning, warm water and a pH-neutral floor cleaner are all you need. Avoid using harsh muriatic acids or abrasive scouring pads, which can pit the microscopic glaze over time.',
      'To prevent micro-scratches from dust and sand carried indoors, place natural fiber doormats at entrance foyers and balcony doors.',
      'If tea, turmeric, or oil spills happen, wipe them promptly with a damp microfiber cloth.'
    ],
    keyTakeaways: [
      'Use pH-neutral cleaners instead of harsh acidic floor washes.',
      'Microfiber mops retain dust without dragging abrasive particles.',
      'Entrance doormats dramatically reduce abrasive sand wear.',
      'Stains wiped within 15 minutes rarely leave any mark on vitrified surfaces.'
    ],
    relatedCategories: ['Porcelain Tiles', 'Floor Tiles']
  },
  {
    id: 'faq-tile-selection-aurangabad',
    slug: 'faq-tile-selection-aurangabad',
    title: 'Frequently Asked Questions About Tile Sizing & Laying',
    category: 'Frequently Asked Questions',
    summary: 'Clear answers on rectified edges, grout spacer widths, slab leveling, and outdoor tile specifications.',
    readTime: '5 min read',
    image: '/images/space-outdoor.jpg',
    content: [
      'What is a rectified tile? Rectified tiles have machine-cut, 90-degree squared edges. This allows tile masons to lay them with hairline joints (1.5mm to 2mm) rather than wide 4mm grout lines.',
      'Can indoor tiles be used on open terraces in Aurangabad? Outdoor areas in Maharashtra face intense summer heat and sudden monsoon deluges. We strongly recommend thick (10mm to 12mm) exterior-grade porcelain with anti-skid textures to prevent slips and cracking from thermal expansion.',
      'What tile adhesive should be used for large format tiles? For slabs measuring 800x1600mm or 1200x1800mm, conventional cement mortar is inadequate. Polymer-modified C2TE tile adhesives must be applied using the double-buttering technique.'
    ],
    keyTakeaways: [
      'Rectified edges allow razor-thin 2mm grout joints.',
      'Outdoor terraces require specialized thermal-stable exterior tiles.',
      'Large format tiles require polymer adhesives and leveling spacers.',
      'Consult our showroom team before final mason procurement.'
    ],
    relatedCategories: ['Outdoor Tiles', 'Vitrified Tiles']
  }
];

export const resourceCategories = [
  'All Resources',
  'Tile Buying Guides',
  'Design Inspiration',
  'Tile Care and Maintenance',
  'Frequently Asked Questions',
  'Project Planning'
] as const;
