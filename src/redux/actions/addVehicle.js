/*eslint no-undef: "error"*/
import RNFetchBlob from 'rn-fetch-blob';
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
    isPrepay,
    capacity,
    categoryId,
    reservationBefore,
    price,
    qty,
    image) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'PAGES_LOADING',
            });
            const { data } = await RNFetchBlob.fetch(
                'POST',
                'http://192.168.0.101:5000/vehicles',
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
                    { name: 'isPrepay', data: isPrepay },
                    { name: 'capacity', data: capacity },
                    { name: 'categoryId', data: categoryId },
                    { name: 'reservationBefore', data: reservationBefore },
                    { name: 'price', data: price },
                    { name: 'qty', data: qty },
                ],
            );
            dispatch({
                type: 'ADD_VEHICLE',
                payload: JSON.parse(data)
            });
        } catch (e) {
            payload = JSON.parse(e.message);
        }
    };
};