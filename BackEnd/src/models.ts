import { Model, DataTypes } from "sequelize";
import sequelize from "./database";

// Modelo de noticias
class News extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public readonly comments?: Comment[]
}

// Modelo de comentarios
class Comment extends Model {
  public id!: string;
  public content!: string;
  public newsId!: number;
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
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    newsId: {
      // Agrega esta línea
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "comments",
    sequelize,
    timestamps: false,
  }
);

News.hasMany(Comment, {
  foreignKey: "newsId",
  onDelete: "CASCADE",
});
Comment.belongsTo(News, {
  foreignKey: "newsId",
});

export { News, Comment };
