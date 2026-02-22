import { Type } from "@angular/core";
import { Settings } from "../widgets";

export interface IApp {
    id: string;
    icon: string;
    name: string;
    component: Type<Settings>;
}