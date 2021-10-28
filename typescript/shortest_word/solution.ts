export function findShort(s: string): number {
    let min = Infinity;
    let curr = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == ' '){
            min = (curr < min) ? curr : min;
            curr = 0;
        } else {
            curr++;
        }
        if( (i + 1) ==  s.length ){
            min = (curr < min) ? curr : min;
        }
    }
    return min;
}
