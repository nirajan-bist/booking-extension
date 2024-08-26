export type StatusData = {
  email: string;
  code: string;
  status: string;
  coupon: string;
};

export type BuyData = {
  email: string;
  "1h_buy_count": number;
  "1h_buy_sum": number;
  "6h_buy_count": number;
  "6h_buy_sum": number;
  "1d_buy_count": number;
  "1d_buy_sum": number;
  "7d_buy_count": number;
  "7d_buy_sum": number;
  total_buy_count: number;
  total_buy_sum: number;
};

export type SaleData = {
  email: string;
  "1h_sale_count": number;
  "1h_sale_sum": number;
  "6h_sale_count": number;
  "6h_sale_sum": number;
  "1d_sale_count": number;
  "1d_sale_sum": number;
  "7d_sale_count": number;
  "7d_sale_sum": number;
  total_sale_count: number;
  total_sale_sum: number;
};

export type BonusData = {
  email: string;
  "1h_bonus_count": number;
  "1h_bonus_sum": number;
  "6h_bonus_count": number;
  "6h_bonus_sum": number;
  "1d_bonus_count": number;
  "1d_bonus_sum": number;
  "7d_bonus_count": number;
  "7d_bonus_sum": number;
  total_bonus_count: number;
  total_bonus_sum: number;
};
