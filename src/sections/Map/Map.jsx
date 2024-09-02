import { APIProvider, Map as MapComponent, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import position from "../../assets/images/position.png";
import binoculars from "../../assets/images/binoculars.png";
import church from "../../assets/images/church.png";
import raft from "../../assets/images/raft.png";
import river from "../../assets/images/river.png";
import temple from "../../assets/images/temple.png";
import tent from "../../assets/images/tent.png";
import treking from "../../assets/images/treking.png";

export default function Map() {
    const enamino = { lat: -1.7277, lng: 9.2535 };
    const oboue = { lat: -1.5750275260912617, lng: 9.265210210782604 };
    const ileEvengue = { lat: -1.6513040117066657, lng: 9.321858467199517 };
    const LaMissionSainteAnne = { lat: -1.651168382134359, lng: 9.383606400684322 };
    const RiviereEmpivie = { lat: -1.6698838340061741, lng: 9.416962213709047 };
    const VillageDIguela = { lat: -1.849380852582346, lng: 9.372120842187 };
    const ParcNationalDeLoango = { lat: -1.9868483319996164, lng: 9.42183777115863 };
    const Yatuga = { lat: -1.9661651242933986, lng: 9.476959531617533 };
    const EntreeDAkaka = { lat: -2.057438722640862, lng: 9.570107257975804 };
    const VillageDInyougou = { lat: -2.2861384621856924, lng: 9.722699319509346 };
    const VillageDeSounga = { lat: -2.390201764172304, lng: 9.731889977371498 };
    const CampementDeBrousseDEnaminoAAkaka = { lat: -2.294659744657578, lng: 9.743751704890485 };
    const point1 = { lat: -2.2861384621856926, lng: 9.722699319509346 };
    const point2 = { lat: -2.2935715551847364, lng: 9.723355795070928 };
    const point3 = { lat: -2.30100464818378, lng: 9.72401227063251 };
    const point4 = { lat: -2.3084377411828236, lng: 9.724668746194093 };
    const point5 = { lat: -2.3158708341818675, lng: 9.725325221755675 };
    const point6 = { lat: -2.323303927180911, lng: 9.725981697317257 };
    const point7 = { lat: -2.3307370201799547, lng: 9.72663817287884 };
    const point8 = { lat: -2.3381701131789985, lng: 9.727294648440422 };
    const point9 = { lat: -2.345603206178042, lng: 9.727951124002004 };
    const point10 = { lat: -2.3530362991770857, lng: 9.728607599563587 };
    const point11 = { lat: -2.360469392176129, lng: 9.729264075125169 };
    const point12 = { lat: -2.367902485175173, lng: 9.729920550686751 };
    const point13 = { lat: -2.3753355781742167, lng: 9.730577026248334 };
    const point14 = { lat: -2.38276867117326, lng: 9.731233501809916 };
    const point15 = { lat: -2.390201764172304, lng: 9.731889977371498 };

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <MapComponent style={{ width: "100%", height: "500px" }} defaultCenter={enamino} defaultZoom={9} mapId={import.meta.env.VITE_GOOGLE_MAP_ID}>
                <AdvancedMarker position={enamino}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={position} height={50} />
                    </Pin>
                </AdvancedMarker>
                <InfoWindow position={enamino}>L'Eco-Village d'Enamino</InfoWindow>
                <AdvancedMarker position={oboue}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={temple} height={30} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={ileEvengue}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={treking} height={30} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={LaMissionSainteAnne}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={church} height={30} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={RiviereEmpivie}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={river} height={30} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={VillageDIguela}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={raft} height={30} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={ParcNationalDeLoango}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={binoculars} height={30} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={Yatuga}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={binoculars} height={30} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={EntreeDAkaka}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={binoculars} height={30} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={VillageDInyougou}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={treking} height={30} />
                    </Pin>
                </AdvancedMarker>
                <InfoWindow position={VillageDInyougou}>Inyougou</InfoWindow>
                <AdvancedMarker position={VillageDeSounga}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={treking} height={30} />
                    </Pin>
                </AdvancedMarker>
                <InfoWindow position={VillageDeSounga}>Sounga</InfoWindow>
                <AdvancedMarker position={CampementDeBrousseDEnaminoAAkaka}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={tent} height={30} />
                    </Pin>
                </AdvancedMarker>
                <InfoWindow position={CampementDeBrousseDEnaminoAAkaka}>Campament Akaka</InfoWindow>
                <AdvancedMarker position={point1}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point2}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point3}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point4}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point5}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point6}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point7}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point8}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point9}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point10}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point11}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point12}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point13}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point14}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
                <AdvancedMarker position={point15}>
                    <Pin background={"rgba(0,0,0,0)"} borderColor={"rgba(0,0,0,0)"} glyphColor={"rgba(0,0,0,0)"}>
                        <img src={"https://images.vexels.com/content/139158/preview/black-dot-0ff1f3.png"} height={5} />
                    </Pin>
                </AdvancedMarker>
            </MapComponent>
        </APIProvider>
    );
}
