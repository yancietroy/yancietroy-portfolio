const deploymentBasePath = process.env.GITHUB_ACTIONS ? "/yancietroy-portfolio" : "";

export const assetPath = (path: string) => `${deploymentBasePath}${path}`;
