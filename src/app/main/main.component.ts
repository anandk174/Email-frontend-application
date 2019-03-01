import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';

import { MailService } from '../mail.service';
import { MaterialModule } from '../material.module'; 
// import 'hammerjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'from', 'subject'];
  mails: Mail[];

  getMails(): void {    
    this.mailService.getMails().subscribe(mails => this.mails = mails)
  }   

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.getMails()
  }

}
