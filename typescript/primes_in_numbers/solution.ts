export class G964 {

    public static primeFactors = (n:number): string => {
        // your code
        let current:number = n;
        let factors = new Map();
        for(let i = 2; i <= current; i++) {
            if((current % i ) == 0){
                current = current / i;
                if(factors.get(i) === undefined) {
                    factors.set(i, 1);
                } else {
                    factors.set(i, factors.get(i) ? factors.get(i) + 1 : 1);
                }
                i = i - 1;                
            }
        }
        let str = '';
        for( let [k, v] of factors ) {
            if( v > 1 ){
                str = str + `(${k}**${v})`;
            } else {
                str = str + `(${k})`
            }
        }
        return str;
    }
}
