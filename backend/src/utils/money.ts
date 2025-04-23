
import * as currency from 'currency.js';

export const calcCost = (price: number, qty: number): number =>
  currency(price).multiply(qty).value;

export const addMoney = (a: number, b: number): number =>
  currency(a).add(b).value;

export const subtractMoney = (a: number, b: number): number =>
  currency(a).subtract(b).value;
