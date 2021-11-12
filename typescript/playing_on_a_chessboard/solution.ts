export class G964 {
    public static game(n: number): number[] {
        return (n**2 % 2) ? [n**2, 2] : [n**2/2];
    }
}
