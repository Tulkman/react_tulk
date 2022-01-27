import axiosService from '../axios.service/axios.service';
import {urls} from '../urls/urls';

const postsService = {
    getAll: () => axiosService.get(urls.posts).then(item => item.data),
}
export default postsService