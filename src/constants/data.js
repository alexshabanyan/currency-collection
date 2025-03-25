import { arcs } from "./map/arcs";
import { geometries } from "./map/geometries";
import { land } from "./map/land";
export const worldGeoJSON = {
    type: "Topology",
    objects: {
        countries: {
            type: "GeometryCollection",
            geometries: geometries,
        },
        land: land,
    },
    arcs: arcs,
    bbox: [-180, -89.999, 180, 83.599609375],
    transform: {
        scale: [0.00360003600036, 0.00173600345378454],
        translate: [-180, -89.999]
    }
};
