import { Model, DataTypes } from "sequelize";
import sequelize from "./database";

// Modelo de noticias
class News extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
}

// Modelo de comentarios
class Comment extends Model {
  public id!: number;
  public content!: string;
}

News.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "news",
    sequelize,
    timestamps: false,
  }
);

Comment.init(
  {
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    newsId: {
      // Agrega esta línea
      type: DataTypes.INTEGER, // Asegúrate que sea el tipo de dato correcto (integer)
      allowNull: false,
    },
  },
  {
    tableName: "comments",
    sequelize,
    timestamps: false,
  }
);

export { News, Comment };
