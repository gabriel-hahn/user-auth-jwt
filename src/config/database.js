module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
