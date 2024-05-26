import { ChangeEvent, FormEvent, useState } from "react";
import Header from "../../components/header";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  let [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    setShippingAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(shippingAddress);
  };

  return (
    <div className="main-container">
      <Header />
      <div className="shipping-container">
        <main>
          <button className="btn-back" onClick={() => navigate("/cart")}>
            <BiArrowBack />
          </button>
          <form onSubmit={handleSubmit}>
            <h1>Shipping Address</h1>
            <select
              onChange={handleChange}
              required={true}
              name="country"
              value={shippingAddress.country}
            >
              <option value="">Select Your Country</option>
              <option value="India">India</option>
            </select>
            <input
              type="text"
              minLength={6}
              maxLength={6}
              placeholder="postalCode"
              name="postalCode"
              value={shippingAddress.postalCode}
              onChange={handleChange}
              required={true}
            />
            <input
              type="text"
              placeholder="State"
              value={shippingAddress.state}
              name="state"
              onChange={handleChange}
              required={true}
            />
            <input
              type="text"
              placeholder="City"
              value={shippingAddress.city}
              name="city"
              onChange={handleChange}
              required={true}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={shippingAddress.address}
              onChange={handleChange}
              required={true}
            />
            <button type="submit">Confirm And Pay Now</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Shipping;
