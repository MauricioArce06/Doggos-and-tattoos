import server from "./server";
const serverInitialize = async () => {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

export default serverInitialize;
