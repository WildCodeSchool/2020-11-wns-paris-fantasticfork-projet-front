import timestampToDateString from './dates';

describe('Timestamp conversion', () => {
    it('returns the date : "01/01/2000 - 00:00"', () => {
        const timestamp = 946684800;
        expect(timestampToDateString(timestamp)).toEqual("01/01/2000 - 00:00")
    });

    it('returns the date : "15/09/1981 - 14:25"', () => {
        const timestamp = 369411900;
        expect(timestampToDateString(timestamp)).toEqual("15/09/1981 - 14:25")
    });

    it('returns the date : "25/11/2011 - 08:49"', () => {
        const timestamp = 1322210983;
        expect(timestampToDateString(timestamp)).toEqual("25/11/2011 - 08:49")
    });
});