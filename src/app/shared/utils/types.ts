export type Replace<T, K extends keyof T, N> = Omit<T, K> & Record<K, N>;
