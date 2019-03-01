import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() mail: Mail;

  getMail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mailService.getMail(id).subscribe(mail => this.mail = mail)
  }

  constructor(
    private route: ActivatedRoute,
    private mailService: MailService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMail()
  }

}
