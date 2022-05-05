import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  

  showAddress = false;
  addressForm!: FormGroup;
  address$ = new Observable<any>();
  selectedAddressId = 0;
  selectedAddress = { id: 0 };
  @Output() selectedAddressEvent: EventEmitter<any> = new EventEmitter();
  

  constructor(){
    // private userService: UserService, private loaderService: LoaderService, private toasterService: ToasterService) {
    this.initializeFrom({});
  }

  initializeFrom(address: any) {
    this.addressForm = new FormGroup({
      name: new FormControl(address?.name || '', Validators.required),
      primaryMobile: new FormControl(address?.primaryMobile || '', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),Validators.maxLength(10), Validators.minLength(10)]),
      landmark: new FormControl(address?.landmark, [Validators.required, Validators.maxLength(50)]),
      addressLine: new FormControl(address?.addressLine || '', [Validators.required]),
      pincode: new FormControl(address?.pincode || '', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
      city: new FormControl(address?.city || '', Validators.required),
      state: new FormControl(address?.state || '', Validators.required),
      country: new FormControl(address?.country || '', Validators.required),
      alternateLandmark: new FormControl(address?.alternateLandmark || ''),
      alternateMobile: new FormControl(address?.alternateMobile || '', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.maxLength(10)]),
    });
  }

  ngOnInit(): void {
    // this.address$ = this.userService.getUserAddress();
  }

  handleSelectedAddress(address: any) {
    console.log(JSON.stringify(address));
    this.selectedAddress = address;
    //EMIT SELECTED ADDRESS
    this.selectedAddressEvent.emit(address);
  }
  onSubmit() {
    // this.loaderService.showProgressBar();
    console.log(JSON.stringify(this.addressForm.value));
    // if (this.selectedAddressId > 0) {
    //   this.updateAddress();
    // } else {
    //   this.saveNewAddress();
    // }

  }
  saveNewAddress() {
  //   this.userService.saveUserAddress(this.addressForm.value).subscribe(data => {
  //     //refresh address
  //     this.address$ = this.userService.getUserAddress();
  //     this.initializeFrom({});
  //     this.loaderService.hideProgressBar();
  //   })
  }
  updateAddress() {
  //   this.userService.updateUserAddress(this.selectedAddress?.id, this.addressForm.value).subscribe(data => {
  //     //refresh address
  //     this.address$ = this.userService.getUserAddress();
  //     this.initializeFrom({});
  //     this.loaderService.hideProgressBar();
  //   })
  }
  onEditAddress() {
    this.selectedAddressId = this.selectedAddress?.id;
    console.log('onEditAddress:::::::');
    this.initializeFrom(this.selectedAddress);
    this.showAddress = true;
    this.addressForm.markAllAsTouched(); //optional
  }
  onDeleteAddress() {
    // this.userService.deleteAddress(this.selectedAddress.id).subscribe(data => {
    //   //refresh address
    //   this.address$ = this.userService.getUserAddress();
    //   this.initializeFrom({});
    //   this.loaderService.hideProgressBar();
    // })
  }

  onResetAddressForm() {
    this.initializeFrom({});
    this.selectedAddressId =0;
    this.selectedAddress = { id: 0 };
  }


  get name() { return this.addressForm.get('name'); }
  get primaryMobile() { return this.addressForm.get('primaryMobile'); }
  get landmark() { return this.addressForm.get('landmark'); }
  get addressLine() { return this.addressForm.get('addressLine'); }
  get pincode() { return this.addressForm.get('pincode'); }

  get city() { return this.addressForm.get('city'); }
  get state() { return this.addressForm.get('state'); }
  get country() { return this.addressForm.get('country'); }

  get alternateLandmark() { return this.addressForm.get('alternateLandmark'); }
  get alternateMobile() { return this.addressForm.get('alternateMobile'); }

}