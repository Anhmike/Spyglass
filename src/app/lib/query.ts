    export class Query {
        searchResults = new SearchResults;
        searchParams = new SearchParams;
        searchState = new SearchState;
    }
    class SearchResults {
        searchedFor = '';
        documentCount = 0;
        documents = [];
    }
    class SearchParams {
        inputValue = '';
        resultsPage = 0;
        resultsPageSize = 10;
        selectedFilters = [];
        start() {
            return this.resultsPage * this.resultsPageSize;
        }
        sort = 'score desc';
    }
    class SearchState {
        isSearching = false;
        hasResults = false;
        allResultsLoaded = false;
    }
    