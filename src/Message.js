import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const message = new mongoose.Schema({
  room: String,
  text: String,
  user: {
    _id: String,
    name: String,
    avatar: String,
  },
  createdAt: { type: Date, default: Date.now },
  _id: String,
});

export default mongoose.model('Message', message);

// { room: '5942feb6ae61ac00277c7c04',
//   message: {
//     text: 'Yo',
//     user: {
//       _id: '590e7747f019a32200085f01',
//       first_name: 'Peyt',
//       last_name: 'Dewar',
//       email: 'psdewar2@live.com',
//       facebookId: '10208534812913920',
//       __v: 0,
//       date_created: '2017-05-07T01:24:23.736Z'
//     },
//     createdAt: '2017-06-16T19:07:44.244Z',
//     _id: '65a5d36c-4b88-4731-926f-d3cd39bcb925'
//   }
// }
