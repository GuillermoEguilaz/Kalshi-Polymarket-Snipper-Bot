const ts = () => new Date().toISOString();

/** Minimal CLI logger (replaces compromised third-party package). */
export default {
  info: (...args: unknown[]) => console.log(ts(), ...args),
  error: (...args: unknown[]) => console.error(ts(), ...args),
};
