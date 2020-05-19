import { Component, OnInit } from '@angular/core';
import { HttpTransportService } from '../../_services/http-transport.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-single-view',
	templateUrl: './single-view.component.html',
	styleUrls: ['./single-view.component.scss']
})
export class SingleViewComponent implements OnInit {
	paramMap;
	id;
	constructor(private http: HttpTransportService, private route: ActivatedRoute) {

	}

	ngOnInit(): void {
		// this.paramMap = this.route.paramMap.pipe(switchMap((param) => {
		// 	console.log('param: ', param);
		// 	this.id = param.get(':id');
		// }));

	}
}
