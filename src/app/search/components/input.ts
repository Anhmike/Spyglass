import {Component, Input, Output} from 'angular2/core';

/**
 * Component
 * SearchInput
 */

@Component({
  selector: 'searchInput',
  template: '<input type="text" [(ngModel)]="value"> {{value}}'
})

export class SearchInput {
  @Input() value: string;
}