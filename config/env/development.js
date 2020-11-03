const devConfig = {
  //database
  jwt_key: "secret",
  jwt_expiration: 360000,
  dbConnectionString: `mongodb://localhost:27017/appointment-system`,
  mongoDebug: true,
};

export default devConfig;
