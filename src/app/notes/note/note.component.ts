import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  note: Note = {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur. Dolor accumsan quisque tincidunt semper erat pulvinar aenean laoreet. A in nulla odio nibh id felis volutpat mauris. Interdum pretium viverra pellentesque fermentum. Posuere leo tellus tellus nulla sagittis pellentesque scelerisque.',
    created: '1 min ago',
  };
}
