import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import style from './Map.module.css';

// Import marker icons
import position from '../../assets/images/position.png';
import binoculars from '../../assets/images/binoculars.png';
import church from '../../assets/images/church.png';
import raft from '../../assets/images/raft.png';
import river from '../../assets/images/river.png';
import temple from '../../assets/images/temple.png';
import tent from '../../assets/images/tent.png';
import treking from '../../assets/images/treking.png';

// Fix Leaflet default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Create custom icon function
const createCustomIcon = (imageUrl, size = 30) => {
    return L.divIcon({
        className: style.customMarker,
        html: `<img src="${imageUrl}" style="width: ${size}px; height: auto;" alt="marker" />`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2]
    });
};

// Function to open Google Maps directions
const openGoogleMaps = (lat, lng, name) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
};

// Function to open Google Maps for a location
const openGoogleMapsLocation = (lat, lng) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
};

export default function Map() {
    const { t } = useTranslation('global');
    const [activeMarker, setActiveMarker] = useState(null);

    // Locations
    const enamino = { lat: -1.7277, lng: 9.2535, name: "L'Eco-Village d'Enamino", icon: position, size: 50 };
    
    const locations = [
        { lat: -1.5750275260912617, lng: 9.265210210782604, name: "Omboué", icon: temple },
        { lat: -1.6513040117066657, lng: 9.321858467199517, name: "Île Evengué", icon: treking },
        { lat: -1.651168382134359, lng: 9.383606400684322, name: "La Mission Sainte Anne", icon: church },
        { lat: -1.6698838340061741, lng: 9.416962213709047, name: "Rivière Empivie", icon: river },
        { lat: -1.849380852582346, lng: 9.372120842187, name: "Village d'Iguela", icon: raft },
        { lat: -1.9868483319996164, lng: 9.42183777115863, name: "Parc National de Loango", icon: binoculars },
        { lat: -1.9661651242933986, lng: 9.476959531617533, name: "Yatuga", icon: binoculars },
        { lat: -2.057438722640862, lng: 9.570107257975804, name: "Entrée d'Akaka", icon: binoculars },
        { lat: -2.2861384621856924, lng: 9.722699319509346, name: "Village d'Inyougou", icon: treking },
        { lat: -2.390201764172304, lng: 9.731889977371498, name: "Village de Sounga", icon: treking },
        { lat: -2.294659744657578, lng: 9.743751704890485, name: "Campement Akaka", icon: tent },
    ];

    // Route points (just dots on the map)
    const routePoints = [
        { lat: -2.2861384621856926, lng: 9.722699319509346 },
        { lat: -2.2935715551847364, lng: 9.723355795070928 },
        { lat: -2.30100464818378, lng: 9.72401227063251 },
        { lat: -2.3084377411828236, lng: 9.724668746194093 },
        { lat: -2.3158708341818675, lng: 9.725325221755675 },
        { lat: -2.323303927180911, lng: 9.725981697317257 },
        { lat: -2.3307370201799547, lng: 9.72663817287884 },
        { lat: -2.3381701131789985, lng: 9.727294648440422 },
        { lat: -2.345603206178042, lng: 9.727951124002004 },
        { lat: -2.3530362991770857, lng: 9.728607599563587 },
        { lat: -2.360469392176129, lng: 9.729264075125169 },
        { lat: -2.367902485175173, lng: 9.729920550686751 },
        { lat: -2.3753355781742167, lng: 9.730577026248334 },
        { lat: -2.38276867117326, lng: 9.731233501809916 },
        { lat: -2.390201764172304, lng: 9.731889977371498 },
    ];

    return (
        <section className={style.container}>
            <div className={style.header}>
                <h2 className={style.title}>{t('contact.mapTitle')}</h2>
                <p className={style.subtitle}>{t('contact.mapSubtitle')}</p>
            </div>
            
            <MapContainer
                center={[enamino.lat, enamino.lng]}
                zoom={9}
                scrollWheelZoom={false}
                className={style.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Main Enamino Marker */}
                <Marker
                    position={[enamino.lat, enamino.lng]}
                    icon={createCustomIcon(enamino.icon, enamino.size)}
                    eventHandlers={{
                        click: () => setActiveMarker(enamino),
                    }}
                >
                    <Popup>
                        <div className={style.popup}>
                            <h3>{enamino.name}</h3>
                            <button 
                                className={style.directionsBtn}
                                onClick={() => openGoogleMaps(enamino.lat, enamino.lng, enamino.name)}
                            >
                                {t('contact.getDirections')}
                            </button>
                        </div>
                    </Popup>
                </Marker>

                {/* Other Locations */}
                {locations.map((loc, index) => (
                    <Marker
                        key={index}
                        position={[loc.lat, loc.lng]}
                        icon={createCustomIcon(loc.icon, 30)}
                        eventHandlers={{
                            click: () => setActiveMarker(loc),
                        }}
                    >
                        <Popup>
                            <div className={style.popup}>
                                <h3>{loc.name}</h3>
                                <button 
                                    className={style.directionsBtn}
                                    onClick={() => openGoogleMaps(loc.lat, loc.lng, loc.name)}
                                >
                                    {t('contact.directionsFromEnamino')}
                                </button>
                                <button 
                                    className={style.viewBtn}
                                    onClick={() => openGoogleMapsLocation(loc.lat, loc.lng)}
                                >
                                    {t('contact.viewOnGoogleMaps')}
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {/* Route Points (small dots) */}
                {routePoints.map((point, index) => (
                    <Marker
                        key={`point-${index}`}
                        position={[point.lat, point.lng]}
                        icon={L.divIcon({
                            className: style.routePoint,
                            iconSize: [8, 8]
                        })}
                    />
                ))}
            </MapContainer>

            <div className={style.info}>
                <button 
                    className={style.mainDirectionsBtn}
                    onClick={() => openGoogleMaps(enamino.lat, enamino.lng, enamino.name)}
                >
                    {t('contact.howToReach')}
                </button>
            </div>
        </section>
    );
}
