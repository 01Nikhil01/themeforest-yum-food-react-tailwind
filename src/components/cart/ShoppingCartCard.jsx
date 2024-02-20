import { lazy } from "react";
import { LuXCircle } from "react-icons/lu";
import { currentCurrency } from "@/common";
import { calculatedPrice } from "@/helpers";
import { useShoppingContext } from "@/context";
const ProductQuantityToggler = lazy(
  () => import("./ProductQuantityToggler")
);

const ShoppingCartCard = ({item, dish }) => {
  const { name, id, images, price, sale } = dish;

  const { cartItems } = useShoppingContext();

  const quantity = cartItems.find((item) => item.dish_id == id)?.quantity ?? 1;

  const discountedPrice = calculatedPrice(dish);

  return (
    <tr>
      <td className="whitespace-nowrap px-5 py-3">
        <div className="flex items-center gap-2">
          <button>
            <LuXCircle size={20} className="text-default-400" />
          </button>
          <img
            src={images[0]}
            width={72}
            height={72}
            className="h-18 w-18"
            alt="onion"
          />
          <a
            href={`/dishes/${id}`}
            className="text-sm font-medium text-default-800"
          >
            {name}
          </a>
        </div>
      </td>
      <td className="whitespace-nowrap px-5 py-3 text-sm">
        <h4 className="text-base font-semibold text-primary">
          {currentCurrency}
          {discountedPrice}
        </h4>

        {sale && (
          <h4 className="ms-2 text-sm text-default-500 line-through">
            {currentCurrency}
            {price}
          </h4>
        )}
      </td>
      <td className="whitespace-nowrap px-5 py-3">
        <ProductQuantityToggler dish={dish} />
      </td>
      <td className="whitespace-nowrap px-5 py-3 text-center text-sm text-default-800">
        {currentCurrency}
        {discountedPrice * quantity}
      </td>
    </tr>
  );
};

export default ShoppingCartCard;