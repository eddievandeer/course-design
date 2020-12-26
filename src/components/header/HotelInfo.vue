<template>
    <div class="hotel-info-card">
        <div class="hotel-detail">
            <div class="hotel-name">
                乾园大酒店
                <div class="hotel-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
            <div class="hotel-position">
                <i class="fa fa-building" aria-hidden="true"></i>
                <span>洛阳市洛龙区开元大道263</span>
            </div>
            <div class="hotel-tel">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>0379-64231434</span>
            </div>
            <a href="https://ditu.amap.com/dir?from%5Bname%5D=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&from%5Bid%5D=dirmyloc&from%5Badcode%5D=410300&from%5Bpoitype%5D=&from%5Blnglat%5D=112.42221%2C34.602&from%5Bmodxy%5D=112.42221%2C34.602&to%5Bname%5D=%E6%B2%B3%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E5%BC%80%E5%85%83%E6%A0%A1%E5%8C%BA%E4%B9%BE%E5%9B%AD&to%5Blnglat%5D=112.427641%2C34.601387&to%5Bid%5D=B0FFHWJPVO&to%5Bpoitype%5D=120303&to%5Badcode%5D=410300&to%5Bmodxy%5D=112.427606%2C34.602434&type=car&policy=1"
                target="__blank">
                <button class="hotel-navigation">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>导航</span>
                </button>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HotelInfo'
    }
</script>

<style lang="scss" scoped>
    .hotel-info-card {
        width: 45%;
        height: 12rem;
        border-radius: 10px 10px 0 0;
        padding: 30px 55px;
        box-sizing: border-box;
        background: #fff;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, 0);

        .hotel-detail {
            position: relative;

            .hotel-name {
                color: #292929;
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 1.2rem;
                display: flex;
                justify-content: space-between;

                .hotel-star {
                    width: 6.5rem;
                    font-size: 20px;
                    color: #ffbc00;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            }

            .hotel-position,
            .hotel-tel {
                margin-bottom: .1rem;

                i {
                    width: 1.5rem;
                    height: 1.5rem;
                    color: #939392;
                    font-size: 19px;
                }

                span {
                    color: #4B4B4B;
                    margin-left: 0.2rem;
                }
            }

            .hotel-navigation {
                background: transparent;
                color: #00529A;
                position: absolute;
                right: 0;
                bottom: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                i {
                    font-size: 24px;
                }

                &:hover {
                    color: #2097ff;
                }
            }

            @media screen and (max-width: 375px) {
                .hotel-name {
                    font-size: 26px;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .hotel-info-card {
            width: 85%;
            height: 9.8rem;
            padding: 20px 20px 0 20px;
            top: 55%;
        }
    }

    @media screen and (max-width: 375px) {
        .hotel-info-card {
            width: 92%;
            padding: 20px 15px 0 15px;
        }
    }
</style>