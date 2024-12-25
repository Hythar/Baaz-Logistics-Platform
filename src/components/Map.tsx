import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngTuple } from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface Location {
  name: string;
  position: LatLngTuple;
  details: string;
}

const locations: Location[] = [
  {
    name: 'Office',
    position: [1.3, 5.1],
    details: 'Main Office: 12345678',
  },
  {
    name: 'Office',
    position: [1.1, 3.1],
    details: 'Regional Branch',
  },
  {
    name: 'Office',
    position: [2.3, 4.1],
    details: 'Phone: 12345678',
  },
  {
    name: 'city',
    position: [4.7, 6.5],
    details: 'Regional Branch',
  },
];

const Map = () => {
  return (
    <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl">
      <MapContainer
        center={[10.4333, 45.0167] as LatLngTuple}
        zoom={6}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            icon={defaultIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-gray-900">{location.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{location.details}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;