export interface NavbarItem {
  id: number;
  title: string;
  url: string;
}

export interface Video {
  id: number;
  title: string;
  created_by: string;
  hits: number;
  isFeatured: boolean;
}

export interface People {
  id: number;
  title: string;
  created_by: string;
  hits: number;
  isFeatured: boolean;
}

export interface Document {
  id: number;
  title: string;
  created_by: string;
  hits: number;
  isFeatured: boolean;
}

export interface User {
  id: number;
  name: string;
}

export interface Activity{
  id: number;
  user: User;
  category: string;
  status: string;
  created_at: string;
}
