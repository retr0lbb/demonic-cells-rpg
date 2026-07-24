import fastify from "fastify"

const app = fastify()


app.get("/", async(req, res) => {
    res.status(200).send({message: "OK"})
})

app.listen({
    port: 3333
}).then(() => {
    console.log("APP running")
})