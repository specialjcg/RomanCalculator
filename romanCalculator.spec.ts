type ArabicToRoman=[
    number,string
]
const ARABIC_TO_ROMAN:ArabicToRoman []=[
    [40,'XL'],
    [10,'X'],
    [9,'IX'],
    [5,'V'],
    [4,'IV'],
    [1,'I'],


]


const toRomanCalc = (arabic: number): string =>{
    if (arabic===0) return  ''

    const [arab,roman]=ARABIC_TO_ROMAN.find(([num,_]) =>arabic>=num);

    return roman.concat(toRomanCalc(arabic-arab))



}



describe('Roman Calculator', () => {
    describe('For numeral', () => {
        it('should be empty for 0', () => {
            expect(toRomanCalc(0)).toBe('');
        });
        it('should be I for 1', () => {
            expect(toRomanCalc(1)).toBe('I')
        });
        it('should be III for 3', () => {
            expect(toRomanCalc(3)).toBe('III')
        });
        it('should be IV for 4', () => {
            expect(toRomanCalc(4)).toBe('IV')
        });
        it('should be V for 5', () => {
            expect(toRomanCalc(5)).toBe('V')
        });
        it('should be VI for 6', () => {
            expect(toRomanCalc(6)).toBe('VI')
        });
        it('should be VIII for 8', () => {
            expect(toRomanCalc(8)).toBe('VIII')
        });
        it('should be IX for 9', () => {
            expect(toRomanCalc(9)).toBe('IX')
        });
        it('should be X for 10', () => {
            expect(toRomanCalc(10)).toBe('X')
        });
        it('should be XVI for 16', () => {
            expect(toRomanCalc(16)).toBe('XVI')
        });
        it('should be XL for 40', () => {
            expect(toRomanCalc(40)).toBe('XL')
        });
    });

});
