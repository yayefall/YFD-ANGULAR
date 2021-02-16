import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referentiels',
  templateUrl: './referentiels.component.html',
  styleUrls: ['./referentiels.component.scss']
})
export class ReferentielsComponent implements OnInit {

  constructor() { }
  fileBlob: any;
  b64Blob: any;
  ngOnInit(): void {
  }

  changeFile(file: any): any{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  uploadFile(event: any): any {
    if (event.target.value) {
      const file = event.target.files[0];
      const type = file.type;
      this.changeFile(file).then((base64: string): any => {
        console.log(base64);
        this.fileBlob = this.b64Blob([base64], type);
        console.log(this.fileBlob);
      });
    } else {alert('Nothing');
    }
  }

}
