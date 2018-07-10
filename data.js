import axios from 'axios'
//一维数组
export var getCaiList = () =>{
  return axios.get('../../static/cai.json').then((res)=>{
    return res.data;
  })

}


 // 多维数组
export var getCaiList1 = () =>{
  return axios.get('../../static/cai1.json').then((res)=>{
    return res.data;
  })

}
