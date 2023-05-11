import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageloadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false)

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  hide():void{
    this.loadingSubject.next(false)
  }

  show():void{
    this.loadingSubject.next(true)
  }
}
