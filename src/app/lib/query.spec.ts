import {Query} from './query';

describe('Query', ()=> {
    it('should have a SearchResults key', () => {
        var query = new Query;
        expect(query.searchResults.searchedFor).toEqual('');
    });
    it('should have a SearchParams key', () => {
        var query = new Query;
        expect(query.searchParams.start()).toEqual(0);
    });
    it('should have a SearchState key', () => {
        var query = new Query;
        expect(query.searchState.isSearching).toEqual(false);
    });
});
