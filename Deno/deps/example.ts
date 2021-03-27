/**
 * example.ts
 */

import { add, multiply } from './deps.ts';

//para controlar todas las deps del scripts (en el caso que tenga muchas)

function totalCost(outbound: number, inbound: number, tax: number): number {
	return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));

/**
 * Output
 *
 * 60
 * 82.8
 */
