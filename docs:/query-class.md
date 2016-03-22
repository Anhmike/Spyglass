# Query Class

controller --> query --> searchService

```ts
class Query {
  this.searchResult = new SearchResults;
  this.searchParams = new SearchParams;
  this.searchState  = new SearchState;

  constructor () {
  }
}

class SearchResults {
  this.searchedFor = '';
  this.documentCount = 0;
  this.documents = [];
}
class SearchParams {
  this.inputValue = '';
  this.sort = 'score desc';
  this.resultsPage = 0;
  this.resultsToReturn = 10;
  this.start = this.resultsPage * this.resultsToReturn;
  this.selectedFilters = [];
}
class SearchState {
  this.isSearching = false;
  this.hasResults = false;
  this.allResultsLoaded = false;
}

```

```ts
class SearchService {
  getResults (query:Query): Promise {

  }
}
```
