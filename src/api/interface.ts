export interface Album {
  id: number;
  userId: number;
  title: string;
}

//  user data returned by API
export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
//  simplified user data
export interface SimplifiedUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Photo data returned by the API
export interface PhotoResponse {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// required Photo data
export interface SimplifiedPhoto {
  albumId: number;
  title: string;
  url: string;
}
