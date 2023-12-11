// This is a React component that renders a minimal navigation bar.
// It imports necessary dependencies and uses the useState and useEffect hooks.
// The component receives an array of items as props and maps through it to render navigation links.
// The component is conditionally rendered based on the mounted state.

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaHome } from "react-icons/fa";

const MinimalBar = (props) => {
  const items = props.items;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return (
      <div className="" style={{ backgroundColor: "var(--bs-inner-color)" }}>
        <ul className="d-flex justify-content-around mini-nav">
          {items.map((item, index) => (
            <li key={index} className="px-4 mini-padding">
              <Link
                className="p-2 line-clamp-1"
                href={item.link}
                style={{
                  color: "var(--head-color)",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default MinimalBar;
