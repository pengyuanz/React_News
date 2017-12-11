import get from './fetchdata'

export default function content_data(fn,id){
  let params = {
    tn: "bdapibaiyue",
    t: "recommendinfo",
    cuid: "",
    bduss: "",
    wf: "1",
    baiduid: "7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1",
    os: "iphone",
    nids: id,
    remote_device_type: "1",
    os_type: "2",
    screen_size_width: window.innerWidth,
    screen_size_height: window.innerHeight
  };
  get(params, function(response){
    if (response.data,params) {
      // console.log(response.data)
      fn(response.data)
    } else {
      console.log(response);
    }
  })
}