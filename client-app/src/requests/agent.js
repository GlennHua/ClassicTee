import axios from "axios";

const makeDelay = (delay) =>{
    return new Promise(
        resolve => {
            setTimeout(resolve, delay)
        }
    )
}

axios.interceptors.request.use(
    // onFulfilled
    (response) => {
        return makeDelay(2000).then(() => {
            return response
        })
    },

    // onRejected
    (error) => {
        const { message } = error
        return Promise.reject(error);
    }
)

const requests = {
    fetchSingleMockProduct: async (url) => await axios.get(url)
}

export default requests