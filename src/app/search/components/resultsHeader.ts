import {Component, Input, Output} from 'angular2/core';

/**
 * Component
 * ResultsHeader
 */

@Component({
  selector: 'sgResultsHeader',
  template: '{{total}} results found for {{searchString}}'
})

export class ResultsHeader {
}