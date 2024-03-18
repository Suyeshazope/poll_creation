import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private url = 'http://192.168.5.103:8080/poll'

  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }
  constructor(private http: HttpClient) { }

  pollName = ""
  setPollName(pollName: string) {
    this.pollName = pollName ;
  }

  getPollName() {
    return this.pollName;
  }

  pollId = 0
  setPollId(pollId: number) {
    this.pollId = pollId ;
  }

  getPollId() {
    return this.pollId;
  }

  createPoll(pollData: any): Observable<any> {
    console.log(pollData);
    
    const url = `${this.url}/createpoll`;
    return this.http.post<any>(url , pollData) ;
  }

  availablePoll(): Observable<any> {
    const url = `${this.url}/availablepolls`;
    return this.http.get<any>(url) ;
  }

  getOptions(pollId: number): Observable<any> {
    const url = `${this.url}/options/${pollId}`;
    return this.http.get<any>(url);
  }

  saveVote(pollId : number , optionId : number , userName : string): Observable<any> {
    const url = `${this.url}/savevote`;
    return this.http.post<any>(url, {pollId , optionId , userName});
  }

  getAllPollsByUser(userName:string):Observable<any>{
    const url = `${this.url}/getpolls/`+userName;
    return this.http.get<any>(url);
  }

}
