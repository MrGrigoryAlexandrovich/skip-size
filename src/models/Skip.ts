export type TSkipState = {
  readonly skips: TSkip[];
  readonly selectedSkip: TSkip | null;
  readonly error: unknown;
  readonly isLoading: boolean;
};

export type TSkip = {
  readonly id: number;
  readonly size: number;
  readonly hire_period_days: number;
  readonly transport_cost: number | null;
  readonly per_tonne_cost: number | null;
  readonly price_before_vat: number;
  readonly vat: number;
  readonly allowed_on_road: boolean;
  readonly allows_heavy_waste: boolean;
};

export type TSkipComponent = {
  readonly skip: TSkip;
  readonly selectedSkip: TSkip | null;
  readonly onSelect: (skip: TSkip) => void;
};
