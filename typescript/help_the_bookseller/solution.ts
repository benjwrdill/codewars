export class G964 {

    public static stockList = (listOfArt:string[], listOfCat:string[]):string => {
        if(!(listOfArt.length && listOfCat.length)){
            return '';
        }
        return listOfCat
            .map(cat => `(${cat} : ${countArtCategory(listOfArt, cat)})`)
            .join(" - ");
    }
}

function countArtCategory(listOfArt:string[], cat:string):number {
    return listOfArt
        .filter(item => item.startsWith(cat))
        .map(piece => parseInt(piece.split(" ")[1]))
        .reduce((sum, curr) => sum + curr, 0);
}
