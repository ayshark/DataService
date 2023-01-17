export class LogService {
    LogMessage(name: string, status: string){
        window.alert(name + ' with the status ' + status + ' has been added.');
    }
}