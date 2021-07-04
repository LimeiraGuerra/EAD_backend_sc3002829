module.exports = mongoose => {
  const Produto = mongoose.model(
    "produto",
    mongoose.Schema(
      {
        titulo: String,
        descricao: String,
        preco: Number,
        vegano: Boolean
      },
      { timestamps: true }
    )
  );
  return Produto;
};