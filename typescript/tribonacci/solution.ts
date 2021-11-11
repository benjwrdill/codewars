export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    let result:number[] = [a, b, c];
    for(let i = 3; i < n; i++) {
        result[i] = result[i-1] + result[i-2] + result[i-3];
    }
    console.log(result);
    return result.slice(0, n);
}
