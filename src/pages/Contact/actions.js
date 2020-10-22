import axios from "../../Axios/Axios";

export function fetchContactData() {
  return (dispatch) => {
    dispatch(fetchContactDataBegin());
    return axios
      .get("/contact.json")
      .then((json) => {
        console.log(json.data())
        dispatch(fetchContactDataSuccess(json.data));
        return json.data;
      })
      .catch((error) => dispatch(fetchContactDataFailure(error)));
  };
}

export const FETCH_CONTACT_BEGIN = "FETCH_CONTACT_BEGIN";
export const FETCH_CONTACT_SUCCESS = "FETCH_CONTACT_SUCCESS";
export const FETCH_CONTACT_FAILURE = "FETCH_CONTACT_FAILURE";

export const fetchContactDataBegin = () => ({
  type: FETCH_CONTACT_BEGIN,
});

export const fetchContactDataSuccess = (contactData) => ({
  type: FETCH_CONTACT_SUCCESS,
  payload: contactData,
});

export const fetchContactDataFailure = (error) => ({
  type: FETCH_CONTACT_FAILURE,
  payload: { error },
});
