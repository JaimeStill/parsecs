import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.scss']
})
export class FileUploadComponent {
  hovered = false;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  @Input() useDrop: boolean = true;
  @Input() multiple: boolean = false;
  @Input() accept: string = '*';

  @Input() buttonClass: string = 'color-primary';
  @Input() icon: string = 'file_upload';
  @Input() iconClass: string = 'material-icons-outlined';

  @Input() dropWidth: number | string = 'auto';
  @Input() dropHeight: number | string = 140;
  @Input() dropStyle = 'm4 rounded background-stacked card-outline-accent border-x-dashed border-width-2';

  @Input() dropIconScale: number = 5;
  @Input() dropIcon: string = 'note_add';
  @Input() dropIconClass = 'material-icons-outlined';

  @Output() loaded = new EventEmitter<FileList>();

  getAccept = () => this.accept.startsWith('.')
    ? this.accept
    : `.${this.accept}`;

  fileChange = (event: Event) => {
    const files = (<HTMLInputElement>event.target).files;

    if (files && files.length > 0) {
      this.loaded.emit(files)
      this.fileInput.nativeElement.value = '';
    }
  }

  dragOver = (event: Event) => {
    event.stopPropagation();
    event.preventDefault();

    this.hovered = true;
  }

  dragLeave = (event: Event) => {
    event.stopPropagation();
    event.preventDefault();

    this.hovered = false;
  }

  drop = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const files = event.dataTransfer?.files;
    files && this.loaded.emit(files);

    this.hovered = false;
  }
}
