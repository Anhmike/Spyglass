import {Injectable} from 'angular2/core';
import {Query} from '../lib/query';

@Injectable()
export class Search {
  query = new Query; 
}