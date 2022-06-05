import { app } from "./app.js";

const PORT = 3000

async function start() {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

process.on("SIGINT", () => {
  console.log("Interrupted");
  process.exit(0);
});

process.on("uncaughtException", err => {
  console.error(err);
  process.exit(1);
});

process.on("unhandledRejection", error => {
  throw error;
});

start();
