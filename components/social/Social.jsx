import Link from "next/link";

const Social = ({ items = [] }) => {
  return (
    <>
      {items?.map(([Item, url], i) => (
        <Link key={i} href={url} className="m-1 oval-icon d-flex justify-content-center align-items-center">
          <Item />
        </Link>
      ))}
    </>
  );
};

export default Social;