/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  getSiteData,
  productionSites,
  currentHostname as hostname,
} from "../services/hostService";
import { mapStyles } from "../services/mapStyles";
import marker from "../assets/medical_blue_map_marker.svg";

const MapContainer = (props) => {
  const [centrasData, setCentrasData] = useState([]);

  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [mapCenter, setMapCenter] = useState({
    lat: 57.724119,
    lng: 12.003385,
  }); // Gothenburg
  const [zoomLevel, setZoomLevel] = useState(10);
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    const additionalFields = [
      "title",
      "address",
      "postal_code",
      "city",
      "phone",
      "email",
      "coords",
    ];
    const data = Object.keys(productionSites).map((center) =>
      getSiteData(center, language, t, additionalFields)
    );

    setCentrasData(data);
  }, [language, t]);

  useEffect(() => {
    const currentCentra = centrasData.find((centra) =>
      hostname.includes(centra.host)
    );
    if (currentCentra) {
      setMapCenter({
        lat: currentCentra.coords.lat,
        lng: currentCentra.coords.lng,
      });
      setZoomLevel(12);
    }
  }, [centrasData]);

  if (!mapCenter && centrasData.length > 0) {
    setMapCenter({
      lat: centrasData[0].coords.lat,
      lng: centrasData[0].coords.lng,
    });
  }

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace({
      title: marker.title,
      address: marker.address,
      phone: marker.phone,
      email: marker.email,
    });
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    setMapCenter({
      lat: marker.position.lat(),
      lng: marker.position.lng(),
    });
  };
  return (
    <Box w="full" h="500px" position="relative">
      <Map
        google={props.google}
        center={mapCenter}
        zoom={zoomLevel}
        styles={mapStyles}
        containerStyle={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        initialCenter={
          centrasData.length > 0
            ? { lat: centrasData[0].coords.lat, lng: centrasData[0].coords.lng }
            : mapCenter
        }
        minZoom={8}
        maxZoom={16}
        mapTypeControl={false}
        fullscreenControl={false}
        streetViewControl={false}
      >
        {centrasData &&
          centrasData.map((center, index) => (
            <Marker
              icon={{ url: marker }}
              key={index}
              title={center.title}
              name={center.title}
              position={{ lat: center.coords.lat, lng: center.coords.lng }}
              onClick={onMarkerClick}
              address={`${center.address}, ${center.postal_code} ${center.city}`}
              phone={center.phone}
              email={center.email}
            />
          ))}
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={() => setShowingInfoWindow(false)}
        >
          <Box p="4" bg="white" maxW="sm" rounded="md" shadow="lg">
            <Heading as="h4" size="md" mb="2">
              {selectedPlace.title}
            </Heading>
            <Text fontSize="sm" mb="1">
              {selectedPlace.address}
            </Text>
            <Text fontSize="sm" mb="1">
              {selectedPlace.phone}
            </Text>
            <Text fontSize="sm">{selectedPlace.email}</Text>
          </Box>
        </InfoWindow>
      </Map>
    </Box>
  );
};

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
})(MapContainer);
