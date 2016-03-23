// angular2

import {Component, ViewEncapsulation} from 'angular2/core';
import {SearchInput} from './search/components/input'
import {SearchSubmit} from './search/components/submit'
import {ResultsHeader} from './search/components/resultsHeader'

@Component({
  selector: 'spyglass',
  template: '<searchInput></searchInput><sgSubmit></sgSubmit><sgResultsHeader></sgResultsHeader>',
  directives: [SearchInput, SearchSubmit, ResultsHeader]
})

export class Spyglass {
}