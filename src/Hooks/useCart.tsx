import { useContext, useEffect } from "react";
import { CartContext } from "../Context/cartContext";

interface Products {
  id: number;
  brand: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  total: number;
  countProducts: number;
  category: string;
  genre: string;
  shape: string;
}

export function useCart() {
  const {
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
    setIsOnCart,
    isOnCart,
  } = useContext(CartContext);
  const addToCart = (product: Products): Products[] => {
    setIsOnCart(true);
    const existingProduct = allProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      const newProducts = allProducts.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      setCountProducts(countProducts + 1);
      setTotal(total + product.price);
      setAllProducts(newProducts);
      return newProducts;
    } else {
      setCountProducts(countProducts + 1);
      setTotal(total + product.price);
      const newProduct = { ...product, quantity: 1 };
      setAllProducts([...allProducts, newProduct]);
      return [...allProducts, newProduct];
    }
  };
  useEffect(() => {
    let timeout: number;
    if (isOnCart) {
      timeout = setTimeout(() => {
        setIsOnCart(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isOnCart, setIsOnCart]);

  const deleteProduct = (product: Products): Products[] => {
    const newProducts = allProducts.filter((p) => p.id !== product.id);
    setTotal(total - product.price);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(newProducts);
    return newProducts;
  };

  const addProduct = (product: Products): Products[] => {
    const newProducts = allProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setCountProducts(countProducts + 1);
    setTotal(total + product.price);
    setAllProducts(newProducts);
    return newProducts;
  };

  const substractProduct = (product: Products): Products[] => {
    const newProducts = allProducts.map((p) => {
      if (p.id === product.id && p.quantity > 1) {
        setTotal(total - product.price);
        setCountProducts(countProducts - 1);
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setAllProducts(newProducts);
    return newProducts;
  };

  return {
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
    setIsOnCart,
    addToCart,
    isOnCart,
    deleteProduct,
    addProduct,
    substractProduct,
  };
}