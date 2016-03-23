import {Injectable} from 'angular2/core';
import {Query, SearchResults} from '../lib/query';

@Injectable()
export class Search {
  query = new Query; 
  private _faker = require('faker');
  
  search() {
    var documents = [];
    for(var i=0; i < this.query.searchParams.resultsPageSize; i++) {
      documents.push({
        title: this._faker.name.findName(),
        description: this._faker.lorem.paragraph()
      })
    }
    var results = new SearchResults('people I like', 100, documents);
    this.query.searchResults = results;      
  }
}