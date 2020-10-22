import axios from "../../Axios/Axios";

export function fetchDashboardData() {
  return (dispatch) => {
    dispatch(fetchDashboardDataBegin());
    return axios
      .get("/dashboard.json")
      .then((json) => {
        dispatch(fetchDashboardDataSuccess(json.data));
        return json.data;
      })
      .catch((error) => dispatch(fetchDashboardDataFailure(error)));
  };
}

export const FETCH_DASHBOARD_BEGIN = "FETCH_DASHBOARD_BEGIN";
export const FETCH_DASHBOARD_SUCCESS = "FETCH_DASHBOARD_SUCCESS";
export const FETCH_DASHBOARD_FAILURE = "FETCH_DASHBOARD_FAILURE";

export const fetchDashboardDataBegin = () => ({
  type: FETCH_DASHBOARD_BEGIN,
});

export const fetchDashboardDataSuccess = (dashboardData) => ({
  type: FETCH_DASHBOARD_SUCCESS,
  payload: dashboardData,
});

export const fetchDashboardDataFailure = (error) => ({
  type: FETCH_DASHBOARD_FAILURE,
  payload: { error },
});
