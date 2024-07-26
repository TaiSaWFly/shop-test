import { FC, FormEvent, useEffect, useState } from "react";
import style from "./mapComponent.module.scss";
import { SDEK_ICON, SDEK_ICON_SELECTED } from "@/data/images.data";
import { initialStateLocation } from "@/data/initialState.data";
import useDeliveryPoints from "@/hooks/useDeliveryPoints";
import { IDeliveryPoint } from "@/ts/models/IDeliveryPoint";
import {
    YMaps,
    Map as YMap,
    Clusterer,
    Placemark
} from "@pbe/react-yandex-maps";
import { IGeocodePoint } from "@/ts/models/IGeocodePoint";
import Button from "@/components/common/Button/Button";
import { Minus, Plus } from "lucide-react";
import { APP_CONFIG } from "@/data/app.config";

interface MapComponentProps {
    activePoint: IDeliveryPoint | null;
    setActivePoint: (point: IDeliveryPoint | null) => void;
    pointPlace: IGeocodePoint | null;
}

const MapComponent: FC<MapComponentProps> = ({
    setActivePoint,
    activePoint,
    pointPlace
}) => {
    const [mapState, setMapState] =
        useState<ymaps.IMapState>(initialStateLocation);

    const { deliveryPoints } = useDeliveryPoints(
        mapState.center ? mapState.center : initialStateLocation.center
    );
    const mapOnChange = (event: any) => {
        const newStateMap: ymaps.IMapState = {
            center: event.originalEvent.newCenter,
            zoom: event.originalEvent.newZoom,
            bounds: event.originalEvent.newBounds
        };

        setMapState({ ...newStateMap });
    };

    useEffect(() => {
        if (!!pointPlace) {
            const newStateMap: ymaps.IMapState = {
                center: [pointPlace.coordinates[1], pointPlace.coordinates[0]],
                zoom: 14
            };

            setMapState({ ...newStateMap });
        }
    }, [pointPlace]);

    const handleZoomOn = () => {
        if (!!mapState.zoom && mapState.zoom < 21) {
            setMapState((prevState) => ({
                ...prevState,
                zoom: prevState.zoom && prevState.zoom + 1
            }));
        }
    };
    const handleZoomOut = () => {
        if (!!mapState.zoom && mapState.zoom > 0) {
            setMapState((prevState) => ({
                ...prevState,
                zoom: prevState.zoom && prevState.zoom - 1
            }));
        }
    };

    return (
        <div className={style.component}>
            <YMaps
                query={{
                    load: "package.full",
                    apikey: APP_CONFIG.YMAP_KEY
                }}
            >
                <YMap
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    state={mapState}
                    onBoundsChange={mapOnChange}
                >
                    <Clusterer
                        options={{
                            preset: "islands#invertedVioletClusterIcons",
                            groupByCoordinates: false
                        }}
                    >
                        {deliveryPoints.map((point, index) => (
                            <Placemark
                                key={index}
                                onClick={() => setActivePoint(point)}
                                options={{
                                    iconLayout: "default#image",
                                    iconImageHref:
                                        point.id === activePoint?.id
                                            ? SDEK_ICON_SELECTED.src
                                            : SDEK_ICON.src,
                                    iconImageSize:
                                        point.id === activePoint?.id
                                            ? [70, 70]
                                            : [52, 52],
                                    zIndex:
                                        point.id === activePoint?.id ? 1000 : 1
                                }}
                                geometry={[point.latitude, point.longitude]}
                            />
                        ))}
                    </Clusterer>
                </YMap>
            </YMaps>

            <div className={style.zoom_actions}>
                <Button
                    className={style.action}
                    onClick={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        handleZoomOn();
                    }}
                >
                    <Plus />
                </Button>
                <Button
                    className={style.action}
                    onClick={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        handleZoomOut();
                    }}
                >
                    <Minus />
                </Button>
            </div>
        </div>
    );
};

export default MapComponent;
