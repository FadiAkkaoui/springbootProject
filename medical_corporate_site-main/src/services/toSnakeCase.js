export const toSnakeCase = (str) => {
  return str.toLowerCase().replace(/[\s\W-]+/g, "_"); // Replace spaces, non-word characters, and hyphens with underscores
};