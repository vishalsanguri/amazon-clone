import { useState } from "react";

export default function useContext() {
  const [current, setCurrent] = useState({
    desc: "",
    id: "",
    imgUrl: "",
    name: "",
    price: "",
    stars: "",
  });
  return [current, setCurrent];
}
