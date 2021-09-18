import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);
  return [cart, setCart];
}
