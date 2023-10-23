export interface GameCategory {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: Game[];
  }
  
  export interface Game {
    id: number;
    slug: string;
    name: string;
    added: number;
  }

  export interface GameDetails {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: {
      yet: number;
      owned: number;
      beaten: number;
      toplay: number;
      dropped: number;
      playing: number;
    };
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: null;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: Platform[];
    parent_platforms: ParentPlatform[];
    genres: Genre[];
    stores: Store[];
    clip: null;
    tags: Tag[];
    esrb_rating: {
      id: number;
      name: string;
      slug: string;
    };
    short_screenshots: ShortScreenshot[];
  }
  
  interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
  }
  
  interface Platform {
    platform: {
      id: number;
      name: string;
      slug: string;
      image: string | null;
      year_end: null | number;
      year_start: null | number;
      games_count: number;
      image_background: string;
    };
    released_at: string;
    requirements_en: null | string;
    requirements_ru: null | string;
  }
  
  interface ParentPlatform {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }
  
  interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  interface Store {
    id: number;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
      games_count: number;
      image_background: string;
    };
  }
  
  interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }
  
  interface ShortScreenshot {
    id: number;
    image: string;
  }