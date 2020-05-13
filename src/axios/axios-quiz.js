import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-3f729.firebaseio.com/'
})