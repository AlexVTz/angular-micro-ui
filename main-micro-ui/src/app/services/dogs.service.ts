import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  getBreedList() {
      return axios.get('https://dog.ceo/api/breeds/list/all')
  }

  constructor() { }
}