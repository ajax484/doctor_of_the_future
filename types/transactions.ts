export interface Transaction {
  id: string;
  user_id: string;
  amount: number;
  reference: string;
  created_at: Date;
  email: string;
  status: string;
}

export interface subscriptionTransaction extends Transaction {
  subscription_id: string;
  expire_at: Date;
  is_current: boolean;
}

export interface shopTransaction extends Transaction {
  books: string[];
}

export interface bookingTransaction extends Transaction {
  booking_id: string;
  payment_type: string;
  payment_method: string;
  message: string;
  name: string;
  phone_number: string;
  time_of_session: Date;
}

export interface planTransaction extends Transaction {
  expire_at: Date;
  plan_id: string;
}
