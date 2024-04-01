import { Link } from "react-router-dom";
import ProductItem from "./ProductItem.tsx";
import Filters from "./Filters.tsx";
import { useFilters } from "../Hooks/useFilters.tsx";
import { Products } from "../Interface/Products.tsx";
import { useCart } from "../Hooks/useCart.tsx";
import { useFav } from "../Hooks/useFav.tsx";

const SunGlasses = () => {
  const { addToCart } = useCart();
  const { addToFav, isFav } = useFav();
  const { filterSunGlasses } = useFilters();
  return (
    <>
      <Filters />
      {filterSunGlasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative w-[80%] md:w-[70%] mx-auto">
          <div className="col-span-1 md:col-span-3 text-black dark:text-white font-semibold flex flex-row items-cemter justify-between w-full text-sm md:text-base">
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <Link to={"/"} className="font-light hover:underline">
                Inicio
              </Link>
              <p>/</p>
              <p>Sol</p>
            </div>
            <div>
              Mostrando{" "}
              <span className="text-yellow-500">{filterSunGlasses.length}</span>{" "}
              productos
            </div>
          </div>
          {filterSunGlasses.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              brand={product.brand}
              price={product.price}
              image={product.image}
              stock={product.stock}
              description={product.description}
              addedToCart={() => addToCart(product as Products)}
              addedToFav={() => addToFav(product as Products)}
              isFav={isFav}
            />
          ))}
        </div>
      ) : (
        <div className="mt-32 text-white text-center">
          <h2 className="text-2xl font-semibold">
            No se encontraron productos
          </h2>
          <p className="text-lg font-light">Intenta con otros filtros</p>
        </div>
      )}
    </>
  );
};
export default SunGlasses;
