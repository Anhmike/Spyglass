import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';


import {Search} from './search';
import {Query} from '../lib/query'

describe('Search', () => {
  beforeEachProviders(() => [
    Search
  ]);
  
  it('should have a query', inject([ Search ], (search) => {
    expect(!!search.query).toBeDefined;
  }));

});
