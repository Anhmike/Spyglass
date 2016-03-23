// angular2

import {Component, ViewEncapsulation} from 'angular2/core';
import {SearchInput} from './search/components/input'
import {SearchSubmit} from './search/components/submit'
import {ResultsHeader} from './search/components/resultsHeader'

@Component({
  selector: 'spyglass',
  template: require('./spyglass.html'),
  directives: [SearchInput, SearchSubmit, ResultsHeader]
})

export class Spyglass {
}