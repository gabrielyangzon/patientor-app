function generateUid(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export { generateUid };
