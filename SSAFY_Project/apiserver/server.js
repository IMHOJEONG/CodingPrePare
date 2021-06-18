const express = require('express')
const axios = require('axios');
const dotenv = require('dotenv');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const app = express()
const fs = require('fs');
const mysql = require('mysql');
const screenshot = require('desktop-screenshot');
const delay = require('delay');
const download = require('image-downloader')
const sharp = require("sharp");
const port = 3000;

// 위와 같이 express와 app을 변수로 사용한다.
dotenv.config();

// 웹 크롤링 진행 코드 
const webcrawling = () => {
  
  const screen = {
    width: 640,
    height: 480
  };
  const service = new chrome.ServiceBuilder('./chromedriver.exe').build();
  chrome.setDefaultService(service);
  
  let index = 0;
  // 아파트 웹 크롤링 캡쳐 코드 
  const check = async (list) => {
    for (const data of list) {
      
      await delay(10000)
      .then(() => {
        
        let driver = new webdriver.Builder().forBrowser('chrome')
        // .setChromeOptions(new chrome.Options().headless().windowSize(screen))
        .build();
        driver.manage().setTimeouts({
          implicit: 10000,
            // 10초 
            pageLoad: 30000,
            // 30초 
            script: 30000,
            // 30초 
          }).then(() => {
            
            driver.get("https://map.naver.com/v5/");
            
            return driver.findElements(webdriver.By.className("input_search")).then((target) => {
              target.forEach((item) => {
                return item.sendKeys(`서울특별시 ` + data, webdriver.Key.ENTER).then(() => {
                  return driver.findElements(webdriver.By.className("btn_panorama")).then((viewbuttons) => {
                    viewbuttons.forEach(view => {
                      return view.sendKeys(webdriver.Key.ENTER).then(() => {
                        return driver.findElements(webdriver.By.className('address-search-polygon')).then((pointbuttons) => {
                          pointbuttons.forEach(point => {
                            
                            try {
                              point.click();
                              setTimeout(() => {
                                screenshot(`./pictures/screenshot${index}_${data}.jpg`,
                                
                                function (error, complete) {
                                  if (error) {
                                    console.log("Screenshot failed", error);
                                    
                                  }
                                  
                                  else {
                                    console.log("Screenshot succeeded");
                                  }
                                  index++;
                                  driver.close();
                                });
                              }, 5000);
                            }
                            catch (error) {
                              console.log(error);
                              driver.close();
                            }
                            
                            
                            
                          });
                        })
                        .catch(() => {
                          driver.close();
                        });
                      }).catch(() => {
                        driver.close();
                      });
                    });
                  }).catch(() => {
                    driver.close();
                  });
                });
              });
            }).catch((err) => {
              driver.close();
            });
          });
        }).catch(() => {
          driver.close();
        });;
      }
    }
    // check(["중곡동 133-9", "중곡동 133-9"]);
    
    let index2 = 0;
    
    // 안심병원 체크 목적
    const check2 = async (list) => {
      for (const data of list) {
        await delay(10000)
        .then(() => {
          
          let driver = new webdriver.Builder().forBrowser('chrome')
          // .setChromeOptions(new chrome.Options().headless().windowSize(screen))
          .build();
          driver.manage().setTimeouts({
            implicit: 10000,
            // 10초 
            pageLoad: 30000,
            // 30초 
            script: 30000,
            // 30초 
          }).then(() => {
            
            driver.get("https://map.naver.com/v5/");
            
            return driver.findElements(webdriver.By.className("input_search")).then((target) => {
              target.forEach((item) => {
                return item.sendKeys(data, webdriver.Key.ENTER).then(() => {
                  // return driver.findElement(webdriver.By.css("nm-iframe")).then((firstiframe) => {
                    // return driver.switchTo().frame(firstiframe).then(() => {
                      return driver.findElement(webdriver.By.css("#searchIframe")).then((secondframe) => {
                        
                        return driver.switchTo().frame(secondframe).then(() => {
                          return driver.findElement(webdriver.By.css('img')).then((view) => {
                            // console.log("data:", view);
                            return view.getAttribute('src').then((href) => {
                              console.log(href);
                              const options = {
                                url: href,
                                dest: `./pictures/${index2}_${data}.jpg`                // will be saved to /path/to/dest/image.jpg
                              }
                              download.image(options)
                              .then(({ filename }) => {
                                console.log('Saved to', filename);
                                index2++;  // saved to /path/to/dest/photo.jpg

                              })
                              .catch((err) => console.error(err))
                              .finally(() => {
                                driver.close();
                              })
                              
                              
                              
                            }).catch(() => {
                              driver.close();
                            });
                            
                          }).catch((error) => {
                            console.log(error)
                            driver.close();
                          });
                        }).catch((error) => {
                          console.log(error)
                          driver.close();
                        })
                      }).catch((error) => {
                        console.log(error)
                        driver.close();
                      });
                    }).catch((error) => {
                      console.log(error);
                      driver.close();
                    });
                  });
                }).catch((err) => {
                  driver.close();
                });
              }).catch((err) => {
                driver.close();
              });
            }).catch(() => {
              driver.close();
            });;
          }
        }
        
}
      
let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// 클라이언트 요청 처리
app.get('/', (req, res) => { // get 메소드 일때,
  
  let clientId = process.env.VUE_APP_CLIENTID;
  let clientSecret = process.env.VUE_APP_CLIENTSECRET;
  
  const instance = axios.create({
    baseURL: `https://openapi.naver.com/v1/search/news.json?query=${encodeURI('주택')}`,
    headers: {
      'X-Naver-Client-Id': clientId,
      'X-Naver-Client-Secret': clientSecret
    },
    timeout: 1000,
    
  })
  instance.get().then(({ data }) => {
    
    res.status(200);
    
    index = 0;
    
    data.items = data.items.map((item) => {
      
      let date = new Date(item['pubDate']);
      
      item['pubDate'] = `${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()} ${dayOfWeek[date.getDay()]}`;
      return item;
      
    });
    res.send(JSON.stringify(data));
  });
  
})


// DB 내 정보를 통해 네이버 지도 사진 웹 크롤링 데이터 수집 
const useDB = () => {
  
  // let apart_meme = {
  //   "거래금액": 'dealamount',
  //   "건축년도": 'buildyear',
  //   "년": 'dealyear',
  //   "법정동": 'dong',
  //   "아파트": 'aptname',
  //   "월": 'dealmonth',
  //   "일": 'dealday',
  //   "전용면적": 'area',
  //   "지번": 'jibun',
  //   "지역코드": 'code',
  //   "층": 'floor',
  //   '해제사유발생일': 'releaseDate',
  //   '해제여부': 'isrelease'
  // }

//   let seoulGu = {
//     '강남구': '11680',
//     '강동구': '11740',
// '강북구': '11305',
// '강서구': '11500',
// '관악구': '11620',
// '광진구': '11215',
// '구로구': '11530',
// '금천구': '11545',
// '노원구': '11350',
// '도봉구': '11320',
// '동대문구': '11230',
// '동작구': '11590',
// '마포구': '11440',
// '서대문구': '11410',
// '서초구': '11650',
// '성동구': '11200',
// '성북구': '11290',
// '송파구': '11710',
// '양천구': '11470',
// '영등포구': '11560',
// '용산구': '11170',
// '은평구': '11380',
// '종로구': '11110',
// '중구': '11140',
// '중랑구': '11260'
// }
  
  // const connection = mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password: '!!95dlfwls',
  //   database: 'happyhouse_final'
  // });

  // 2015년부터 2020년 데이터 모음
  // for(let year = 2015; year<=2020;year++){
    //   for(let month = 0 ; month <= 11 ; month++){
      //       const date = new Date(year, month);
      //       const val = date.getMonth()+1;
      //       console.log(date.getFullYear()+""+((val+"").length === 1 ? "0"+val:val));
      //       let data = date.getFullYear()+""+((val+"").length === 1 ? "0"+val:val);
  //   }
  // }

  // connection.connect();
  // if (connection.state === 'disconnected') {
  //   console.log('not connected');
  // }

  // let sqlselect = `SELECT distinct CONCAT(dong, ' ', jibun) as '주소' from apart limit 1664, 1000`;
  // let sqlselect = `select hospital.name from hospital left outer join clinic  on hospital.name = clinic.name where clinic.no is null;`;
  // let sqlselect = `select clinic.name from hospital right outer join clinic  on hospital.name = clinic.name where hospital.no is null`;
  // let sqlselect = `select * from hospital inner join clinic  on hospital.name = clinic.name where hospital.no ;
  // `;
  
  // let sqlselect = `SELECT distinct CONCAT(dong, ' ', jibun) as '주소' from apartbefore limit 0, 200`
  // let sqlselect = `SELECT distinct CONCAT(dong, ' ', jibun) as '주소' from multigenerationbefore limit 0, 200`;
  // connection.query(sqlselect, function (err, result, fields) {
  //   if (err) {
  //     console.log(err);
  //     // console.log(item);
  //   }
  //   else {
  //     result = result.map((item) => {
  //       return item['주소']
  //     })
  //     result = Object.values(result);
  //     console.log(result);
  //     check(result);
  //     // check2(result);
  //   }
  // });

  // 아파트 매매
  // let sqlapart = `INSERT INTO 
  // apart (dealamount, buildyear, dealyear,
  //   dong, aptname, dealmonth, dealday ,
  //   area, jibun, code, floor, releaseDate, isrelease)
  // VALUES (?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,?, ?, ?)`;
  
  // let sqlapart2 = `INSERT INTO 
  // apart (dealamount, buildyear, dealyear,
  //   dong, aptname, dealmonth, dealday ,
  //   area, code, floor, releaseDate, isrelease)
  // VALUES (?, ?, ?, ?, ?, ? ,? ,? ,? ,?, ?, ?)`;
  
  // Object.values(seoulGu).forEach((date) => {
  //   axios
  //   .get(`http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade?LAWD_CD=${date}&DEAL_YMD=202104&serviceKey=${process.env.APART_MEME_KEY}`)
  //   .then(({ data }) => {
  //     // console.log(data.response.body.items);
  //     let getdata = data.response.body.items['item'];
  //     getdata.forEach((item) => {
  //       // console.log(Object.values(item));
  //       let param = Object.values(item);
  //       param = param.map((val) => {
  //         if (typeof val === 'string') {
  //           return val.trim();
  //         }
  //         return val;
  //       });
  //       if (param.length === 12) {
  //         connection.query(sqlapart2,param,function(err, rows, fields) {
  //           if (err){
  //             console.log(err);
  //             console.log(item);
  //           }
  //           else{
  //             //console.log(rows.insertId);
  //           }
  //         });
  
  //       }
  //       else {
  
  //         connection.query(sqlapart,param,function(err, rows, fields) {
  //           if (err){
  //             console.log(err);
  //             console.log(item);
  //           }
  //           else{
  //             //console.log(rows.insertId);
  //           }
  //         });
  //       }
  //     });
  
  //   });
  // });
  
  
  //아파트 전월세
  // let sqlapartbefore = `INSERT INTO 
  // apartbefore (buildyear, dealyear, dong, deposit,
  //   aptname, dealmonth, rent, dealday, 
  //   area, jibun, code, floor)
  //   VALUES (?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,?, ?)`;
  
  // let sqlapartbefore2 = `INSERT INTO 
  // apartbefore (buildyear, dealyear, dong, deposit,
  //   aptname, dealmonth, rent, dealday, 
  //   area, code, floor)
  //   VALUES (?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,?)`;
  
  // Object.values(seoulGu).forEach((date) => {
  //     axios
  //     .get(`http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent?LAWD_CD=${date}&DEAL_YMD=202104&serviceKey=${process.env.APART_BEFORE_KEY}`)
  //     .then(({ data }) => {
  //       let getdata = data.response.body.items['item'];
  //       //console.log(getdata);
  //       getdata.forEach((item) => {
  //           // console.log(Object.values(item));
  //           let param = Object.values(item);
  //           param = param.map((val) => {
  //             if (typeof val === 'string') {
  //               return val.trim();
  //             }
  //             return val;
  //           });
  //           if (param.length == 11) {
  //             connection.query(sqlapartbefore2,param,function(err, rows, fields) {
  //               if (err){
  //                 console.log(err);
  //                 console.log(item);
  //               }
  //               else{
  //                 //console.log(rows.insertId);
  //               }
  //             });
  
  //           }
  //           else {
  //             connection.query(sqlapartbefore,param,function(err, rows, fields) {
  //               if (err){
  //                 console.log(err);
  //                 console.log(item);
  //               }
  //               else{
  //                 //console.log(rows.insertId);
  //               }
  //             });
  //           }
  //         });
  //     });
  // });
  
  
  // // 단독 매매 - 아직 안 됨 
  // let sqlmultifamily = `INSERT INTO 
  // multifamily (dealamount, buildyear, groundarea, dealyear,
  //   buildingarea, dong, dealmonth, dealday,
  //   type, code, releaseDate, isrelease)
  // VALUES (?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,?, ?)`;
  
  // Object.values(seoulGu).forEach((date) => {
  
  //   axios
  //     .get(`http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHTrade?LAWD_CD=${date}&DEAL_YMD=202104&serviceKey=${process.env.MULTI_FAMILY_BEFORE_KEY}`)
  //     .then(({ data }) => {
  //       // console.log(data)
  //       let getdata = data.response.body.items['item'];
  //       // console.log(getdata);
  //       getdata.forEach((item) => {
  //           // console.log(Object.values(item));
  //           let param = Object.values(item);
  //           param = param.map((val) => {
  //             if (typeof val === 'string') {
  //               return val.trim();
  //             }
  //             return val;
  //           });
  //           connection.query(sqlmultifamily,param,function(err, rows, fields) {
  //             if (err){
  //               console.log(err);
  //             }
  //             else{
  //               //console.log(rows.insertId);
  //             }
  //           });
  //         });
  //     });
  // });
  
  
  //단독 전월세
  // let sqlmultifamilybefore = `INSERT INTO 
  //   multifamilybefore (buildingarea, dealyear, dong, deposit, 
  //     dealmonth, rent, dealday, code)
  //   VALUES (?, ?, ?, ?, ?, ? ,? ,?)`;
  
  // let sqlmultifamilybefore2 = `INSERT INTO 
  //   multifamilybefore (buildyear, buildingarea, dealyear, dong, deposit, 
  //     dealmonth, rent, dealday, code)
  //   VALUES (?, ?, ?, ?, ?, ?, ? ,? ,?)`;
  
  // Object.values(seoulGu).forEach((date) => {
  
  //   axios
  //     .get(`http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHRent?LAWD_CD=${date}&DEAL_YMD=202104&serviceKey=${process.env.MULTI_FAMILY_BEFORE_KEY}`)
  //     .then(({ data }) => {
  //       let getdata = data.response.body.items['item'];
  //       //console.log(getdata);
  //       getdata.forEach((item) => {
  //           // console.log(Object.values(item));
  //           let param = Object.values(item);
  //           param = param.map((val) => {
  //             if (typeof val === 'string') {
  //               return val.trim();
  //             }
  //             return val;
  //           });
  //         if (param.length === 9) {
  //           connection.query(sqlmultifamilybefore2, param, function (err, rows, fields) {
  //             if (err) {
  //               console.log(err);
  //             }
  //             else {
  //               // console.log(rows.insertId);
  //             }
  //           });     
  //         }
  //         else {
  //           connection.query(sqlmultifamilybefore, param, function (err, rows, fields) {
  //             if (err) {
  //               console.log(err);
  //             }
  //             else {
  //               // console.log(rows.insertId);
  //             }
  //           });
  //         }
  //       });
  
  //     });
  // });
  
  
  // 연립다세대 매매
  // let sqlmultigeneration  = `INSERT INTO 
  // multigeneration (dealamount, buildyear, dealyear, groundarea,
  //   dong, housename, dealmonth, dealday,
  //   housearea, jibun, code, floor,
  //   releaseDate, isrelease)
  // VALUES (?, ?, ?, ?, ?,
  // ? ,? ,? ,? ,? ,
  // ?, ?,?, ?)`;
  
  // Object.values(seoulGu).forEach((date) => {
  
  //   axios
  //     .get(`http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHTrade?LAWD_CD=${date}&DEAL_YMD=202104&serviceKey=${process.env.MULTI_GENERATION_KEY}`)
  //     .then(({ data }) => {
  //       let getdata = data.response.body.items['item'];
  //       //console.log(getdata);
  //       getdata.forEach((item) => {
  //           // console.log(Object.values(item));
  //           let param = Object.values(item);
  //           param = param.map((val) => {
  //             if (typeof val === 'string') {
  //               return val.trim();
  //             }
  //             return val;
  //           });
  //           connection.query(sqlmultigeneration,param,function(err, rows, fields) {
  //             if (err){
  //               console.log(err);
  //               console.log(item);
  //             }
  //             else{
  //               //console.log(rows.insertId);
  //             }
  //           });
  //         });
  //         //connection.end();
  //     });
  // });
  
  
  // 연립다세대 전월세
  // let sqlmultigenerationbefore = `INSERT INTO 
  //   multigenerationbefore (buildyear, dealyear, dong, deposit, 
  //     aptname, dealmonth, rent, dealday, 
  //     area, jibun, code, floor)
  //   VALUES (?, ?, ?, ?, 
  //   ?, ? ,? ,?,
  //   ?, ? ,? ,?)`;
  // let sqlmultigenerationbefore2 = `INSERT INTO 
  //   multigenerationbefore (buildyear, dealyear, dong, deposit, 
  //     aptname, dealmonth, rent, dealday, 
  //     area, jibun, code)
  //   VALUES (?, ?, ?, ?, 
  //   ?, ? ,? ,?,
  //   ?, ? ,?)`;
  
  // Object.values(seoulGu).forEach((date) => {
  
  
  //   axios
  //     .get(`http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHRent?LAWD_CD=${date}&DEAL_YMD=202104&serviceKey=${process.env.MULTI_GENERATION_BEFORE_KEY}`)
  //     .then(({ data }) => {
  //       let getdata = data.response.body.items['item'];
  //       //console.log(getdata);
  
  //       getdata.forEach((item) => {
  //           // console.log(Object.values(item));
  //         let param = Object.values(item);
  
  //         param = param.map((val) => {
  //           if (typeof val === 'string') {
  //             return val.trim();
  //           }
  //           return val;
  //         });
  
  //         if (param.length === 11) {
  //           connection.query(sqlmultigenerationbefore2, param, function (err, rows, fields) {
  //             if (err) {
  //               console.log(err);
  //             }
  //             else {
  //               //console.log(rows.insertId);
  //             }
  //           });
  //         }
  //         else {
  //           connection.query(sqlmultigenerationbefore,param,function(err, rows, fields) {
  //             if (err){
  //               console.log(err);
  //             }
  //             else{
  //               //console.log(rows.insertId);
  //             }
  //           });
  //         }
  
  //         });
  //         //connection.end();
  //     });
  // });

}  

// 크롤링된 데이터의 사진을 처리
// Nodejs sharp 모듈 => 이미지 처리 사용 
const imageprocessing = () => {
  
  // 이미지 drop 모듈 
  // const testfolder = './pictures/';
  // fs.readdir(testfolder, (err, files) => {
  //   files.forEach(async (file) => {
  //     await imagecrop(testfolder + file);  
  //     index++;
  //   });
  // });
  
  
  // async function imagecrop(filename) {
  //   sharp(filename).extract({ left: 50, top: 150, width: 825, height: 700 })  
  //     .toFile('./pictures/' + filename.split("_")[1])
  //     .then(function (new_file_info) {
  //       // console.log("Image cropped and saved");  
  //     })
  //     .catch(function (err) {
  //       console.log("An error occured");  
  //       console.log(err)
  //     });
  
  // }

}  

// 포트 대기
app.listen(port, () => {
  console.log(`Api Server app listening at http://localhost:${port}`)
})