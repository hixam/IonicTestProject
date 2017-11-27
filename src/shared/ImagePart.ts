import {DonationObject} from "./DonationObject";

export class ImagePart {
  public donations : Array<DonationObject>;
  public isDonat: boolean = (this.donations!=null && this.donations.length > 0) ? true : false;
}
