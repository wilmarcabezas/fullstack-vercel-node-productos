import pkg from "pg";

const { Client } = pkg;

const connectionString =
  "postgres://root01:FjiX2HEav00b430M7h53zLWxMyywHpWN@dpg-cnd2soen7f5s73bjn6v0-a.oregon-postgres.render.com/database01_bbz3";
  //Externa:postgres://root01:FjiX2HEav00b430M7h53zLWxMyywHpWN@dpg-cnd2soen7f5s73bjn6v0-a.oregon-postgres.render.com/database01_bbz3
  //Interna:postgres://root01:FjiX2HEav00b430M7h53zLWxMyywHpWN@dpg-cnd2soen7f5s73bjn6v0-a/database01_bbz3

const client = new Client({ connectionString: connectionString,ssl:true },);

const conectar = () => {
  client
    .connect()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((e) => console.log(e));
};

export { client };
export default conectar;
