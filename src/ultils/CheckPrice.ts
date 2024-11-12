import ChangeCurrentcy from './ChangeCurrentcy';

export function checkDiscountVoucher(price: number, discount: number) {
  const prices = price;
  const discounts = discount;

  if (discount) {
    return ChangeCurrentcy((prices * Number(discounts)) / 100);
  } else {
    return ChangeCurrentcy(0);
  }
}

export function checkTotalPrice(price: number, discount: number) {
  const prices = price;
  const discounts = discount;

  if (discount) {
    return ChangeCurrentcy(prices - (prices * discounts) / 100);
  } else {
    return ChangeCurrentcy(prices);
  }
}
