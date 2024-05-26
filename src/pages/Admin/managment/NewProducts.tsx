import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const NewProducts = () => {
  const [name, setName] = useState<string>("");
  const [stock, setStock] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [photo, setPhoto] = useState<string>("");

  const imgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <article className="new-Product">
          <h2>New Product</h2>
          <div className="form-container">
            <form>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Name of Product"
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  value={price}
                  placeholder="Price"
                  required={true}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Stock</label>
                <input
                  type="number"
                  value={stock}
                  placeholder="Stock"
                  required={true}
                  onChange={(e) => setStock(Number(e.target.value))}
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
              {photo && (
                <div className="img-box">
                  <img src={photo} alt="New-Product" />
                </div>
              )}
              <button type="submit">Create</button>
            </form>
          </div>
        </article>
      </main>
    </div>
  );
};

export default NewProducts;
