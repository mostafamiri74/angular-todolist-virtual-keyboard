import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: string[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.notesService.notes;
  }

  removeTodo(e: any): void {
    this.notesService.removeNote(e);
  }
}
