import type { LegacyRef } from "react";
import type { Settings } from "react-slick";
import type Slider from "react-slick";

type SliderSettingsType = Settings;
type SliderType = Slider;
type SliderRefType = LegacyRef<SliderType>;

export type { SliderSettingsType, SliderType, SliderRefType };
