import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: 'Valdivia'},
  headers: {
    'X-RapidAPI-Key': '7b81b72228mshcf22ecf1a65c3e3p11720djsn8e421da9f90a',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}