import SendOtp from "@/api/WhatsappApiCall";
import { makeAutoObservable, runInAction } from "mobx";

export class LoginStore {
  otpRefId = "";
  isLoggedIn = "";
  arePhoneNumberDigitsValid = false;
  firstName = "";
  phoneNumber = "";
  userType = "";
  email = "";

  constructor() {
    makeAutoObservable(this);
  }
  async checkPhone({ email, firstName, phoneNumber }: any) {
    runInAction(() => {
      this.phoneNumber = phoneNumber;
      this.firstName = firstName;
      this.email = email;
    });
    SendOtp({ firstName, phoneNumber });
  }
}

const loginStore = new LoginStore();
export default loginStore;
