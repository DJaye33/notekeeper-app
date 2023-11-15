import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './notebook/notebook.component';
import { NoteComponent } from './note/note.component';
import { TruncatePipe } from '../truncate.pipe';

@NgModule({
  declarations: [NotebookComponent, NoteComponent, TruncatePipe],
  imports: [CommonModule],
  exports: [NotebookComponent],
})
export class NotesModule {}
