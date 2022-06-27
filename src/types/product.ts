export interface ResponseTypes {
  status: number;
  message: string;
  error: any;
  data: CompanyTypes[];
}

export interface CompanyTypes {
  id: number;
  name: string;
  images: string;
  Products: ProductTypes[];
}

export interface ProductTypes {
  id: number;
  name: string;
  images: string;
  status: boolean;
  percentage: number;
}
