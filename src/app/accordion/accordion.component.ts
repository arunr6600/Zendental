import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }],
})
export class AccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
