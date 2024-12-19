interface GitHubAuthTokenFailure {
    error: string | undefined;
    succeeded: false;
}
interface GitHubAuthTokenSuccess {
    succeeded: true;
    token: string;
}
type GitHubAuthToken = GitHubAuthTokenFailure | GitHubAuthTokenSuccess;

export type { GitHubAuthToken, GitHubAuthTokenFailure, GitHubAuthTokenSuccess };
