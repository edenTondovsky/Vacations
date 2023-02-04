class AppConfig {

    public port = 4000;
    public mysqlHost = "localhost";
    public mysqlUser = "root";
    public mysqlPassword = "";
    public mysqlDatabase = "vacationsDatabase";
}

const appConfig = new AppConfig()

export default appConfig;