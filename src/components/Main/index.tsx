import React from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import Post from '../Post/index'
function Index() {
    const params = {
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true
        }
      }
      return (
        <Wrap>
          <div>
            <Swiper {...params}>
              <SwiperChild>
              <img src={require("../../assets/test1.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover", objectPosition: "50% 50%" }} />  
              </SwiperChild>
              <SwiperChild>
              <img src={require("../../assets/test2.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover", objectPosition: "50% 50%" }} />
              </SwiperChild>
              <SwiperChild>
              <img src={require("../../assets/test3.png")} alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover", objectPosition: "50% 50%" }} />
              </SwiperChild>
            </Swiper>
          </div>
          <div>
            <Post expansion={false}/>
          </div>
        </Wrap>
      )
}
export default Index;
const Wrap = styled.div`
  width: 100%;
  padding: 0% 5%;
  height: 1500px;
  & > div {
    max-width: 1300px;
    display: flex;
     justify-content: center;
    align-items: center;
    margin: 0px auto;
    & > *:nth-child(1) {
      margin: 55px 0px;
      height: 500px;
    }
  }
`
const SwiperChild=styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0);
`;
const SwiperItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0);
`
const SwiperShadow = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const SwiperText = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  font-size: 36px;
  text-align: center;
  color: white;
  word-break: keep-all;
  font-family: "NanumSRB";
`