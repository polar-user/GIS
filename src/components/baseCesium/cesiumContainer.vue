<template>
<div id="cesiumContainer"></div>
</template>

<script>
export default {
    name: "cesiumViewer",
    data() {
        return {};
    },
    mounted() {
        let viewer = new Cesium.Viewer("cesiumContainer", {
            shadows: false, //确定阴影是否由太阳投射
            animation: false, //是否创建动画小器件，左下角仪表
            baseLayerPicker: false, //是否显示图层选择器
            fullscreenButton: false, //是否显示全屏按钮
            geocoder: false, //是否显示geocoder小器件，右上角查询按钮
            shouldAnimate: true, //时间是否开始
            homeButton: false, //是否显示Home按钮
            infoBox: false, //是否显示信息框
            sceneModePicker: false, //是否显示3D/2D选择器
            selectionIndicator: false, //是否显示选取指示器组件
            timeline: false, //是否显示时间轴
            navigationHelpButton: false, //是否显示右上角的帮助按钮
        });

        //去除版权信息
        viewer._cesiumWidget._creditContainer.style.display = "none";
        var scene = viewer.scene;

        var imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
            url: "http://localhost:8080/earthview/services/GlobalMercator/RasterService/WMTS",
            layer: "globalImageLayer",
            style: "default",
            format: "image/png",
            tileMatrixSetID: "OGC_WebMercator", //web墨卡托加载方式
            tileMatrixLabels: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
            ],
        });
        // wgs84影像加载方式
        var imageryProvider = new Cesium.UrlTemplateImageryProvider({
            url: "http://localhost:8080/earthview/services/2000/RasterService/WMTS?tilematrix={l}&layer=2000&style=default&tilerow={r}&tilecol={x}&tilematrixset=OGC_WGS84&format=image%2Fpng&service=WMTS&version=1.0.0&request=GetTile",
            style: "default",
            layer: "2000",
            format: "image/png", //tileMatrixSet:'OGC_WGS84',
            tileMatrixSetID: "OGC_WGS84",
            ellipsoid: Cesium.Ellipsoid.WGS84, //tilingScheme:new this.Cesium.GeographicTilingScheme(),
            tilingScheme: new Cesium.GeographicTilingScheme({
                numberOfLevelZeroTilesX: 10,
                numberOfLevelZeroTilesY: 5,
                rectangle: new Cesium.Rectangle(
                    -Cesium.Math.PI,
                    -Cesium.Math.PI_OVER_TWO,
                    Cesium.Math.PI,
                    Cesium.Math.PI_OVER_TWO
                ),
                ellipsoid: Cesium.Ellipsoid.WGS84,
            }),
            maximumLevel: 14,
            customTags: {
                l: function (p, x, y, level) {
                    return level - 4;
                },
                r: function (p, x, y, level) {
                    return p.tilingScheme.getNumberOfYTilesAtLevel(level) - y - 1; // return (5 << level) - y - 1;
                },
            },
        });

        scene.imageryLayers.addImageryProvider(imageryProvider, 0);
        window.viewer = viewer; //全局注册viewer
        console.log(viewer);
    },
};
</script>

<style scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>>
