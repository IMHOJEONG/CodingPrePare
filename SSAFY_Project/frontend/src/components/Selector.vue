<template>
  <div>
    <v-row>
      <v-col cols="9">
        <div id="map" style="width:75vw;height:85vh;"/>
      </v-col>
      <v-col cols="3">
        <apt-detail :imageSrc= "this.$store.state.selector.imageSrc" v-show= "type == `aptdeal` || type == `aptrent` && isClick"></apt-detail>
        <mul-gen-detail :imageSrc= "this.$store.state.selector.imageSrc" v-show= "type == `mulgendeal` || type == `mulgenrent` && isClick"></mul-gen-detail>
        <care-detail :imageSrc= "this.$store.state.selector.imageSrc" v-show= "type == `hospital` || type == `clinic` && isClick"></care-detail>
      </v-col>
    </v-row>
    <v-container>
    <v-row>
      <v-col cols="4">
        <v-combobox @change="changeGugun"
        v-model="select_sido"
        :items="items_sido"
        label="도/광역시"
        outlined
        ></v-combobox>
      </v-col>
      
      <v-col cols="4">
        <v-combobox @change="changeDong"
        v-model="select_gugun"
        :items="items_gugun"
        label="시/구/군"
        outlined
        ></v-combobox>
      </v-col>
      
      <v-col cols="4">
        <v-combobox @change="changeMap"
        v-model="select_dong"
        :items="items_dong"
        label="동"
        outlined
        ></v-combobox>
      </v-col>
    </v-row>  
      <v-row>
        <v-col>
          <v-checkbox
            v-model="isApartDeal"
            label="아파트 거래가"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="isApartRent"
            label="아파트 임대가"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="isMultiGenerationDeal"
            :label="`연립 다세대가구 거래가`"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="isMultiGenerationRent"
            :label="`연립 다세대가구 임대가`"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="isClinic"
            :label="`코로나 진료소`"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="isHospital"
            :label="`안심 병원`"
          ></v-checkbox>
        </v-col>
      </v-row>
      <br>
      <br>
      <br>
      <br>
      <br>
    </v-container>
  </div>
</template>




<script>  
  import { mapState, mapActions } from 'vuex';
  import AptDetail from '@/components/AptDetail/AptDetail.vue';
  import MulGenDetail from '@/components/AptDetail/MulGenDetail.vue';
  import CareDetail from '@/components/AptDetail/CareDetail.vue';
  export default {
    name: 'Selector',
    components: {
      AptDetail,
      MulGenDetail,
      CareDetail,
    },
    computed: {
      items_gugun() {
        return this.$store.state.selector.guguns;
      },
      items_dong() {
        return this.$store.state.selector.dongs;
      },

      isClick() {
        return this.$store.state.selector.isClick;
      },
      type() {
        return this.$store.state.selector.type;
      }
    },
    data() {
      return {
        map: '',
        select_sido: '도/광역시',
        select_gugun: '시/구/군',
        select_dong: '동',
        isApartDeal: true,
        isApartRent: true,
        isMultiFamilyDeal: true,
        isMultiFamilyRent: true,
        isMultiGenerationDeal: true,
        isMultiGenerationRent: true,
        isClinic: true,
        isHospital: true,
        
        items_sido: [
          '도/광역시',
          '서울특별시',
          '부산광역시',
          '대구광역시',
          '인천광역시',
          '광주광역시',
          '대전광역시',
          '울산광역시',
          '세종특별자치시',
          '경기도',
          '강원도',
          '충청북도',
          '충청남도',
          '전라북도',
          '전라남도',
          '경상북도',
          '경상남도',
          '제주특별자치도'
        ],
      }
    },
    mounted() {
      window.kakao && window.kakao.maps ? this.makeMap() : this.addScript();
    },
    methods: {
      ...mapState(['selector.guguns', 'selector.dongs']),
      ...mapActions(['getGugunList', 'getDongList', 'sendAptDealList', 'sendAptRentList'
      , 'sendMulGenDealList', 'sendMulGenRentList', 'sendHospitalList', 'sendClinicList']),
      changeGugun() {
        this.select_gugun = '시/구/군';
        this.select_dong = '동';
        if(this.select_sido != '도/광역시') { 
          this.getGugunList(this.select_sido);
        }
      },
      changeDong() {
        this.select_dong = '동';
        if(this.select_gugun != '시/구/군') {
          this.getDongList('/' + this.select_sido + '/' + this.select_gugun);
        }
      },
      changeMap() {
        let map = this.map;
        let sendAptDealList = this.sendAptDealList;
        let sendAptRentList = this.sendAptRentList;
        let sendMulGenDealList = this.sendMulGenDealList;
        let sendMulGenRentList = this.sendMulGenRentList;
        let sendHospitalList = this.sendHospitalList;
        let sendClinicList = this.sendClinicList;
        let regex = /[0-9]/g;
        this.select_dong = this.select_dong.replace(regex, "");
        if(this.select_dong != '동' && this.select_gugun != '시/구/군' && this.select_sido != '도/광역시') {
          var geocoder = new kakao.maps.services.Geocoder();
          let getAptData = async() => {
            //1. 만약 아파트 거래가 체크 되어있다면,
            if(this.isApartDeal === true) {
              let getResponse = await fetch("http://localhost:8081/apartdeal/" + `${this.select_dong}`);
              let data = await getResponse.json();

              [...data].forEach((item) => {
                geocoder.addressSearch(item['dong'] + " " + item['jibun'], (result, status) => {
                  if(status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    var marker = new kakao.maps.Marker({
                      map: this.map,
                      position: coords,
                    });

                    var infowindow = new kakao.maps.InfoWindow({
                      content: '<div style="width:100px;text-align:center;padding:6px 0; font-size:14px" @click="">'+item['aptname'] +'</div>'
                    });
                    infowindow.open(this.map, marker);
                    kakao.maps.event.addListener(marker, 'click', function() {
                        sendAptDealList('/' + item.dong + '/' + item.aptname);
                    });
                  }
                });
              });
            }

            //2. 만약 아파트 임대가 체크되어있다면,
            if(this.isApartRent === true) {
              let getResponse = await fetch("http://localhost:8081/apartrent/" + `${this.select_dong}`);
              let data = await getResponse.json();
              // console.log(data);

              [...data].forEach((item) => {
                geocoder.addressSearch(item['dong'] + " " + item['jibun'], (result, status) => {
                  if(status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    var imageSrc = require(`@/assets/marker/pin.png`), 
                        imageSize = new kakao.maps.Size(45, 50),
                        imageOption = {offset: new kakao.maps.Point(27, 69)};
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                    
                    //결과값으로 받은 위치를 마커로 표시.
                    var marker = new kakao.maps.Marker({
                      map: this.map,
                      position: coords,
                      image: markerImage
                    });

                    var infowindow = new kakao.maps.InfoWindow({
                      content: '<div style="width:100px;text-align:center;padding:6px 0 font-size:14px;" @click="">'+item['aptname'] +'</div>'
                    });
                    infowindow.open(this.map, marker);
                    kakao.maps.event.addListener(marker, 'click', function() {
                        sendAptRentList('/' + item.dong + '/' + item.aptname);
                    });                  
                  }
                });
              });
            }

            //3. 만약 다세대 가구 거래가 체크되어있다면,
            if(this.isMultiGenerationDeal === true) {
              let getResponse = await fetch("http://localhost:8081/mulgendeal/" + `${this.select_dong}`);
              let data = await getResponse.json();

              [...data].forEach((item) => {
                geocoder.addressSearch(item['dong'] + " " + item['jibun'], (result, status) => {
                  if(status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    var marker = new kakao.maps.Marker({
                      map: this.map,
                      position: coords
                    });

                    var infowindow = new kakao.maps.InfoWindow({
                      content: '<div style="width:100px;text-align:center;padding:6px 0 font-size:14px;" @click="">'+item['housename'] +'</div>'
                    });
                    infowindow.open(this.map, marker);
                    kakao.maps.event.addListener(marker, 'click', function() {
                        sendMulGenDealList('/' + item.dong + '/' + item.housename);
                    });    
                  }
                });
              });
            }

            //4. 만약 다세대 가구 임대가 체크되어있다면,
            if(this.isMultiGenerationRent === true) {
              let getResponse = await fetch("http://localhost:8081/mulgenrent/" + `${this.select_dong}`);
              let data = await getResponse.json();
              
              [...data].forEach((item) => {
                geocoder.addressSearch(item['dong'] + " " + item['jibun'], (result, status) => {
                  if(status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    var imageSrc = require(`@/assets/marker/pin.png`), 
                        imageSize = new kakao.maps.Size(45, 50),
                        imageOption = {offset: new kakao.maps.Point(27, 69)};
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

                    var marker = new kakao.maps.Marker({
                      map: this.map,
                      position: coords,
                      image: markerImage
                    });

                    var infowindow = new kakao.maps.InfoWindow({
                      content: '<div style="width:100px;text-align:center;padding:6px 0; font-size:14px" @click="">'+item['housename'] +'</div>'
                    });
                    infowindow.open(this.map, marker);
                    kakao.maps.event.addListener(marker, 'click', function() {
                      sendMulGenRentList('/' + item.dong + '/' + item.housename);
                    });
                  }
                });
              });
            }

            //5. 만약 안심병원이 체크되어 있다면,
            if(this.isHospital === true) {
              let getResponse = await fetch("http://localhost:8081/hospital/" + `${this.select_sido}/${this.select_gugun}`);
              let data = await getResponse.json();
              
              // console.log(data);

              [...data].forEach((item) => {
                geocoder.addressSearch(item['address'], (result, status) => {
                  // console.log(item['dong'] + " " + item['jibun']);
                  if(status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    var imageSrc = require(`@/assets/marker/medicine.png`), // 마커이미지의 주소입니다    
                        imageSize = new kakao.maps.Size(45, 50), // 마커이미지의 크기입니다
                        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                    var marker = new kakao.maps.Marker({
                      map: this.map,
                      position: coords,
                      image: markerImage
                    });

                    var infowindow = new kakao.maps.InfoWindow({
                      content: '<div style="width:100px;text-align:center;padding:6px 0; font-size:14px" @click="">'+item['name'] +'</div>'
                    });
                    infowindow.open(this.map, marker);
                    kakao.maps.event.addListener(marker, 'click', function() {
                      sendHospitalList(item);
                    });
                  }
                });
              });
            }

            //6. 만약 진료소가 체크되어 있다면,
            if(this.isClinic === true) {
              let getResponse = await fetch("http://localhost:8081/clinic/" + `${this.select_sido}/${this.select_gugun}`);
              let data = await getResponse.json();
              [...data].forEach((item) => {
                geocoder.addressSearch(item['address'], (result, status) => {
                  if(status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    var imageSrc = require(`@/assets/marker/hospital.png`), 
                        imageSize = new kakao.maps.Size(45, 50),
                        imageOption = {offset: new kakao.maps.Point(27, 69)};
      
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                    var marker = new kakao.maps.Marker({
                      map: this.map,
                      position: coords,
                      image: markerImage
                    });

                    var infowindow = new kakao.maps.InfoWindow({
                      content: '<div style="width:100px;text-align:center;padding:6px 0; font-size:14px" @click="">'+item['name'] +'</div>'
                    });
                    infowindow.open(this.map, marker);
                    kakao.maps.event.addListener(marker, 'click', function() {
                      sendClinicList(item);
                    });
                  }
                });
              });
            }
            
          }
          getAptData();
          geocoder.addressSearch(this.select_gugun + " " + this.select_dong, function(result, status) {
              if (status === kakao.maps.services.Status.OK) {
                let moveLatLon = new kakao.maps.LatLng(result[0].address.y, result[0].address.x);   
                map.setCenter(moveLatLon);
              }
          });
        }
      },

      makeMap() {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스.
        var options = { // 지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표
          level: 3 //지도의 레벨
        };
        this.map = new kakao.maps.Map(container, options);
      },
      addScript() {
        const script = document.createElement('script');
        script.onload = () => kakao.maps.load(this.makeMap);
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=56715731ec60d3238eb1c993a48debe1&libraries=services,drawing';
        document.head.appendChild(script);
      },
    }
  }
</script>