ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([54.142249, 1.545003, 103.601449, 35.109552]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Rice1075kTons_3 = new ol.format.GeoJSON();
var features_Rice1075kTons_3 = format_Rice1075kTons_3.readFeatures(json_Rice1075kTons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rice1075kTons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice1075kTons_3.addFeatures(features_Rice1075kTons_3);
var lyr_Rice1075kTons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rice1075kTons_3, 
                style: style_Rice1075kTons_3,
                popuplayertitle: "Rice 10 - 75kTons",
                interactive: false,
                    title: '<img src="styles/legend/Rice1075kTons_3.png" /> Rice 10 - 75kTons'
                });
var lyr_Rice75kTons_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Rice > 75 kTons",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Rice75kTons_4.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [58.832378, -19.249563, 142.998708, 43.750185]
                            })
                        });
var format_Rice_5 = new ol.format.GeoJSON();
var features_Rice_5 = format_Rice_5.readFeatures(json_Rice_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rice_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice_5.addFeatures(features_Rice_5);
var lyr_Rice_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rice_5, 
                style: style_Rice_5,
                popuplayertitle: "Rice",
                interactive: false,
    title: 'Rice<br />\
    <img src="styles/legend/Rice_5_0.png" /> 75000 - 80000<br />\
    <img src="styles/legend/Rice_5_1.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Rice_5_2.png" /> 100000 - 125000<br />\
    <img src="styles/legend/Rice_5_3.png" /> 125000 - 150000<br />\
    <img src="styles/legend/Rice_5_4.png" /> 150000 - 300000<br />\
    <img src="styles/legend/Rice_5_5.png" /> 300000 - 500000<br />\
    <img src="styles/legend/Rice_5_6.png" /> >500 kTons<br />'
        });
var format_IndiaBoundary_6 = new ol.format.GeoJSON();
var features_IndiaBoundary_6 = format_IndiaBoundary_6.readFeatures(json_IndiaBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_6.addFeatures(features_IndiaBoundary_6);
var lyr_IndiaBoundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_6, 
                style: style_IndiaBoundary_6,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_6.png" /> India Boundary'
                });
var format_Buffer50Km_7 = new ol.format.GeoJSON();
var features_Buffer50Km_7 = format_Buffer50Km_7.readFeatures(json_Buffer50Km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffer50Km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer50Km_7.addFeatures(features_Buffer50Km_7);
var lyr_Buffer50Km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer50Km_7, 
                style: style_Buffer50Km_7,
                popuplayertitle: "Buffer 50 Km",
                interactive: true,
                    title: '<img src="styles/legend/Buffer50Km_7.png" /> Buffer 50 Km'
                });
var format_PaperMills_8 = new ol.format.GeoJSON();
var features_PaperMills_8 = format_PaperMills_8.readFeatures(json_PaperMills_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMills_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMills_8.addFeatures(features_PaperMills_8);
var lyr_PaperMills_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMills_8, 
                style: style_PaperMills_8,
                popuplayertitle: "Paper Mills",
                interactive: true,
                    title: '<img src="styles/legend/PaperMills_8.png" /> Paper Mills'
                });
var format_PaperMillsRiceTOP_20_9 = new ol.format.GeoJSON();
var features_PaperMillsRiceTOP_20_9 = format_PaperMillsRiceTOP_20_9.readFeatures(json_PaperMillsRiceTOP_20_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMillsRiceTOP_20_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMillsRiceTOP_20_9.addFeatures(features_PaperMillsRiceTOP_20_9);
var lyr_PaperMillsRiceTOP_20_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMillsRiceTOP_20_9, 
                style: style_PaperMillsRiceTOP_20_9,
                popuplayertitle: "Paper Mills Rice TOP_20",
                interactive: true,
    title: 'Paper Mills Rice TOP_20<br />\
    <img src="styles/legend/PaperMillsRiceTOP_20_9_0.png" /> 162000 - 181800 kTons<br />\
    <img src="styles/legend/PaperMillsRiceTOP_20_9_1.png" /> 181800 - 202300 kTons<br />\
    <img src="styles/legend/PaperMillsRiceTOP_20_9_2.png" /> 202300 - 270500 kTons<br />'
        });
var group_PaperMills = new ol.layer.Group({
                                layers: [lyr_PaperMills_8,lyr_PaperMillsRiceTOP_20_9,],
                                fold: "open",
                                title: "Paper Mills"});
var group_Feedstock = new ol.layer.Group({
                                layers: [lyr_Rice1075kTons_3,lyr_Rice75kTons_4,lyr_Rice_5,],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Rice1075kTons_3.setVisible(true);lyr_Rice75kTons_4.setVisible(true);lyr_Rice_5.setVisible(true);lyr_IndiaBoundary_6.setVisible(true);lyr_Buffer50Km_7.setVisible(false);lyr_PaperMills_8.setVisible(true);lyr_PaperMillsRiceTOP_20_9.setVisible(true);
var layersList = [group_Basemap,group_Feedstock,lyr_IndiaBoundary_6,lyr_Buffer50Km_7,group_PaperMills];
lyr_Rice1075kTons_3.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Rice_5.set('fieldAliases', {'VALUE Rice (kTons)': 'VALUE Rice (kTons)', });
lyr_IndiaBoundary_6.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_Buffer50Km_7.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', });
lyr_PaperMills_8.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'VALUE Whea': 'VALUE Whea', 'Rice': 'Rice', });
lyr_PaperMillsRiceTOP_20_9.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'Rice': 'Rice', 'N° TOP 20': 'N° TOP 20', });
lyr_Rice1075kTons_3.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Rice_5.set('fieldImages', {'VALUE Rice (kTons)': 'TextEdit', });
lyr_IndiaBoundary_6.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Buffer50Km_7.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', });
lyr_PaperMills_8.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'VALUE Whea': 'TextEdit', 'Rice': 'TextEdit', });
lyr_PaperMillsRiceTOP_20_9.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'Rice': 'TextEdit', 'N° TOP 20': 'TextEdit', });
lyr_Rice1075kTons_3.set('fieldLabels', {'VALUE': 'hidden field', });
lyr_Rice_5.set('fieldLabels', {'VALUE Rice (kTons)': 'inline label - always visible', });
lyr_IndiaBoundary_6.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_Buffer50Km_7.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'hidden field', 'Site City': 'hidden field', 'Site State': 'hidden field', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', });
lyr_PaperMills_8.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'VALUE Whea': 'hidden field', 'Rice': 'inline label - always visible', });
lyr_PaperMillsRiceTOP_20_9.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'Rice': 'inline label - always visible', 'N° TOP 20': 'inline label - always visible', });
lyr_PaperMillsRiceTOP_20_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});