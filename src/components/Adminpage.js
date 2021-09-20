import React, { useState } from "react";

const Adminpage = () => {
  const [passenger, setPassenger] = useState({
    name: "",
    email: "",
    phone: "",
    discounttype: "",
    expiryofcoupon: "",
    nextdateofjourney: "",
    uniquekey: ""
  });
  let name, value,test;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setPassenger({ ...passenger, [name]: value });
  };

  const Savetodb = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      discounttype,
      expiryofcoupon,
      nextdateofjourney,
      uniquekey
    } = passenger;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        discounttype,
        expiryofcoupon,
        nextdateofjourney,
        uniquekey
      }),
    });
    const data = await res.json();
    console.log(data);
    if(data==="pax details saved to db")
    {
        window.alert("Pax added to DB.");
    }
  };

  return (
    <>
      <h1>Add Passenger for Discount</h1>
      <form method="POST" className="adminpageformgroup">
        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="name"
            value={passenger.name}
            onChange={handleInputs}
          />
        </div>

        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="email"
            value={passenger.email}
            onChange={handleInputs}
          />
        </div>

        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Discount Type"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="discounttype"
            value={passenger.discounttype}
            onChange={handleInputs}
          />
        </div>

        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Expiry date"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="expiryofcoupon"
            value={passenger.expirydate}
            onChange={handleInputs}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary ms-1"
          onClick={Savetodb}
        >
          Click to Add Passenger in DB
        </button>
      </form>
    </>
  );
};

export default Adminpage;
