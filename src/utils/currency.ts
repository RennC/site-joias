const brazilianRealFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
});

export function formatPrice(priceInCents: number): string {
  return brazilianRealFormatter.format(priceInCents / 100);
}
