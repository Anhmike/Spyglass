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
  sort = 'score desc';
  start() {
    return this.resultsPage * this.resultsPageSize;
  }
}
class SearchState {
  isSearching = false;
  hasResults = false;
  allResultsLoaded = false;
}
