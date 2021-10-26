export class Kata {
    static dnaStrand(dna: string) {
        let comp: string = '';
        for(let i:number = 0; i < dna.length; i++) {
            let it = dna.substr(i, 1);
            switch (it) {
                case 'A':
                    comp += 'T';
                    break;
                case 'T':
                    comp += 'A';
                    break;
                case 'G':
                    comp += 'C';
                    break;
                case 'C':
                    comp += 'G';
                    break;
            }
        }
        return comp;
    }
}
