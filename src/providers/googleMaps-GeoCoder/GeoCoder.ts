import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeoCoderProvider 
{    

    constructor(private http: Http) 
    {

    }

    obtenerLocalizacion(term: string):Promise<any> 
    {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + term + 'CA&sensor=false')
         .toPromise()
         .then((response) => Promise.resolve(response.json()))
         .catch((error) => Promise.resolve(error.json()));
    }


}