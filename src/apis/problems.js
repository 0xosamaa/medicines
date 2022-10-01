import axios from 'axios';

const medicines =  axios.create({
	baseURL: 'http://run.mocky.io/v3/a78af611-3af6-481c-98a0-ba04a5f7ce70'
});

export default medicines;