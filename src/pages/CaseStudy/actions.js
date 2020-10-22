import axios from "../../Axios/Axios";

export function fetchViewCaseStudyData() {
  return (dispatch) => {
    dispatch(fetchViewCaseStudyBegin());
    return axios
      .get("/caseStudy.json")
      .then((json) => {
        dispatch(fetchViewCaseStudySuccess(json.data));
        return json.data;
      })
      .catch((error) => dispatch(fetchViewCaseStudyFailure(error)));
  };
}

export const FETCH_VIEWCASESTUDY_BEGIN = "FETCH_VIEWCASESTUDY_BEGIN";
export const FETCH_VIEWCASESTUDY_SUCCESS = "FETCH_VIEWCASESTUDY_SUCCESS";
export const FETCH_VIEWCASESTUDY_FAILURE = "FETCH_VIEWCASESTUDY_FAILURE";

export const fetchViewCaseStudyBegin = () => ({
  type: FETCH_VIEWCASESTUDY_BEGIN,
});

export const fetchViewCaseStudySuccess = (ViewCaseStudy) => ({
  type: FETCH_VIEWCASESTUDY_SUCCESS,
  payload: ViewCaseStudy,
});

export const fetchViewCaseStudyFailure = (error) => ({
  type: FETCH_VIEWCASESTUDY_FAILURE,
  payload: { error },
});
