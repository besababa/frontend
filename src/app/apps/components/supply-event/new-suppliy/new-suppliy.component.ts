import { Component, Output, EventEmitter, ViewChild, Input} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-suppliy',
  templateUrl: './new-suppliy.component.html',
  styleUrls: ['./new-suppliy.component.css']
})
export class NewSuppliyComponent {

  @ViewChild('form') newSupplyForm;
  @Output() add = new EventEmitter();
  @Input() public errorDuplicate: any;
  ;
  formGroup = new FormGroup({
    title : new FormControl('', [
      Validators.required
    
    ]),
    amount : new FormControl('', [
      Validators.required
    ])
   
  })

  get title(): any { return this.formGroup.get('title'); }
  get amount(): any { return this.formGroup.get('amount'); }

  

  addSupply(){

    if(this.formGroup.invalid) return false;

    let supply = this.formGroup.value;

    supply.confirmed = 0;
    
    
    this.add.emit(this.formGroup.value);
    
    this.newSupplyForm.resetForm();
    
   
    
  }

}
