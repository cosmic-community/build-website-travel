export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export type Region = 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania';

export interface About extends CosmicObject {
  type: 'about';
  metadata: {
    headline?: string;
    intro?: string;
    bio?: string;
    portrait?: CosmicFile;
    location?: string;
    contact_email?: string;
  };
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    summary?: string;
    details?: string;
    planning_fee?: string;
    image?: CosmicFile;
  };
}

export interface Guide extends CosmicObject {
  type: 'guides';
  metadata: {
    destination?: string;
    region?: Region;
    summary?: string;
    content?: string;
    best_time_to_visit?: string;
    featured_image?: CosmicFile;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}