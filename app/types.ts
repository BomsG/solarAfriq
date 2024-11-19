export interface Installer {
    id: number;
    name: string;
    location: string;
    rating: number;
    specialties: string[];
  }
  
  export interface CustomerForm {
    name: string;
    email: string;
    location: string;
    projectDetails: string;
  }