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
            </MapComponent>
        </APIProvider>
    );
}
