import { Cookie, ingredients } from "../../domain/product";
import { hasAllergy, hasPreference } from "../../domain/user";
import { useUserStorage } from "../../services/storageAdapter";

type ToppingsProps = {
  cookie: Cookie;
};

export function Toppings({ cookie }: ToppingsProps) {
  const { user } = useUserStorage();

  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}{" "}
          {!!user && hasPreference(user, topping) && <>👍</>}{" "}
          {!!user && hasAllergy(user, topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}
