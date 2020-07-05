import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
		Authorization:
			'Client-ID 6cd557a20e6577c9321ac4a4183973f67e5888dce9008770223ed01210fdbf9f'
	}

});