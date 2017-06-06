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

  facilityName = "1111111111";

  constructor(
    private assessmentService: AssessmentService,
    private csvService: CsvService
  ){}

  ngOnInit() 
  {}

  download() {
    let assessments = this.assessmentService.assessments;
    let filename = this.facilityName+"_CCIM_"+moment().format("YYYYMMDD");

    this.csvService.download(assessments, filename);
  }

}
