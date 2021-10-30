export function divisors(n: number) {
    return [...Array(n).keys()].filter(k => (n % (k + 1)) == 0).length;
}
