import http from "../../helper/http";
import RNFetchBlob from "rn-fetch-blob";
const { REACT_APP_URL } = process.env;

export const getVehicleDetail = id => {
  return async dispatch => {
    dispatch({
      type: "VEHICLES_CLEAR"
    });
    try {
      const { data } = await http().get(`/vehicles/${id}`);
      dispatch({
        type: "GET_VEHICLE_DETAIL",
        payload: data.result,
      });
    } catch (e) {
      dispatch({
        type: "VEHICLES_ERROR",
        payload: e.response.data.message,
      });
    }
  };
};

export const updateVehicle =
  (
    id,
    token,
    name,
    color,
    loc,
    price,
    stock,
    capacity,
    reservationBefore,
    isAvailable,
    isPrepay,
    paymentMethod,
    categoryId,
    image) => {
    return async dispatch => {
      try {
        dispatch({
          type: "PAGES_LOADING",
        });
        if (image) {
          const { data } = await RNFetchBlob.fetch(
            "PATCH",
            `${REACT_APP_URL}/vehicles/${id}`,
            {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            [
              {
                name: "image",
                filename: image.fileName,
                type: image.type,
                data: RNFetchBlob.wrap(image.uri),
              },
              { name: "name", data: name },
              { name: "color", data: color },
              { name: "loc", data: loc },
              { name: "price", data: price },
              { name: "stock", data: stock },
              { name: "capacity", data: capacity },
              { name: "reservationBefore", data: reservationBefore },
              { name: "isAvailable", data: isAvailable },
              { name: "isPrepay", data: isPrepay },
              { name: "paymentMethod", data: paymentMethod },
              { name: "categoryId", data: categoryId },
            ],
          );
          dispatch({
            type: "UPDATE_VEHICLE_DETAIL",
            payload: JSON.parse(data)
          });
        } else {
          const { data } = await RNFetchBlob.fetch(
            "PATCH",
            `${REACT_APP_URL}/vehicles/${id}`,
            {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            [
              { name: "name", data: name },
              { name: "color", data: color },
              { name: "loc", data: loc },
              { name: "price", data: price },
              { name: "stock", data: stock },
              { name: "capacity", data: capacity },
              { name: "reservationBefore", data: reservationBefore },
              { name: "isAvailable", data: isAvailable },
              { name: "isPrepay", data: isPrepay },
              { name: "paymentMethod", data: paymentMethod },
              { name: "categoryId", data: categoryId },
            ],
          );
          dispatch({
            type: "UPDATE_VEHICLE_DETAIL",
            payload: JSON.parse(data)
          });
        }
      } catch (e) {
        // payload = JSON.parse(e.message);
        console.log(e.message);
      }
    };
  };