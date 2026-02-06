
export enum FiscalModel {
  PF = 'Pessoa Física',
  PJ = 'Pessoa Jurídica'
}

export interface FormData {
  // Step 1
  entityName: string;
  fiscalResidency: string;
  fiscalModel: FiscalModel;
  fiscalDocument: string;
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;

  // Step 2
  promotionTypes: string[];
  primaryRegion: string;

  // Step 3
  spaceUrl: string;
  modelDescription: string;
  industries: string[];
  promotionStrategy: string;

  // Step 4
  country: string;
  street: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  termsAccepted: boolean;
}

export type FormStep = 1 | 2 | 3 | 4 | 5; // 5 is success state
