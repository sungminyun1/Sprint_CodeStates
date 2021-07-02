const flights = require('../repository/flightList');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: (req, res) => {
    //TODO:
    console.log(req.query);

    const flight_uuid = req.query.flight_uuid;
    const phone = req.query.phone;

    if(flight_uuid) {
      return res.status(200).json(booking.filter((el) => el.flight_uuid === flight_uuid));
    }

    if(phone) {
      const filterByBooking = booking.filter((el) => el.phone === phone);
      if(filterByBooking.length > 0) {
        return res.status(200).json(filterByBooking[filterByBooking.length-1]);
      } else {
        return res.status(404).json([]);
      }
    }

    return res.status(200).json(booking);
  },

  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: (req, res) => {
    //TODO: 
    console.log(req.body);

    const {flight_uuid, name, phone} = req.body;

    const post = {
      flight_uuid: flight_uuid,
      name: name,
      phone: phone
    };

    booking.push(post);
    
    return res.status(201).json({ message: 'Create success!' });
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: (req, res) => {
    //TODO: 
    console.log(req.query);

    const phone = req.query.phone;

    if(phone) {
      booking = booking.filter((el) => el.phone !== phone);
      return res.status(200).json(booking);
    } else {
      return res.status(404).send('Please Write Phone Number!');
    }
  }
};
