var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ModLand_study_area_1 = new ol.format.GeoJSON();
var features_ModLand_study_area_1 = format_ModLand_study_area_1.readFeatures(json_ModLand_study_area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ModLand_study_area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModLand_study_area_1.addFeatures(features_ModLand_study_area_1);
var lyr_ModLand_study_area_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModLand_study_area_1, 
                style: style_ModLand_study_area_1,
                popuplayertitle: "ModLand_study_area",
                interactive: true,
                title: '<img src="styles/legend/ModLand_study_area_1.png" /> ModLand_study_area'
            });
var format_sites_2 = new ol.format.GeoJSON();
var features_sites_2 = format_sites_2.readFeatures(json_sites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sites_2.addFeatures(features_sites_2);
var lyr_sites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sites_2, 
                style: style_sites_2,
                popuplayertitle: "sites",
                interactive: true,
                title: '<img src="styles/legend/sites_2.png" /> sites'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_ModLand_study_area_1.setVisible(true);lyr_sites_2.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_ModLand_study_area_1,lyr_sites_2];
lyr_ModLand_study_area_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', });
lyr_sites_2.set('fieldAliases', {'SITE_NAME': 'SITE_NAME', 'N': 'N', 'REGION': 'REGION', 'INVEST': 'INVEST', 'REFERENCE': 'REFERENCE', 'WEB_SOURCE': 'WEB_SOURCE', });
lyr_ModLand_study_area_1.set('fieldImages', {'qc_id': '', 'fid': '', });
lyr_sites_2.set('fieldImages', {'SITE_NAME': 'TextEdit', 'N': 'TextEdit', 'REGION': 'TextEdit', 'INVEST': 'TextEdit', 'REFERENCE': 'TextEdit', 'WEB_SOURCE': 'TextEdit', });
lyr_ModLand_study_area_1.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'fid': 'no label', });
lyr_sites_2.set('fieldLabels', {'SITE_NAME': 'no label', 'N': 'no label', 'REGION': 'no label', 'INVEST': 'no label', 'REFERENCE': 'no label', 'WEB_SOURCE': 'no label', });
lyr_sites_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});