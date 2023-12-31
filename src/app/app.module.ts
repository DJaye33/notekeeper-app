import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NotesModule } from './notes/notes.module';
// import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [AppComponent, ContainerComponent, HeaderComponent],
  imports: [BrowserModule, NotesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
