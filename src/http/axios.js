import axios from 'axios';

//进行默认设置;**注意不要写错:defaults的s
axios.defaults.timeout = 5000; //发送请求后 5秒内没有收到回应就报错
axios.defaults.baseURL = 'https://api.github.com'; //根地址


//axios的请求拦截，在每次使用axios如get时会触发
axios.interceptors.request.use( //处理方法相当于promise中的then(function(){处理resolve},function(){处理reject})
	config => {
        console.log('请求数据:',config);
		return config;
	},
	err => { //如果发生错误，调用reject，
		return Promise.reject(err)
	})

//axios的返回拦截，返回数据时会触发
axios.interceptors.response.use(
	response => {
        console.log('返回数据:',response);
		return response
	},
	err => {
        console.log('err:',err);
		return Promise.reject(err)
	})

//向外暴露，自己配置好的axios
export default axios