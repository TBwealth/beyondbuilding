export const Util = {

    getDomain(env: string): string {


        if(env == 'local')
        {
            return "http://localhost/beyondbuilding/clients/api/v1/";
        }

        if(env == 'development')
        {
            return "";
        }

        if(env == 'companydevelopment')
        {

        }

        if(env == 'staging')
        {

        }

        if(env == 'demo')
        {

        }

        if(env == 'production')
        {

        }

    }

}
