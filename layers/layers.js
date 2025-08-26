var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriSatellite_1 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ModLand_study_area_2 = new ol.format.GeoJSON();
var features_ModLand_study_area_2 = format_ModLand_study_area_2.readFeatures(json_ModLand_study_area_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ModLand_study_area_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModLand_study_area_2.addFeatures(features_ModLand_study_area_2);
var lyr_ModLand_study_area_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModLand_study_area_2, 
                style: style_ModLand_study_area_2,
                popuplayertitle: 'ModLand_study_area',
                interactive: false,
                title: '<img src="styles/legend/ModLand_study_area_2.png" /> ModLand_study_area'
            });
var format_Casestudies_3 = new ol.format.GeoJSON();
var features_Casestudies_3 = format_Casestudies_3.readFeatures(json_Casestudies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casestudies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casestudies_3.addFeatures(features_Casestudies_3);
var lyr_Casestudies_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casestudies_3, 
                style: style_Casestudies_3,
                popuplayertitle: 'Case studies',
                interactive: true,
    title: 'Case studies<br />\
    <img src="styles/legend/Casestudies_3_0.png" /> Archaeological excavation<br />\
    <img src="styles/legend/Casestudies_3_1.png" /> Surf. coll./Other<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_EsriSatellite_1.setVisible(true);lyr_ModLand_study_area_2.setVisible(true);lyr_Casestudies_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EsriSatellite_1,lyr_ModLand_study_area_2,lyr_Casestudies_3];
lyr_ModLand_study_area_2.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Area': 'Shape_Area', 'Shape_Leng': 'Shape_Leng', });
lyr_Casestudies_3.set('fieldAliases', {'fid': 'fid', 'n': 'n', 'Site': 'Site', 'Investigation': 'Investigation', 'Region': 'Region', 'Bronze Age ND': 'Bronze Age ND', 'Early Bronze Age (20th-16th c. BC)': 'Early Bronze Age (20th-16th c. BC)', 'Middle Bronze Age (15th-14th c. BC)': 'Middle Bronze Age (15th-14th c. BC)', 'Late Bronze Age (13th-12th c. BC)': 'Late Bronze Age (13th-12th c. BC)', 'Final Bronze Age (11th-10th c. BC)': 'Final Bronze Age (11th-10th c. BC)', 'Copper Age ND': 'Copper Age ND', 'Early Copper Age (4th mill. BC)': 'Early Copper Age (4th mill. BC)', 'Late Copper Age (3rd mill. BCE)': 'Late Copper Age (3rd mill. BCE)', 'Invest.': 'Invest.', 'References': 'References', 'Webography': 'Webography', });
lyr_ModLand_study_area_2.set('fieldImages', {'COD_RIP': '', 'COD_REG': '', 'DEN_REG': '', 'Shape_Area': '', 'Shape_Leng': '', });
lyr_Casestudies_3.set('fieldImages', {'fid': 'TextEdit', 'n': 'Range', 'Site': 'TextEdit', 'Investigation': 'TextEdit', 'Region': 'TextEdit', 'Bronze Age ND': 'TextEdit', 'Early Bronze Age (20th-16th c. BC)': 'TextEdit', 'Middle Bronze Age (15th-14th c. BC)': 'TextEdit', 'Late Bronze Age (13th-12th c. BC)': 'TextEdit', 'Final Bronze Age (11th-10th c. BC)': 'TextEdit', 'Copper Age ND': 'TextEdit', 'Early Copper Age (4th mill. BC)': 'TextEdit', 'Late Copper Age (3rd mill. BCE)': 'TextEdit', 'Invest.': 'TextEdit', 'References': 'TextEdit', 'Webography': 'TextEdit', });
lyr_ModLand_study_area_2.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'DEN_REG': 'no label', 'Shape_Area': 'no label', 'Shape_Leng': 'no label', });
lyr_Casestudies_3.set('fieldLabels', {'fid': 'hidden field', 'n': 'inline label - always visible', 'Site': 'no label', 'Investigation': 'hidden field', 'Region': 'no label', 'Bronze Age ND': 'inline label - always visible', 'Early Bronze Age (20th-16th c. BC)': 'inline label - always visible', 'Middle Bronze Age (15th-14th c. BC)': 'inline label - always visible', 'Late Bronze Age (13th-12th c. BC)': 'inline label - always visible', 'Final Bronze Age (11th-10th c. BC)': 'inline label - always visible', 'Copper Age ND': 'inline label - always visible', 'Early Copper Age (4th mill. BC)': 'inline label - always visible', 'Late Copper Age (3rd mill. BCE)': 'inline label - always visible', 'Invest.': 'inline label - always visible', 'References': 'inline label - always visible', 'Webography': 'inline label - always visible', });
lyr_Casestudies_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});