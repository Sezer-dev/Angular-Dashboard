import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-location-modal',
  templateUrl: './add-location-modal.component.html',
  styleUrls: ['./add-location-modal.component.scss'],
})
export class AddLocationModalComponent implements OnInit {
  @Input() showModal = false;
  @Output() close = new EventEmitter();
  date: string;
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
  constructor() {}

  ngOnInit(): void {
    this.date = new Date().toString().substring(4, 15);
  }
  fileUpload() {
    this.fileInput.nativeElement.click();
  }
  closeModal(): void {
    this.close.emit(true);
  }
}
