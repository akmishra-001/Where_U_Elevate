import { GitHubAuthToken } from './types.js';

declare function getGitHubAuthToken(): Promise<GitHubAuthToken>;

export { getGitHubAuthToken };
