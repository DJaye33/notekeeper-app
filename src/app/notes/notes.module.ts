import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './notebook/notebook.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [NotebookComponent, NoteComponent],
  imports: [CommonModule],
  exports: [NotebookComponent],
})
export class NotesModule {}
