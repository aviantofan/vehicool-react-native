/*eslint no-undef: "error"*/
import RNFetchBlob from 'rn-fetch-blob';
const { REACT_APP_URL } = process.env;
// import http from '../../helper/http'
// import qs from 'qs'

// export const addVehicle = (token, dataVehicle) => {
//   return async dispatch => {
//     try {
//       const { data } = await http(token).post('/vehicles', qs.stringify(dataVehicle))
//       dispatch({
//         type: 'CLEAR_VEHICLES',
//       })
//       dispatch({
//         type: 'ADD_VEHICLE',
//         payload: data.result,
//       })
//     } catch (e) {
//       dispatch({
//         type: 'VEHICLES_ERROR',
//         payload: e.response.data.message,
//       })
//     }
//   }
// }
export const addVehicle = (
  token,
  name,
  color,
  loc,
  isAvailable,
  capacity,
  categoryId,
  reservationBefore,
  paymentMethod,
  price,
  stock,
  image) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'PAGES_LOADING',
      });
      const { data } = await RNFetchBlob.fetch(
        'POST',
        `${REACT_APP_URL}/vehicles`,
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'image',
            filename: image.fileName,
            type: image.type,
            data: RNFetchBlob.wrap(image.uri),
          },
          { name: 'name', data: name },
          { name: 'color', data: color },
          { name: 'loc', data: loc },
          { name: 'isAvailable', data: isAvailable },
          { name: 'capacity', data: capacity },
          { name: 'categoryId', data: categoryId },
          { name: 'reservationBefore', data: reservationBefore },
          { name: 'paymentMethod', data: paymentMethod },
          { name: 'price', data: price },
          { name: 'stock', data: stock },
        ],
      );
      dispatch({
        type: 'ADD_VEHICLE',
        payload: JSON.parse(data)
      });
    } catch (e) {
      payload = JSON.parse(e.response.data.message); // eslint-disable-line
    }
  };
};