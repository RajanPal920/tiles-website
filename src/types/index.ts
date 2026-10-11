export type TileCategory = 
  | 'Floor Tiles' 
  | 'Wall Tiles' 
  | 'Vitrified Tiles' 
  | 'Ceramic Tiles' 
  | 'Porcelain Tiles' 
  | 'Decorative Tiles' 
  | 'Outdoor Tiles';

export type TileSpace = 
  | 'Living Room' 
  | 'Bedroom' 
  | 'Bathroom' 
  | 'Kitchen' 
  | 'Balcony' 
  | 'Outdoor and Terrace' 
  | 'Commercial Spaces' 
  | 'Office Spaces' 
  | 'Staircases' 
  | 'Entrance and Foyer' 
  | 'Parking and Utility Areas';

export type TileFinish = 
  | 'Glossy' 
  | 'Matte' 
  | 'Satin' 
  | 'Textured'
  | 'Honed'
  | 'Polished'
  | 'Anti-skid';

export type TileLook = 
  | 'Marble Look' 
  | 'Stone Look' 
  | 'Wood Look' 
  | 'Concrete Look' 
  | 'Terrazzo Effect' 
  | 'Minimal Designs' 
  | 'Neutral Tones' 
  | 'Decorative Tiles';

export interface Product {
  id: string;
  name: string;
  category: TileCategory;
  spaces: TileSpace[];
  finish: TileFinish;
  look: TileLook;
  size: string;
  thickness: string;
  color: string;
  image: string;
  roomImage: string;
  description: string;
  surfaceDetail: string;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  specifications: {
    edge: string;
    waterAbsorption: string;
    slipResistance: string;
    suitability: string[];
    coveragePerBox?: string;
  };
}

export interface Catalogue {
  id: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  pages: number;
  format: string;
  downloadUrl?: string;
  features: string[];
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Tile Buying Guides' | 'Design Inspiration' | 'Tile Care and Maintenance' | 'Frequently Asked Questions' | 'Project Planning';
  summary: string;
  readTime: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
  relatedCategories?: TileCategory[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  tips: string[];
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  category: string;
  productName?: string;
  projectType: string;
  message: string;
}
