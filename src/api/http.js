import axios from 'axios'

export const http = ({
    url,
    params,
    data,
    method
}) => {
    return new Promise((resolve, reject) => {
        axios({
                url,
                params,
                data,
                method
            }).then(src => resolve(src))
            .catch(error => reject(error));
    })
}