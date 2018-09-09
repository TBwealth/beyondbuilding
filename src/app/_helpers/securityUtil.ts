
import {environment} from "../environment";
export class securityUtil {

    static saveToStorage(key:string, text:string)
    {
        let reverseKey = btoa(environment.stage+key);
        let reverseText = btoa(text);
        localStorage.setItem(reverseKey,reverseText)
    }

    static retrieveFromStorage(key:string) : any
    {
        let composeKey = btoa(environment.stage+key);

        let reversetext = localStorage.getItem(composeKey);

        if(reversetext == null)
        {
            return false;
        }

        let text = atob(reversetext)

        return text;

    }

    static deleteFromStorage(key:string) : void
    {
        let composeKey = btoa(environment.stage+key);

        localStorage.removeItem(composeKey);

    }

}