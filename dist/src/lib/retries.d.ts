export type BackoffStrategy = {
    initialInterval: number;
    maxInterval: number;
    exponent: number;
    maxElapsedTime: number;
};
export type RetryConfig = {
    strategy: "none";
} | {
    strategy: "backoff";
    backoff?: BackoffStrategy;
    retryConnectionErrors?: boolean;
};
//# sourceMappingURL=retries.d.ts.map