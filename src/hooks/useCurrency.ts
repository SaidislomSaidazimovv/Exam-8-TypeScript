import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../features/currencySlice";

const useCurrency = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const changeCurrency = (newCurrency: string) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setCurrency(newCurrency));
      setIsLoading(false);
    }, 500);
  };

  return { isLoading, changeCurrency };
};

export default useCurrency;
