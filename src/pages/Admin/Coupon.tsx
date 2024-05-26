import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";

const Coupon = () => {
  const [size, SetSize] = useState<number>(8);
  const [prefix, SetPrefix] = useState<string>("");
  const [suffix, SetSuffix] = useState<string>("");
  const [options, SetOptions] = useState<string>("");
  const [isCopied, SetIsCopied] = useState<boolean>(false);
  const [coupon, SetCoupon] = useState<string>("");

  const createCoupon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let code: string = "";
    let middle: string = "";
    let result: string = "";
    let length: number = 0;
    const Alphabets: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numbers: string = "0123456789";
    const SpecialCharacters: string = "!@#$%^&*_+";

    if (suffix) length += Number(suffix.length);
    if (prefix) length += prefix.length;

    switch (options) {
      case "Alphabets":
        code += Alphabets;
        break;
      case "Numbers":
        code += Numbers;
        break;
      case "Alphanumeric with Symbols":
        code += SpecialCharacters + Alphabets + Numbers;
        break;
      case "Alphanumeric":
        code += Alphabets + Numbers;
        break;
      default:
        code += "";
        break;
    }

    for (let i = 0; i < size - length; i++) {
      const randomNum: number = ~~(Math.random() * code.length);
      middle += code[randomNum];
    }
    result = prefix + middle + suffix;
    SetCoupon(result);
  };

  const copy = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    SetIsCopied(true);
  };

  useEffect(() => {
    SetIsCopied(false);
  }, [coupon]);

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <div className="coupon-container">
          <div className="coupon">
            <div className="title">Create Coupon</div>
            <div className="form-container">
              <form onSubmit={createCoupon}>
                <div className="form-group">
                  <select
                    onChange={(e) => SetOptions(e.target.value)}
                    id=""
                    required={true}
                  >
                    <option value=""></option>
                    <option value="Numbers">Numbers</option>
                    <option value="Alphabets">Alphabets</option>
                    <option value="Alphanumeric">Alphanumeric</option>
                    <option value="Alphanumeric with Symbols">
                      Alphanumeric with Symbols
                    </option>
                  </select>
                  <label>Charset</label>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    min={8}
                    max={15}
                    placeholder=""
                    onChange={(e) => SetSize(Number(e.target.value))}
                    required={true}
                  />
                  <label>Code-Length</label>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder=""
                    onChange={(e) => SetPrefix(e.target.value)}
                  />
                  <label>Code-Prefix</label>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder=""
                    onChange={(e) => SetSuffix(e.target.value)}
                  />
                  <label>Code-suffix</label>
                </div>
                <div className="btn">
                  <button type="submit">Generate</button>
                </div>
              </form>
            </div>
            {coupon && (
              <div className="code-container">
                <span className="code">{coupon}</span>
                <button
                  className="btn"
                  disabled={isCopied}
                  onClick={() => copy(coupon)}
                >
                  {isCopied ? "Copied ✔️" : "Copy"}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Coupon;
