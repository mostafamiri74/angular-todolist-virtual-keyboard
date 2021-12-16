import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService implements OnInit {
  notes: string[] = [];
  constructor() {
    this.notes = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes') as string)
      : [];
  }

  ngOnInit(): void {}

  addNote(note: string): void {
    this.notes.unshift(note);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  removeNote(e: any): void {
    let li = e.target.closest('.note');
    let ul = e.target.closest('.note').parentNode;
    let indexOfTodo = +Array.prototype.indexOf.call(ul.children, li);
    this.notes.splice(indexOfTodo, 1);
    this.updateLocalStorage();
    li.remove();
  }
}
