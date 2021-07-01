const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    //TODO: 
    console.log(req.query);

    const departure_times = req.query.departure_times;
    const arrival_times = req.query.arrival_times;
    const destination = req.query.destination;
    const departure = req.query.departure;

    if(departure_times && arrival_times) {
      return res.status(200).json(flights.filter((el) => el.departure_times === departure_times && el.arrival_times === arrival_times));
    }

    if(departure && destination) {
      return res.status(200).json(flights.filter((el) => el.departure === departure && el.destination === destination));
    }

    return res.status(200).json(flights);
  },
  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    //TODO: 
    console.log(req.params);
    
    const id = req.params.id;
    
    const findData = flights.filter((el) => el.uuid === id);

    if(findData.length > 0) {
      return res.status(200).json(findData);
    } else {
      return res.status(404).send('Not Found!');
    }
    
  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    //TODO: 
    console.log(req.params);
    console.log(req.body);

    const id = req.params.id;
    let data = req.body;

    for(let i=0; i<flights.length; i++) {
      if(flights[i].uuid === id) {
        data = {
          ...flights[i],
          ...data
        };

        flights[i] = data;
      }
    }
    
    return res.status(200).json(data);
  }
};
