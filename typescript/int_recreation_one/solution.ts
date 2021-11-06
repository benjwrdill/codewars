export class G964 {

    public static listSquared = (m:number, n:number): number[][] => {
        let squary:number[][] = [];
        for(let current = m; current <= n; current++){
            let divisors:number[] = G964.listDivisors(current);
            let sumOfSquaredDivisors = divisors.reduce((sum, val) => sum += val**2 );
            if(Number.isInteger(Math.sqrt(sumOfSquaredDivisors))){
                squary.push([current, sumOfSquaredDivisors]);
            }
        }
        return squary;
    }

    public static listDivisors = (num: number): number[] => {
        let divisors:number[] = [];
        for(let i = 1; i <= Math.ceil(Math.sqrt(num)); i++){
            if((num % i) == 0){
                let comp = num / i;
                if(divisors.indexOf(i) === -1){
                    divisors.push(i);
                }
                if(divisors.indexOf(comp) === -1){
                    divisors.push(comp);
                }
                
            }
        }
        return divisors;
    }
}
