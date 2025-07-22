export function getRandomCaller()  {
  const uuid = generateUUIDv4();
  const phone = getRandomPhoneNumber();
  const name = getRandomName();
  return {uuid, phone, name};
}

// Manual UUIDv4 generator (no crypto, no external lib)
export function generateUUIDv4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Random phone number like Taiwanese mobile numbers (starts with 09)
function getRandomPhoneNumber(): string {
  const prefix = ["090", "091", "092", "093", "095", "096", "097", "098", "099"];
  const randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
  const number = Math.floor(Math.random() * 10000000)
    .toString()
    .padStart(7, "0");
  return randomPrefix + number;
}

// Sample random names
function getRandomName(): string {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Henry"];
  return names[Math.floor(Math.random() * names.length)];
}
