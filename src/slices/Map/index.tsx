"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

/**
 * Props for `Map`.
 */
export type MapProps = SliceComponentProps<Content.MapSlice>;

const MapContainer = dynamic(
  async () => (await import("react-leaflet")).MapContainer,
  {
    ssr: false,
  },
);

const TileLayer = dynamic(
  async () => (await import("react-leaflet")).TileLayer,
  {
    ssr: false,
  },
);

const Marker = dynamic(async () => (await import("react-leaflet")).Marker, {
  ssr: false,
});

const Tooltip = dynamic(async () => (await import("react-leaflet")).Tooltip, {
  ssr: false,
});

/**
 * Component for "Map" Slices.
 */
const Map = ({ slice }: MapProps): JSX.Element => {
  return (
    <section
      suppressHydrationWarning
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-16 md:mt-36"
    >
      <MapContainer
        style={{ height: "50vh" }}
        zoom={13}
        dragging={true}
        scrollWheelZoom={false}
        center={[
          slice.primary.coordinates.latitude,
          slice.primary.coordinates.longitude,
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            slice.primary.coordinates.latitude,
            slice.primary.coordinates.longitude,
          ]}
        >
          <Tooltip>{slice.primary.marker_label}</Tooltip>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
