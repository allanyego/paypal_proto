import React, { useEffect, useState, useRef } from "react";

export default function Test() {
  const [amount, setAmount] = useState(0.5);
  const [amountError, setAmountError] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [sendSuccess, setSendSuccess] = useState("");
  const amt = useRef(amount),
    amtErr = useRef(amountError);

  // Initiate order
  const createOrder = (data, actions) => {
    if (amtErr.current) {
      setNotificationVisible(true);
      return;
    }

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amt.current,
          },
          payee: {
            email_address: "sb-vxlkm2646812@personal.example.com",
          },
        },
      ],
    });
  };

  // Once the order has been approved
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const {
        purchase_units: [{ amount, shipping }],
      } = details;
      setSendSuccess(
        `Successfully sent ${amount.currency_code + amount.value} to ${
          shipping.name.full_name
        }.`
      );
    });
  };

  // Setup the buttons
  useEffect(() => {
    const paypal = window.paypal;
    if (paypal) {
      paypal
        .Buttons({
          createOrder,
          onApprove,
        })
        .render("#paypal-btn-container");
    }
  }, []);

  // Handle change and amount validation
  const onAmountChange = (event) => {
    const val = +event.target.value || 0;
    const isInvalid = val < 0.5;
    setAmountError(isInvalid);
    amtErr.current = isInvalid;

    if (!isInvalid) {
      setNotificationVisible(false);
    }

    setAmount(val);
    amt.current = val;
    console.log("Data", amount, amountError);
  };

  const onNotificationClose = () => {
    setNotificationVisible(false);
  };

  return (
    <div
      className="columns is-vcentered"
      style={{
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <div className="column is-one-third">
        {!!sendSuccess && (
          <Notification variant="is-success" onClose={() => setSendSuccess("")}>
            {sendSuccess}
          </Notification>
        )}
        {notificationVisible && (
          <Notification variant="is-danger" onClose={onNotificationClose}>
            You can send at least <strong>$0.50</strong>.
          </Notification>
        )}

        <div className="card px-3 pt-4">
          <div className="content">
            <form>
              <div className="field">
                <label className="label">Amount to send ($)</label>
                <div
                  className={`control${amountError ? " has-icons-right" : ""}`}
                >
                  <input
                    className="input"
                    type="number"
                    onChange={onAmountChange}
                    value={amount}
                    placeholder="e.g 43.55"
                  />
                  {amountError && (
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  )}
                </div>
                {amountError && (
                  <p className="help is-danger">
                    Value should be at least 0.50
                  </p>
                )}
              </div>
              <div id="paypal-btn-container"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Notification({ variant, onClose, children }) {
  return (
    <div className={`notification ${variant || ""}`}>
      <button className="delete" onClick={onClose}></button>
      {children}
    </div>
  );
}
