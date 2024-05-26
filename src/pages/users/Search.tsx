import { useEffect, useState } from "react";
import Header from "../../components/header";
import ProductCard from "../../components/users/ProductCard";
import macbook from "../../assets/mbp-spacegray-select-202206-removebg-preview_1.jpg";
import iphone from "../../assets/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [page, setPage] = useState(1);
  const isPrevPage = false;
  const isNextPage = true;
  const addToCart = () => {
    console.log("add to cart");
  };

  return (
    <div className="main-container">
      <Header />
      <div className="search-container">
        <aside className="search-filters">
          <h2>Filters</h2>
          <div>
            <h4>Sort</h4>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">None</option>
              <option value="asc">Price (Low to High)</option>
              <option value="des">Price (High to Low)</option>
            </select>
          </div>
          <div>
            <h4>Max Price :₹{maxPrice || ""}</h4>
            <input
              type="range"
              min={100}
              max={100000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <h4>Category</h4>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">None</option>
              <option value="sample1">Sample 1</option>
              <option value="sample 2">Sample 2(High to Low)</option>
            </select>
          </div>
        </aside>
        <main>
          <div className="product-page">
            <ProductCard
              productId={"41fex"}
              photo={macbook}
              name={"MacBook"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={macbook}
              name={"MacBook"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
            <ProductCard
              productId={"41fex"}
              photo={iphone}
              name={"iPhone"}
              price={120000}
              stock={1}
              handler={addToCart}
            />
          </div>
          <article>
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={!isPrevPage}
            >
              Prev
            </button>
            <span>
              {page} of {4}
            </span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={!isNextPage}
            >
              Next
            </button>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Search;
