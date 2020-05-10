// not ok
const uniq = await import("https://deno.land/x/lodash/uniq.js").then((mod) =>
  mod.default
);
export const x = { uniq };

// ok
// export const x = { uniq: true }
