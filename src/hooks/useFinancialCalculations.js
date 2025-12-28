import { useMemo } from 'react';
import { NUM_TREES, BASE_PRICE, COST_PER_TREE, INOCULATION, IFC_ADVISORY, FIXED_EXPENSES } from '../constants/financial';

export function useFinancialCalculations(yield_, priceChange, taxRate, discountRate) {
  return useMemo(() => {
    const adjPrice = BASE_PRICE * (1 + priceChange / 100);
    const revenue = NUM_TREES * (yield_ / 100) * adjPrice;
    const directCost = NUM_TREES * (COST_PER_TREE + INOCULATION);
    const fixedExp = FIXED_EXPENSES;
    const pbt = revenue - directCost - fixedExp;
    const tax = pbt > 0 ? pbt * (taxRate / 100) : 0;
    const pat = pbt - tax;

    const inflow = IFC_ADVISORY + revenue;
    const outflow = directCost + fixedExp + tax;
    const balance = inflow - outflow;
    const ifcReturn = Math.min(Math.max(balance, 0), IFC_ADVISORY);
    const profitDist = Math.max(0, balance - ifcReturn);
    const ifcShare = (profitDist * 90) / 100;
    const dpShare = (profitDist * 10) / 100;
    const ifcY3 = ifcReturn + ifcShare;
    const irr = ifcY3 > 0 ? (Math.pow(ifcY3 / IFC_ADVISORY, 1/3) - 1) * 100 : 0;
    const dr = discountRate / 100;
    const npv = -IFC_ADVISORY + (ifcY3 / Math.pow(1 + dr, 3));

    return {
      adjPrice,
      revenue,
      directCost,
      fixedExp,
      pbt,
      tax,
      pat,
      inflow,
      outflow,
      balance,
      ifcReturn,
      profitDist,
      ifcShare,
      dpShare,
      ifcY3,
      irr,
      npv
    };
  }, [yield_, priceChange, taxRate, discountRate]);
}

