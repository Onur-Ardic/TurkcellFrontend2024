import { Link } from "@/navigation";

const Breadcrumb = ({ path }) => {
  return (
    <nav aria-label="breadcrumb" className="mt-4 mb-5">
      <ol className="breadcrumb">
        {path.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
