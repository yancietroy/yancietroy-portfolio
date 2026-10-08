// The site is served from the domain root. If it ever moves under a subpath, set it here and as basePath in next.config.ts.
const deploymentBasePath = "";

export const assetPath = (path: string) => `${deploymentBasePath}${path}`;
