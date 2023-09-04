export interface planCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  benefits: string[];
}

export interface ProgramCardProps {
  image: string;
  name: string;
  id: number;
  price: number;
  duration: string;
  description: string;
}

export interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  id: number;
  description: string;
}
