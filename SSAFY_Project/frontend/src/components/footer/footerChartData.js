

async function callData() {
  let today = new Date();
  let tenbefore = new Date();
  tenbefore.setDate(today.getDate() - 10);
  console.log(tenbefore);
  let month = ("" + (today.getMonth() + 1)).length == 1 ? ("0" + (today.getMonth() + 1)) : (today.getMonth() + 1)
  let date = ("" + (today.getDate())).length == 1 ? ("0" + (today.getDate())) : (today.getDate())
  let beforemonth = ("" + (tenbefore.getMonth() + 1)).length == 1 ? ("0" + (tenbefore.getMonth() + 1)) : (tenbefore.getMonth() + 1)
  let beforedate = ("" + (tenbefore.getDate())).length == 1 ? ("0" + (tenbefore.getDate())) : (tenbefore.getDate());
  let val = `${today.getFullYear()}${month}${date}`;
  let beforeval = `${tenbefore.getFullYear()}${beforemonth}${beforedate}`;
  console.log(val)
  let getData = await fetch(`http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${process.env.VUE_APP_CORONAAPI}&pageNo=1&numOfRows=10&startCreateDt=${beforeval}&endCreateDt=${val}`)
  let data = await getData.text();
  let data2 = await (new window.DOMParser()).parseFromString(data, "text/xml")
  let data3 = await data2.getElementsByTagName("item");
  let arr = [];
  let deatharr = [];
  let datearr = [];
  data3.forEach((test) => {
    console.log(test)
    console.log(test.getElementsByTagName('decideCnt')[0].innerHTML);
    deatharr.push(test.getElementsByTagName('decideCnt')[0].innerHTML);
    datearr.push(test.getElementsByTagName('stateDt')[0].innerHTML);
  })
  deatharr = deatharr.sort((e1, e2)=> e1-e2);
  datearr = datearr.sort((e1, e2)=> e1-e2);
  arr.push(deatharr);
  arr.push(datearr);
  // console.log(data3);
  return arr;
}

let footerChartData = {

  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "코로나 누적 확진자 수 ",
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
    ]
  },
  options: {
 
  }
};

(async function () {
  let ok = await callData();

  console.log(ok);

  if (ok) {
    footerChartData.data.datasets[0].data = ok[0];
    footerChartData.data.labels = ok[1];
  }
}())

export default footerChartData;
