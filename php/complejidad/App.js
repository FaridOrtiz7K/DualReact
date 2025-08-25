
var map = L.map('map').setView([-19, -67], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function getColor(d) {
    return d==null ? '#b4b4b4b7':
           d > 2 ? '#0000FF' :
           d > 1.9  ? '#1717E7' :
           d > 1.6  ? '#2E2ED0' :
           d >1.3? '#4545B9':
           d >1.1? '#5C5CA2':
           d >1? '#FFF300':
           d >0.9? '#FFE700':
           d >0.75? '#FFDC00':
           d >0.6? '#FFD000':
           d >0.4? '#FFC500':
           d >.42? '#FFB900':
           d >.41? '#FFAE00':
           d >.40? '#FFA200':
           d >.37? '#FF9700':
           d >.33? '#FF8B00':
           d >.30? '#FF7400':
           d >0.2? '#FF6800':
           d >0.15? '#FF5D00':
           d >-0.0? '#FF5100':
           d >-0.1? '#FF4500':
           d >-0.2? '#FF3A00':
           d >-0.5? '#FF2E00':
           d >-1? '#FF2200':
           d >-1.5? '#CA4139':
           d >-2? '#C04E45':
           
         '#B65C51';
}
function getColor2(d) {
    return d==null ? '#b4b4b4b7':
           d > 0.48 ? '#0000FF' :
           d > 0.4775  ? '#1717E7' :
           d > 0.4725  ? '#2E2ED0' :
           d >.4675? '#4545B9':
           d >.4625? '#5C5CA2':
           d >.4525? '#FFF300':
           d >.4475? '#FFE700':
           d >.4425? '#FFDC00':
           d >.4375? '#FFD000':
           d >.4425? '#FFC500':
           d >.42? '#FFB900':
           d >.41? '#FFAE00':
           d >.40? '#FFA200':
           d >.37? '#FF9700':
           d >.33? '#FF8B00':
           d >.30? '#FF7400':
           d >0.2? '#FF6800':
           d >0.15? '#FF5D00':
           d >-0.0? '#FF5100':
           d >-0.1? '#FF4500':
           d >-0.2? '#FF3A00':
           d >-0.5? '#FF2E00':
           d >-1? '#FF2200':
           d >-1.5? '#CA4139':
           d >-2? '#C04E45':
           
         '#B65C51';
}
function style_mun(feature) {
    return {
        fillColor: getColor(feature.properties.ICE),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function style_loc(feature) {
    return {
        fillColor: getColor2(feature.properties.valor),
        weight: 0.1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
var i_municipal;
var i_localidad;
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
    info.update(layer.feature.properties);

}

function resetHighlight(e) {
    i_municipal.resetStyle();
    i_localidad.resetStyle();
    info.update();
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });
}
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = 
    '<h4>' +  (props ?
        props.NOMGEO ? props.NOM_MUN+"<br />"+ props.NOMGEO+'</h4>' +'<b>' + (props.valor===null? null :Math.round(props.valor*1000)/1000) +'</b>'
        : props.NOM_MUN+'</h4>' +"<br />"+'<b>' + Math.round(props.ICE*1000)/1000 +'</b>': '');
};

info.addTo(map);

i_municipal = L.geoJson(indice_municipal, {
    style: style_mun,
    onEachFeature: onEachFeature
})
i_localidad = L.geoJson(indice_localidad, {
    style: style_loc,
    onEachFeature: onEachFeature
}).addTo(map);

var capa = {
    "Municipal": i_municipal,
    "Localidad": i_localidad
};
var layerControl = L.control.layers(capa).addTo(map);

map.fitBounds(i_municipal.getBounds());

var legend = L.control({position: 'bottomright'});
var legend2 = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    var grades = [0,0.5,1,1.5,2];
    var labels = [];
    div.innerHTML +=
    '<i style="background:' + getColor(-1) + '"></i> ' + '<0'+'</br>';
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i]+0.001) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};
legend.addTo(map)
legend2.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    var grades = ['-2','0',0.4,0.44,0.46];
    var labels = [];
    div.innerHTML +=
    '<i style="background:' + getColor2(-1) + '"></i> ' + '<0'+'</br>';
    for (var i = 1; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor2(grades[i]+0.01) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    div.innerHTML +=
    '<br>'+'<i style="background:' + getColor2(null) + '"></i> ' + 'NA';
    return div;
};


map.on('baselayerchange', function (e) {
    console.log(e.layer._leaflet_id)
    if(e.layer._leaflet_id=='227'){
        map.removeControl(legend);
        legend2.addTo(map)
    }
    else{
        map.removeControl(legend2);
        legend.addTo(map)
    }
 });