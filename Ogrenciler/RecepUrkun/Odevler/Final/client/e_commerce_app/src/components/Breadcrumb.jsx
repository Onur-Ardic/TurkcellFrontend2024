import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Breadcrumb = async ({
  category,
  gender,
  activeCategory,
  cartPage = "",
}) => {
  const t = await getTranslations("Breadcrumb");
  return (
    <nav aria-label="breadcrumb" className="mb-md-4_75 mb-3_5 mt-3_5 mt-md-4">
      <ol className="breadcrumb m-0">
        <li className="breadcrumb-item">
          <Link href="/">{t("Home")}</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="/">
            {activeCategory ? activeCategory : cartPage ? "Cart" : t("Shop")}
          </Link>
        </li>
        {gender && (
          <li className="breadcrumb-item">
            <Link href="#">{gender}</Link>
          </li>
        )}
        {category && (
          <li className="breadcrumb-item active" aria-current="page">
            {category}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
