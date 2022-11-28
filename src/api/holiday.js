import axios from 'axios'
const defaultPath = 'https://cdn.jsdelivr.net/gh/ruyut/TaiwanCalendar/data/'
export default {
    getHoliday(year) {
        return axios.get(`${defaultPath}/${year}.json`).then(response => {
            return response.data
        })
    },


}