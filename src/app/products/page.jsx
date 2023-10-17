"use client";
import { useState, useEffect } from "react";
import usePostsApi from "@/service/products";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    usePostsApi.getAll().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <div className="p-4 bg-green-300 mx-auto container">
        <h1>POSTS</h1>

        <ul>
          {products.map((item) => {
            return (
              <li key={item.id} className="border p-5 bg-white my-4">
                <Link href={`/products/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Page;
