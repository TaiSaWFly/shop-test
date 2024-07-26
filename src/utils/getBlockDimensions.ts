import { initialStateBlockDimentions } from "@/data/initialState.data";
import { BlockDimentionsType } from "@/ts/types/app.types";
import { RefObject } from "react";

const getBlockDimensions = (
    ref: RefObject<HTMLElement | null>
): BlockDimentionsType => {
    return ref.current?.clientWidth
        ? {
              offsetHeight: ref.current.offsetHeight,
              offsetLeft: ref.current.offsetLeft,
              offsetTop: ref.current.offsetTop,
              offsetWidth: ref.current.offsetWidth,
              clientWidth: ref.current.clientWidth,
              clientHeight: ref.current.clientHeight
          }
        : initialStateBlockDimentions;
};

export default getBlockDimensions;
