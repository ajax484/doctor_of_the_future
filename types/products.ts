export interface CommonProps {
  image: string;
  name: string;
  price: number;
  description: string;
  id: string;
}

export interface PlanProps extends CommonProps {
  benefits: string[];
}

export interface ProgramProps extends CommonProps {
  duration: string;
}

export interface ProductProps extends CommonProps {}

export interface BookingProps extends CommonProps {}
