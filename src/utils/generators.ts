const generateid = (): string => Math.random().toString(36).slice(-6);

export { generateid };
