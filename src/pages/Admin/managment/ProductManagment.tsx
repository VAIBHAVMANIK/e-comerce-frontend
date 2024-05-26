import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const ProductManagment = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [stock, setStock] = useState<number>(1);
  const [price, setPrice] = useState<number>(1000);
  const [photo, setPhoto] = useState<string>(
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
  );
  const [nameUpdater, setNameUpdater] = useState<string>(name);
  const [stockUpdater, setStockUpdater] = useState<number>(price);
  const [priceUpdater, setPriceUpdater] = useState<number>(stock);
  const [photoUpdater, setPhotoUpdater] = useState<string>(photo);

  const imgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdater(reader.result);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdater);
    setPrice(priceUpdater);
    setPhoto(photoUpdater);
    setStock(stockUpdater);
  };

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="product-manage">
        <section className="preview">
          <strong>ID-jsncdkjcnds</strong>
          <img src={photo} alt="Product" />
          <h3>{name}</h3>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>${price}</h3>
        </section>

        <article className="manage-Product">
          <div className="form-container">
            <h2>Product Manage</h2>
            <form onSubmit={submitHandler}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={nameUpdater}
                  placeholder="Name of Product"
                  required={true}
                  onChange={(e) => setNameUpdater(e.target.value)}
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  value={priceUpdater}
                  placeholder="Price"
                  required={true}
                  onChange={(e) => setPriceUpdater(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Stock</label>
                <input
                  type="number"
                  value={stockUpdater}
                  placeholder="Stock"
                  required={true}
                  onChange={(e) => setStockUpdater(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Photo</label>
                <input
                  type="file"
                  placeholder="photo"
                  required={true}
                  onChange={imgHandler}
                />
              </div>
              {photoUpdater && (
                <div className="img-box">
                  <img src={photoUpdater} alt="New-Product" />
                </div>
              )}
              <button type="submit">Update</button>
            </form>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ProductManagment;
