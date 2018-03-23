import "isomorphic-fetch";

// Actions
const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

const initialState = {
    banners: [],
};

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS_SUCCESS:
            return { ...state, banners: action.payload };

        default:
            return state;
    }
}

// Action Creators
const requestBanners = () => ({ type: FETCH_NEWS_REQUEST });
const receivedBanners = banners => ({ type: FETCH_NEWS_SUCCESS, payload: banners });
const bannersError = () => ({ type: FETCH_NEWS_FAILURE });

export const fetchBanners = () => (dispatch) => {
    dispatch(requestBanners());
    return fetch("http://api.staging.itv.restr.im:8081/api/v2/admin/banners")
        .then(response => response.json())
        .then(({ items }) => dispatch(receivedBanners(items)))
        .catch(err => dispatch(bannersError(err)));
};
