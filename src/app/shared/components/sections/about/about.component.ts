import { Component, OnInit } from '@angular/core';
import { PdfGeneratorService } from 'src/app/shared/services/pdf-generator.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  avatarImg = environment.avatarImg;

  constructor(private pdfService: PdfGeneratorService) { }

  ngOnInit(): void {
  }

  generate(): void {
    this.pdfService.generate();
  }
}