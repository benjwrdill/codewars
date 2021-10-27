export class G964 {

    public static nbYear = (p0:number, percent:number, aug:number, target:number) => {
        let pop = p0;
        let years = 0;
        while(pop < target) {
            years++;
            let growth = pop * percent / 100;
            pop = pop + growth + aug;
        }
        return years;
    }
}
