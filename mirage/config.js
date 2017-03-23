const orders = [
  {
    "id": 5433,
    "customer": "Jonh Smith",
    "net_value": "2342789",
    "description": "John asked us to deliver his order as soon as posible",
    "urgent": true
  },
  {
    "id": 91234,
    "customer": "Adam Małysz",
    "net_value": "453213",
    "description": "The skies can be delivered no later than September",
    "urgent": false
  },
  {
    "id": 5433,
    "customer": "Jonh Smith",
    "net_value": "2342789",
    "description": "John asked us to deliver his order as soon as posible",
    "urgent": true
  },
  {
    "id": 91234,
    "customer": "Adam Małysz",
    "net_value": "453213",
    "description": "The skies can be delivered no later than September",
    "urgent": false
  },
  {
    "id": 5433,
    "customer": "Jonh Smith",
    "net_value": "2342789",
    "description": "John asked us to deliver his order as soon as posible",
    "urgent": true
  },
  {
    "id": 91234,
    "customer": "Adam Małysz",
    "net_value": "453213",
    "description": "The skies can be delivered no later than September",
    "urgent": false
  }
];

export default function() {



  this.get('/orders', function () {
    return orders;
  });

  this.post('/orders', function () {

    let body;

    try {
      body = this.normalizedRequestAttrs();
    } catch (e) {
      body = {};
    }


    const newOrder = {
      "id": Math.floor(Math.random() * 2000 + 1000),
      "customer": body.customer || "",
      "net_value": body.net_value || 0,
      "description": body.description || "",
      "urgent": Math.floor(Math.random() * 2000 + 1000) % 2 === 0
    };

    orders.push(newOrder);

    return newOrder;


  });

  this.get('/orders/:id', function (schema, { params: { id } }) {
    return {
      "id": id,
      "manifest": [
        {
          "item_id": 4321,
          "description": "Fisher N00915",
          "qty": 6,
          "net_price": 1200
        },
        {
          "item_id": 7321,
          "description": "Meininger jumpsuit 146/black",
          "qty": 6,
          "net_price": 200
        },
        {
          "item_id": 4321,
          "description": "Fisher N00915",
          "qty": 6,
          "net_price": 1200
        },
        {
          "item_id": 7321,
          "description": "Meininger jumpsuit 146/black",
          "qty": 6,
          "net_price": 200
        },
        {
          "item_id": 4321,
          "description": "Fisher N00915",
          "qty": 6,
          "net_price": 1200
        }

      ]
    };
  });


}
