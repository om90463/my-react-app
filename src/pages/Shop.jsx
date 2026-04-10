import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import axios from "../common/UserAxios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [subCategoriesChecked, setSubCategoriesChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  const { id } = useParams();

    const getCategory = async () => {
    try {
      const { message, success, data } = await axios.get(`/home/get-category/${id}`);
      if (success) {
        setCategory(data);
      }
    } catch (error) {
      console.error(error?.message || "something went wrong");
    }
  };
  const getProducts = async () => {
    setLoading(true);
    try {
      let search = [];
      let searchParams = "";
      search.push(["category", id]);
      if (subCategoriesChecked.length > 0) {
        search.push(["subCategory", subCategoriesChecked]);
      }
      if (brandChecked.length > 0) {
        search.push(["brand", brandChecked]);
      }
      if (price) {
        search.push(["price", price]);
      }
      if (search.length > 0) {
        searchParams = new URLSearchParams(search);
      }
      const { message, success, data } = await axios.get(
        `/home/get-product?${searchParams}`,
      );
      if (success) {
        setProducts(data);
      }
    } catch (error) {
      console.error(error?.message || "something went wrong");
    }finally {
      setLoading(false)
    }
  };
  const getSubCategory = async () => {
    try {
      const { message, success, data } = await axios.get(
        "/home/get-sub-category",
        {
          params: {
            category_id: id,
          },
        },
      );
      if (success) {
        setSubCategories(data);
      }
    } catch (error) {
      console.error(error?.message || "something went wrong");
    }
  };
  const getBrands = async () => {
    try {
      const { message, success, data } = await axios.get("/home/get-brand");
      if (success) {
        setBrands(data);
      }
    } catch (error) {
      console.error(error?.message || "something went wrong");
    }
  };

  const handleSubCategory = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSubCategoriesChecked((pre) => [...pre, value]);
    } else {
      setSubCategoriesChecked(subCategoriesChecked.filter((id) => id != value));
    }
  };
  const handleBrand = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setBrandChecked((pre) => [...pre, value]);
    } else {
      setBrandChecked(brandChecked.filter((id) => id != value));
    }
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  }
  const resetFilters = () => {
    setBrandChecked([])
    setSubCategoriesChecked([])
    setPrice(null)
  }

  useEffect(() => {
    getBrands();
    getSubCategory();
    getCategory();
     setBrandChecked([])
    setSubCategoriesChecked([])
    setPrice(null)
  }, [id]);
  useEffect(() => {
    getProducts();
  }, [id, subCategoriesChecked, brandChecked, price]);
  return (
    <Layout>
      {/* Bredcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex items-center gap-x-1 text-sm">
          <Link>Home</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Shop</Link>
          <Link className="font-bold">{category.name}</Link>
        </div>
      </div>
      {/* Title */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400">{category.name}</div>
      </div>
      {/* Main Container */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto mt-5">
        <div className="grid grid-cols-12 gap-5">
          {/* sidebar */}
          <div className="col-span-12 lg:col-span-2 pb-4">
            <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-3">
              <span className="text-2xl font-bold">Filters</span>
              <span className="font-semibold cursor-pointer" onClick={()=> resetFilters()}>Clear</span>
            </div>
            {/* category filter */}
            <div className="font-bold pt-2 mb-2">Sub Category</div>
            {subCategories &&
              subCategories.map((subCategory) => {
                return (
                  <div
                    key={subCategory._id}
                    className="flex items-center space-x-2 mb-1"
                  >
                    <input
                      type="checkbox"
                      id={subCategory._id}
                      value={subCategory._id}
                      onChange={(e) => handleSubCategory(e)}
                      checked={subCategoriesChecked.includes(subCategory._id)}
                      className="w-4 h-4 border border-gray-400"
                    />
                    <span>{subCategory.name}</span>
                  </div>
                );
              })}
            {/* brand filter */}
            <div className="font-bold pt-4 mb-2">Brands</div>
            {brands &&
              brands.map((brand) => {
                return (
                  <div
                    key={brand._id}
                    className="flex items-center space-x-2 mb-1"
                  >
                    <input
                      type="checkbox"
                      id={brand._id}
                      value={brand._id}
                      onChange={(e) => handleBrand(e)}
                      checked={brandChecked.includes(brand._id)}
                      className="w-4 h-4 border border-gray-400"
                    />
                    <span>{brand.name}</span>
                  </div>
                );
              })}

            {/* price range filter*/}
            <div className="font-bold pt-4 mb-2">Price Range</div>
            <div className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                id="price-1"
                checked={price == "under-50"? true: false}
                onChange={(e)=> handlePrice(e)}
                value={`under-50`}
                className="w-4 h-4 border border-gray-400"
              />
              <span>Under $50</span>
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                onChange={(e)=> handlePrice(e)}
                id="price-2"
                value={`50-100`}
                checked={price == "50-100"? true: false}
                className="w-4 h-4 border border-gray-400"
              />
              <span>$50-$100</span>
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <input
                type="radio"
                id="price-3"
                onChange={(e)=> handlePrice(e)}
                value={`above-100`}
                 checked={price == "above-100"? true: false}
                className="w-4 h-4 border border-gray-400"
              />
              <span>Above $100</span>
            </div>
          </div>
          {/* products */}
          <div className="col-span-12 lg:col-span-10">
            {
              loading &&
              <div className="w-full flex justify-center items-center py-10 bg-gray-50">
                  <div className="text-center">
                    <h4 className="text-lg font-medium text-gray-800">Please Wait ...</h4>
                  </div>
              </div>
            }
            {
             !loading && products.length === 0  && 
              <div className="w-full flex justify-center items-center py-10 bg-gray-50">
                  <div className="text-center">
                    <h4 className="text-lg font-medium text-gray-800">No Product Found</h4>
                    <p className="text-sm text-gray-500 mt-1">Please Adjust Your Filters to see available Product</p>
                  </div>
              </div>
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              
              { !loading && products &&
                products.map((product) => {
                  return (
                    <Link to={`/product/${product._id}`} key={product._id}>
                      <div className="bg-slate-100 overflow-hidden rounded-lg">
                        {product?.gallary?.length > 0 && (
                          <img
                            className="object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110"
                            src={product?.gallary[0]?.url}
                            alt=""
                          />
                        )}
                        {product?.gallary?.length === 0 && (
                          <img
                            className="object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110"
                            src={`https://placehold.co/400x600`}
                            alt=""
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg text-gray-800 font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-base text-gray-700 font-semibold">
                          {product.discountPrice}{" "}
                          <span className="line-through text-gray-500">
                            {product.price}
                          </span>
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
