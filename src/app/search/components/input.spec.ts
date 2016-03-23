import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component} from 'angular2/core';
import {WebpackState} from 'angular2-hmr';


import {SearchInput} from './input';


describe('SearchInput', ()=> {
  beforeEachProviders(() => [
    WebpackState,
    SearchInput
  ]);

  it('should have a value', inject([ SearchInput ], (searchInput) => {
    expect(searchInput.value).toBeDefined;
  }));
});
