import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../class/Product';
import { RequestService } from '../../serveices/request.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private getServiece: RequestService) { }
  result: Product[];
  wordToSearch: any = '';
  @Output() itemList = new EventEmitter();
  @Input() selectedProduct: any;
  ngOnInit(): void {
  }
  OnClickSearch() {
    this.getServiece.getItem(this.wordToSearch).subscribe(
      r => {
        this.result = r;
        this.selectedProduct = null;
        this.itemList.emit(this.result);
      }
    );
  }
}
