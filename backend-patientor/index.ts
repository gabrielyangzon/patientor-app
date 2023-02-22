const app = require("./app");
const config = require("./util/config");

app.listen(config.PORT, () => {
  console.log(`app listening in ${config.PORT}`);
});
