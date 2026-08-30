export interface ConfiguratorOption {
  id: string;
  label: string;
  nextStepId?: string;
}

export interface ConfiguratorStep {
  id: string;
  options: readonly ConfiguratorOption[];
  prompt: string;
}

export type PriceInCents = number;

export interface PricingData {
  configuratorDetails: Readonly<Record<string, PriceInCents>>;
  jewelryBase: Readonly<Record<string, PriceInCents>>;
  products: Readonly<Record<string, PriceInCents>>;
}
