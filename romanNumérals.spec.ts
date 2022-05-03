type ArabicToRoman=[number,string]

const ARABIC_TO_ROMAN:ArabicToRoman[]=[

    [5,'V'],


]




const toRoman = (arabic: number): string => {
    if (arabic === 0) return ''
    if (arabic >= 5) return 'V'.concat(toRoman(arabic - 5))
    if (arabic >= 4) return 'IV'.concat(toRoman(arabic - 4))
    if (arabic >= 1) return 'I'.concat(toRoman(arabic - 1))
}

describe('RomanCalculator', () => {
    describe('For Numeral', () => {
        it('should be empty for 0', () => {
            expect(toRoman(0)).toBe('')
        });
        it('should be I for 1', () => {
            expect(toRoman(1)).toBe('I')
        });
        it('should be II for 2', () => {
            expect(toRoman(2)).toBe('II')
        });
        it('should be III for 3', () => {
            expect(toRoman(3)).toBe('III')
        });
        it('should be IV for 4', () => {
            expect(toRoman(4)).toBe('IV')
        });
        it('should be V for 5', () => {
            expect(toRoman(5)).toBe('V')
        });
        it('should be VI for 6', () => {
            expect(toRoman(6)).toBe('VI')
        });

    });
});
