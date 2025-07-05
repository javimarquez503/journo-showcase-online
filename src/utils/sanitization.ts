/**
 * Basic input sanitization utilities
 */

export const sanitizeInput = (input: string): string => {
  // Remove potentially dangerous characters and trim whitespace
  return input
    .trim()
    .replace(/[<>'"]/g, '') // Remove basic HTML/script injection chars
    .substring(0, 1000); // Limit length to prevent DoS
};

export const sanitizeEmail = (email: string): string => {
  // Basic email sanitization - remove dangerous chars but keep email format
  return email
    .trim()
    .toLowerCase()
    .replace(/[<>'"]/g, '')
    .substring(0, 254); // RFC 5321 email length limit
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};
