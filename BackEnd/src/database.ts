import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});

export async function syncDatabase() {
  try {
    await sequelize.sync({force:true}); // Sincroniza los modelos con la base de datos existente
    console.log("Tablas sincronizadas correctamente");
  } catch (error) {
    console.error("Error al sincronizar las tablas:", error);
  }
}

export default sequelize;
