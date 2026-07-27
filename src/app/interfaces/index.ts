import { Type } from "@angular/core";
import { Settings } from "../widgets";

export interface IApp {
    id: string;
    icon: string;
    name: string;
    component: Type<Settings>;
}

export interface Profile {
    img: string;
    name: string;
    isGuest: boolean;
}

export interface ISettings {}

export interface IWidgetDimensions {
  top: number;
  left: number;
  width: number;
  height: number;
}