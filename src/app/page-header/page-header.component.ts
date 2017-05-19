import { Component, OnInit } from '@angular/core';

import { AssessmentService } from '../services/assessment-service/assessment.service';
import { CsvService } from '../services/csv-service/csv.service';


@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  data: any;

  constructor(private assessmentService: AssessmentService,
              private csvService: CsvService) { }

  ngOnInit() {
  }

  download() {
    this.data = this.assessmentService.setData();
    this.csvService.download(this.data,'Filename')
  }
}
