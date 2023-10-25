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

// Interface for /details/:id
export interface ClickedGameDetails {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: {
    metascore: number;
    url: string;
    platform: {
      platform: number;
      name: string;
      slug: string;
    };
  }[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];
  reactions: {
    [key: string]: number;
  };
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: any; // Tutaj możesz określić dokładny typ, jeśli jest dostępny
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    }[];
  };
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
      image: string | null;
      year_end: number | null;
      year_start: number | null;
      games_count: number;
      image_background: string | null;
    };
    released_at: string;
    requirements: {
      minimum: string | null;
      recommended: string | null;
    };
  }[];
  stores: {
    id: number;
    url: string;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
      games_count: number;
      image_background: string;
    };
  }[];
  developers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  genres: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }[];
  publishers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  clip: any; // Tutaj możesz określić dokładny typ, jeśli jest dostępny
  description_raw: string;
}

export interface GameStore {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

//   Search Options Types

export interface OptionGame {
  slug: string;
  name: string;
  playtime: number;
  platforms: OptionPlatform[];
  stores: null | any;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: any[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
  };
  metacritic: null | any;
  suggestions_count: number;
  updated: string;
  id: number;
  score: string;
  clip: null | any;
  tags: OptionTag[];
  esrb_rating: null | any;
  user_game: null | any;
  reviews_count: number;
  community_rating: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: OptionShortScreenshot[];
  parent_platforms: OptionParentPlatform[];
  genres: OptionGenre[];
}

interface OptionPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface OptionTag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

interface OptionShortScreenshot {
  id: number;
  image: string;
}

interface OptionParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface OptionGenre {
  id: number;
  name: string;
  slug: string;
}
