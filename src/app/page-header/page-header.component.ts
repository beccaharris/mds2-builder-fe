import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment/moment';


import { AssessmentService } from '../services/assessment-service/assessment.service';
import { CsvService } from '../services/csv-service/csv.service';


@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  filename = "1111111111";
  data: any;

  constructor(private assessmentService: AssessmentService,
              private csvService: CsvService) { }

  ngOnInit() {
  }

  download() {
    this.data = this.assessmentService.setData();
    this.filename = this.filename+"_CCIM_"+moment().format("YYYYMMDD");
    this.csvService.download(this.data,this.filename);
  }

}
