import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CONFIGS} from "../configs/configs";
import {UserService} from "./user-service";


@Injectable()
export class DeliveryService {

  public deliverSaved: any;
  public deliveryAttended = false;

  constructor(private http: HttpClient, private userService: UserService) {

  }

  getAll() {
    return [];
  }

  addDelivery(delivery: any): any {
    return this.http.post(CONFIGS.urlServices + 'delivery', delivery, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.userService.accessToken
        }
      )
    });
  }

  loadPendingDeliverys(): any {
    return this.http.get(CONFIGS.urlServices + 'pendingDeliveryByUser', {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.userService.accessToken
        }
      )
    });
  }

  attendedDeliveryByUserClient(): any {
    return this.http.get(CONFIGS.urlServices + 'attendedDeliveryByUserClient', {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.userService.accessToken
        }
      )
    });
  }

  onSiteDeliveryByUserClient(): any {
    return this.http.get(CONFIGS.urlServices + 'onSiteDeliveryByUserClient', {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.userService.accessToken
        }
      )
    });
  }

  successDeliveryByUserClient(): any {
    return this.http.get(CONFIGS.urlServices + 'successDeliveryByUserClient', {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.userService.accessToken
        }
      )
    });
  }

  cancelDelivery(deliveryId: any): any {
    return this.http.get(CONFIGS.urlServices + 'cancelDelivery/' + deliveryId, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.userService.accessToken
        }
      )
    });
  }

  addValoration(deliveryId: any, valoration: Number): any {
    return this.http.put(CONFIGS.urlServices + 'addValoration/' + deliveryId, {valoration: valoration}, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.userService.accessToken
        }
      )
    });
  }


}
