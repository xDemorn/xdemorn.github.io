export function UUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
    const v = c === 'x' ? r : (r & 0x3 | 0x8); // ensure 'y' is 8, 9, A, or B
    return v.toString(16);
  });
}