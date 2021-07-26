const db = require('../db');

module.exports = {
  orders: {
    get: (userId, callback) => {
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      const sql = `select orders.id, orders.created_at, orders.total_price, items.name, items.price, items.image, order_items.order_quantity
      from orders
      join order_items on orders.id = order_items.order_id
      join items on order_items.item_id = items.id
      where orders.user_id = ${userId}`
      db.query(sql, function(err, result) {
        if(err) {
          callback(err, null);
        }
        callback(null, result);
      })
    },
    post: (userId, orders, totalPrice, callback) => {
      // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
      const sql1 = `insert into orders (user_id, total_price) values (${userId}, ${totalPrice})`
      db.query(sql1, (err, result) => {
        if(err) {
          callback(err, null);
        } else {
          const sql2 = `insert into order_items (order_id, item_id, order_quantity) values ?`
          const id = result.insertId;
          const params = orders.map((el) => [id, el.itemId, el.quantity]);
          db.query(sql2, [params], (err, result) => {
            if(err) {
              callback(err, null);
            }
            callback(null, result);
          })
        }
      })
    }
  },
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const sql = `select * from items`
      db.query(sql, (err, result) => {
        if(err) {
          callback(err, null);
        }
        callback(null, result);
      })
    }
  }
};
