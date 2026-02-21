import { Type } from "@angular/core";
import { AppBase } from "../components/app/app";

export interface IApp {
    id: string;
    icon: string;
    name: string;
    component: Type<AppBase>;
}