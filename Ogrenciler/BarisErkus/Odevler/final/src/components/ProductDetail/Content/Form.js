"use client";
import { filterColors } from "@/common/filterColors";
import ColorOption from "@/components/ColorOption";
import ProductCountButton from "@/components/ProductCountButton";
import SizeButton from "@/components/SizeButton";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "@/lib/notify";
import { addProductToLocalCart } from "@/redux/slices/cartSlice";

const initialValues = {
  color: "",
  size: "",
  count: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "color":
      return { ...state, color: action.payload };
    case "size":
      return { ...state, size: action.payload };
    case "count":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

const Form = ({ productId, dbSizes, stock }) => {
  const t = useTranslations("ProductDetail");
  const [state, dispatch] = useReducer(reducer, initialValues);
  const { user } = useSelector((state) => state.user);
  const dispatchRedux = useDispatch();

  const sizes = {
    xxsmall: t("xxs"),
    xsmall: t("xs"),
    small: t("s"),
    medium: t("m"),
    large: t("l"),
    xlarge: t("xl"),
    xxlarge: t("xxl"),
    "3xlarge": t("3xl"),
    "4xlarge": t("4xl"),
  };

  const setColor = (color) => {
    dispatch({ type: "color", payload: color });
  };
  const setSize = (size) => {
    dispatch({ type: "size", payload: size });
  };
  const setCount = (count) => {
    dispatch({ type: "count", payload: count });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      notify(t("noLoggedIn"), "error");
      return;
    }
    if (!state.color || !state.size || !state.count || state.count < 1) {
      notify(t("paramaterError"), "error");
      return;
    }
    if (stock < state.count) {
      notify(t("stockError"), "error");
      return;
    }
    try {
      const id = Date.now().toString();
      dispatchRedux(
        addProductToLocalCart({ id, ...state, productId }, user.uid)
      );
      notify(t("productAdded"), "success");
    } catch {
      notify(t("unExpectedError"), "error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-2 pb-4 border-bottom">
        <h5 className="fs-6 text-secondary">{t("selectColors")}</h5>
        <div className="d-flex flex-wrap mt-3">
          {Object.entries(filterColors).map(([colorName, color]) => (
            <ColorOption
              key={color}
              name="color"
              value={colorName.toLowerCase()}
              color={color}
              selected={state.color === colorName.toLowerCase()}
              onClick={() => setColor(colorName)}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 pb-4 border-bottom">
        <h5 className="fs-6 text-secondary">{t("chooseSize")}</h5>
        <div className="d-flex flex-wrap mt-3">
          {Object.entries(sizes).map(([value, name]) => {
            if (dbSizes.includes(value)) {
              return (
                <SizeButton
                  key={value}
                  type="button"
                  name="size"
                  value={value}
                  selected={state.size === value}
                  onClick={() => setSize(value)}
                >
                  {name}
                </SizeButton>
              );
            }
          })}
        </div>
      </div>
      <div className="mt-4">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
          <ProductCountButton count={state.count} setCount={setCount} />
          <Button
            type="submit"
            theme="dark"
            className="m-0 bg-black text-white"
          >
            {t("addToCart")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
