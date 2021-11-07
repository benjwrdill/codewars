export function arrayDiff(a: number[], b: number[]): number[] {
    let c:number[] = [];
    for(const el of a){
        if(b.indexOf(el) == -1)
            c.push(el);
    }
    return c;
}
