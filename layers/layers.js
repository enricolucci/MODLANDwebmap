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
var format_SurfcollOthers_2 = new ol.format.GeoJSON();
var features_SurfcollOthers_2 = format_SurfcollOthers_2.readFeatures(json_SurfcollOthers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfcollOthers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfcollOthers_2.addFeatures(features_SurfcollOthers_2);
var lyr_SurfcollOthers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurfcollOthers_2, 
                style: style_SurfcollOthers_2,
                popuplayertitle: "Surf.coll./Others",
                interactive: true,
                title: '<img src="styles/legend/SurfcollOthers_2.png" /> Surf.coll./Others'
            });
var format_Archexc_3 = new ol.format.GeoJSON();
var features_Archexc_3 = format_Archexc_3.readFeatures(json_Archexc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Archexc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Archexc_3.addFeatures(features_Archexc_3);
var lyr_Archexc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Archexc_3, 
                style: style_Archexc_3,
                popuplayertitle: "Arch. exc.",
                interactive: true,
                title: '<img src="styles/legend/Archexc_3.png" /> Arch. exc.'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_ModLand_study_area_1.setVisible(true);lyr_SurfcollOthers_2.setVisible(true);lyr_Archexc_3.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_ModLand_study_area_1,lyr_SurfcollOthers_2,lyr_Archexc_3];
lyr_ModLand_study_area_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', });
lyr_SurfcollOthers_2.set('fieldAliases', {'SITE_NAME': 'SITE_NAME', 'N': 'N', 'REGION': 'REGION', 'INVEST': 'INVEST', 'REFERENCE': 'REFERENCE', 'WEB_SOURCE': 'WEB_SOURCE', 'Site name': 'Site name', 'Region': 'Region', 'Investigation': 'Investigation', 'References': 'References', 'Web source': 'Web source', 'Copper Age nd': 'Copper Age nd', 'Early Copper Age (4th mill. BCE)': 'Early Copper Age (4th mill. BCE)', 'Late Copper Age (3rd mill. BCE)': 'Late Copper Age (3rd mill. BCE)', 'Bronze Age nd': 'Bronze Age nd', 'EBA (20th-16th c. BCE)': 'EBA (20th-16th c. BCE)', 'MBA (15th-14th c. BCE)': 'MBA (15th-14th c. BCE)', 'LBA1 (13th-12 c. BCE)': 'LBA1 (13th-12 c. BCE)', 'LBA2 (11th-10th c. BCE)': 'LBA2 (11th-10th c. BCE)', });
lyr_Archexc_3.set('fieldAliases', {'SITE_NAME': 'SITE_NAME', 'N': 'N', 'REGION': 'REGION', 'INVEST': 'INVEST', 'REFERENCE': 'REFERENCE', 'WEB_SOURCE': 'WEB_SOURCE', 'Site name': 'Site name', 'Region': 'Region', 'Investigation': 'Investigation', 'References': 'References', 'Web source': 'Web source', 'Copper Age nd': 'Copper Age nd', 'Early Copper Age (4th mill. BCE)': 'Early Copper Age (4th mill. BCE)', 'Late Copper Age (3rd mill. BCE)': 'Late Copper Age (3rd mill. BCE)', 'Bronze Age nd': 'Bronze Age nd', 'EBA (20th-16th c. BCE)': 'EBA (20th-16th c. BCE)', 'MBA (15th-14th c. BCE)': 'MBA (15th-14th c. BCE)', 'LBA1 (13th-12 c. BCE)': 'LBA1 (13th-12 c. BCE)', 'LBA2 (11th-10th c. BCE)': 'LBA2 (11th-10th c. BCE)', });
lyr_ModLand_study_area_1.set('fieldImages', {'qc_id': '', 'fid': '', });
lyr_SurfcollOthers_2.set('fieldImages', {'SITE_NAME': 'TextEdit', 'N': 'TextEdit', 'REGION': 'TextEdit', 'INVEST': 'TextEdit', 'REFERENCE': 'TextEdit', 'WEB_SOURCE': 'TextEdit', 'Site name': 'TextEdit', 'Region': 'TextEdit', 'Investigation': 'TextEdit', 'References': 'TextEdit', 'Web source': 'TextEdit', 'Copper Age nd': 'TextEdit', 'Early Copper Age (4th mill. BCE)': 'TextEdit', 'Late Copper Age (3rd mill. BCE)': 'TextEdit', 'Bronze Age nd': 'TextEdit', 'EBA (20th-16th c. BCE)': 'TextEdit', 'MBA (15th-14th c. BCE)': 'TextEdit', 'LBA1 (13th-12 c. BCE)': 'TextEdit', 'LBA2 (11th-10th c. BCE)': 'TextEdit', });
lyr_Archexc_3.set('fieldImages', {'SITE_NAME': 'TextEdit', 'N': 'TextEdit', 'REGION': 'TextEdit', 'INVEST': 'TextEdit', 'REFERENCE': 'TextEdit', 'WEB_SOURCE': 'TextEdit', 'Site name': 'TextEdit', 'Region': 'TextEdit', 'Investigation': 'TextEdit', 'References': 'TextEdit', 'Web source': 'TextEdit', 'Copper Age nd': 'TextEdit', 'Early Copper Age (4th mill. BCE)': 'TextEdit', 'Late Copper Age (3rd mill. BCE)': 'TextEdit', 'Bronze Age nd': 'TextEdit', 'EBA (20th-16th c. BCE)': 'TextEdit', 'MBA (15th-14th c. BCE)': 'TextEdit', 'LBA1 (13th-12 c. BCE)': 'TextEdit', 'LBA2 (11th-10th c. BCE)': 'TextEdit', });
lyr_ModLand_study_area_1.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'fid': 'no label', });
lyr_SurfcollOthers_2.set('fieldLabels', {'SITE_NAME': 'no label', 'N': 'no label', 'REGION': 'hidden field', 'INVEST': 'hidden field', 'REFERENCE': 'hidden field', 'WEB_SOURCE': 'hidden field', 'Site name': 'hidden field', 'Region': 'no label', 'Investigation': 'no label', 'References': 'no label', 'Web source': 'no label', 'Copper Age nd': 'inline label - always visible', 'Early Copper Age (4th mill. BCE)': 'inline label - always visible', 'Late Copper Age (3rd mill. BCE)': 'inline label - always visible', 'Bronze Age nd': 'inline label - always visible', 'EBA (20th-16th c. BCE)': 'inline label - always visible', 'MBA (15th-14th c. BCE)': 'inline label - always visible', 'LBA1 (13th-12 c. BCE)': 'inline label - always visible', 'LBA2 (11th-10th c. BCE)': 'inline label - always visible', });
lyr_Archexc_3.set('fieldLabels', {'SITE_NAME': 'no label', 'N': 'no label', 'REGION': 'hidden field', 'INVEST': 'hidden field', 'REFERENCE': 'hidden field', 'WEB_SOURCE': 'hidden field', 'Site name': 'hidden field', 'Region': 'no label', 'Investigation': 'no label', 'References': 'no label', 'Web source': 'no label', 'Copper Age nd': 'inline label - always visible', 'Early Copper Age (4th mill. BCE)': 'inline label - always visible', 'Late Copper Age (3rd mill. BCE)': 'inline label - always visible', 'Bronze Age nd': 'inline label - always visible', 'EBA (20th-16th c. BCE)': 'inline label - always visible', 'MBA (15th-14th c. BCE)': 'inline label - always visible', 'LBA1 (13th-12 c. BCE)': 'inline label - always visible', 'LBA2 (11th-10th c. BCE)': 'inline label - always visible', });
lyr_Archexc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});