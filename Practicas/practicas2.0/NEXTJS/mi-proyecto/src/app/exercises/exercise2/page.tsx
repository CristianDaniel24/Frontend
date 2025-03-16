function Product({ name, inCart }: { name: string; inCart: boolean }) {
  return (
    <li className="product">{inCart ? <del>{name + " 🛒"}</del> : name}</li>
  );
}

export default function ShoppingCart() {
  return (
    <section className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg text-black">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Carrito de compras
      </h1>
      <ul className="space-y-2">
        <Product inCart={true} name="Mouse" />
        <Product inCart={false} name="Monitor" />
        <Product inCart={false} name="Teclado" />
      </ul>
    </section>
  );
}
