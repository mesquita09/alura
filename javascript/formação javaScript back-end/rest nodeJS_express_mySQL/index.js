// criado arquivo de config para lidar com as configs do express separadamente
const customExpress = require("./config/customExpress");

const app = customExpress();

app.listen(3000, () => console.log("rodando"));
