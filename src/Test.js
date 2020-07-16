import React, {useState} from 'react';

import {request} from './util/request';

export default function Test() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onRequest = async () => {
    try {
      setLoading(true);
      const url = '/invoicing/invoices?page=3&page_size=4&total_count_required=true';
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_PAYPAL_TOKEN}`
      };
      const res = await request({url, headers});
      const body = await res.json();
      console.log(body);
    } catch(e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <header class="card-header">
        <p class="card-header-title">
          Send test request
        </p>
        <span class="card-header-icon" aria-label="more options">
          <button
            onClick={onRequest}
            className={`button${loading ? ' is-loading' : ''}`}>Send test request</button>
        </span>
      </header>
      <div className="content">
        {data}
      </div>
    </div>
  );
}