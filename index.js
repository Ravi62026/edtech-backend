const app = require("./app")

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is losten on http://localhost:${PORT}`);
})