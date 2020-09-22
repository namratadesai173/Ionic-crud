import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  // API Related configs
  //public apiPort: string = "9090";
  //public apiPort: string = "8080";
  //public contextPath: string = "fishverifyapi";
  public apiProtocol: string;
  public apiHostName: string;
  public baseApiPath: string;
 
  
 //Local config
  //public tempApiPath;
  //public identityServerUrl;
 
  // public tempApiPath = 'https://lms.tenupsoft.com/';
  // public identityServerUrl="https://identity.tenupsoft.com/auth/realms/Tenup/protocol/openid-connect/auth?response_type=code&client_id=hrms&redirect_uri=https%3A%2F%2Fhrms.tenupsoft.com%2Fapi%2Fv1%2Fgateway";
 
  constructor() {
 //   this.tempApiPath = "http://localhost:4200/fishverifyapi/";
 //   this.identityServerUrl = this.tempApiPath;
  //   if(this.environment=='local'){
  //   this.tempApiPath = 'http://localhost:8080/hrms/';
  //     this.identityServerUrl="https://identity.tenupsoft.com/auth/realms/Tenup/protocol/openid-connect/auth?response_type=code&client_id=local-hrms&redirect_uri=http%3A%2F%2Flocalhost%3A9090%2Fhrms%2Fapi%2Fv1%2Fgateway";
  // }
  //   // }else if(this.environment=='local-keycloak'){
    // this.tempApiPath = 'http://localhost:8080/hrms/';
    // this.identityServerUrl="https://identity.tenupsoft.com/auth/realms/TenupDev/protocol/openid-connect/auth?response_type=code&client_id=local-hrms&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fhrms%2Fapi%2Fv1%2Fgateway";
    // }else if(this.environment=='dev'){
    // this.tempApiPath = 'https://dev.hrms.tenupsoft.com/';
    // this.identityServerUrl="https://identity.tenupsoft.com/auth/realms/TenupDev/protocol/openid-connect/auth?response_type=code&client_id=hrms-dev&redirect_uri=https%3A%2F%2Fdev.timesheet.tenupsoft.com%2Fapi%2Fv1%2Fgateway";
    
    // }else if(this.environment=='prod'){
    //   this.tempApiPath = 'https://timesheet.tenupsoft.com/';
    //   this.identityServerUrl="https://identity.tenupsoft.com/auth/realms/Tenup/protocol/openid-connect/auth?response_type=code&client_id=hrms&redirect_uri=https%3A%2F%2Ftimesheet.tenupsoft.com%2Fapi%2Fv1%2Fgateway";
    // }
    
    
    // if (this.apiProtocol === undefined) {
    //   this.apiProtocol = window.location.protocol;
    // }
    // if (this.apiHostName === undefined) {
    //   this.apiHostName = window.location.hostname;
    // }
    // if (this.apiPort === undefined) {
    //   this.apiPort = window.location.port;
    // }

    // this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort + "/" + this.contextPath + "/";

  }
}
