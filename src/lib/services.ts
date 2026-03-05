export const WHATSAPP_NUMBER = "44XXXXXXXXXX"; // Replace with real number, no + or spaces

export const services = [
  { name: "Classic Set", price: 40, deposit: 15 },
  { name: "Hybrid Set", price: 45, deposit: 15 },
  { name: "Russian / Volume Set", price: 50, deposit: 15 },
  { name: "Mega Volume Set", price: 55, deposit: 20 },
  { name: "Wispy Set", price: 55, deposit: 20 },
  { name: "Bottom Lashes", price: 15, deposit: 5 },
  { name: "Spikes Add-on", price: 10, deposit: 5 },
  { name: "Full Glam Makeup (Includes strip lashes)", price: 35, deposit: 10 },
  { name: "Full Glam Makeup (No Strip Lashes)", price: 30, deposit: 10 },
] as const;

export function getDepositForService(serviceName: string): number {
  const s = services.find((x) => x.name === serviceName);
  return s?.deposit ?? 10;
}

export function getPriceForService(serviceName: string): number {
  const s = services.find((x) => x.name === serviceName);
  return s?.price ?? 0;
}
