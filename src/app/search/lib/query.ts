export class Query {
  searchResults = new SearchResults;
  searchParams = new SearchParams;
  searchState = new SearchState;
}
export class SearchResults {
  constructor(
    public searchedFor: string = '',
    public documentCount: number = 0,
    public documents: Array<Object> = []
  ){}
}
export class SearchParams {
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
