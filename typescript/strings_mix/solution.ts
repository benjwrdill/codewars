export class G964 {
    public static mix = (s1:string, s2:string):string => {
        return mergeCharCountMaps(
            mapCharCounts(s1),
            mapCharCounts(s2))
            .sort(sortByLengthAndLexographicOrder)
            .join('/');
    }
}

let mapCharCounts = (str: string):Map<string, number> => {
    let charMap = new Map<string, number>();
    str
        .split('')
        .filter(char => char > 'Z') // only lowercase
        .map(char => {
            charMap.get(char) ? charMap.set(char, charMap.get(char)! + 1) : charMap.set(char, 1);
        });
    return charMap;
}

let mergeCharCountMaps = (map1:Map<string, number>, map2:Map<string, number>):string[] => {
    let charSet = new Set<string>([...map1.keys(), ...map2.keys()]);
    let minCount = 2;

    let merged:string[] = [];
    for(let it of charSet){
        let c1 = map1.get(it) || 0;
        let c2 = map2.get(it) || 0;
        if(c1 < minCount && c2 < minCount) {
            continue;
        } else if(c1 > c2){
            merged.push(`1:${it.repeat(c1)}`);
        } else if (c1 < c2) {
            merged.push(`2:${it.repeat(c2)}`);
        } else {
            merged.push(`=:${it.repeat(c1)}`);
        }
    }    
    return merged;
}

let sortByLengthAndLexographicOrder = (curr:string, next:string):number => {
    if(curr.length > next.length) {
        return -1;
    } else if ( curr.length == next.length && curr < next ) {
        return -1
    }
    return 1;

}
