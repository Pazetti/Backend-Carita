import { DataTypes, Model, Optional } from "sequelize";
import sequelize  from "../config/database";
import { Organizacao } from "../interfaces/organizacao.interface";

type OrganizacaoCreatinalAttributes = Optional<Organizacao, "id">

export class OrganizacaoModel extends Model<Organizacao,OrganizacaoCreatinalAttributes>{
    public id!: number;
    public nome!: string;
    public cnpj!: string;
    public telefone!: string;
    public email!: string;
    public logradouro!: string;
    public numero!: number;
    public bairro!: string;
    public cidade!: string;
    public cidade!: string;


}
    id: DataTypes.INTEGER,
  nome: DataTypes.STRING,
  cnpj: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  logradouro: DataTypes.STRING,
  numero: DataTypes.INTEGER,
  bairro: DataTypes.STRING,
  cidade: DataTypes.STRING,
  estado: DataTypes.STRING,
  cep: DataTypes.STRING,
  chave_pix: DataTypes.STRING,
  site: DataTypes.STRING,
  tipo_instituicao: DataTypes.STRING,
  ano_fundacao: DataTypes.INTEGER,
  area_atuacao: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  logo: DataTypes.STRING,
  documento: DataTypes.STRING
});
