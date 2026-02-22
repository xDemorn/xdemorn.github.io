import { AppType } from "../enums/app-types";
import { AppsService } from "../services/apps-service";
import { IApp } from "./app";

export interface IWidget {
    readonly type: AppType;
    // readonly data: IApp | null;
    readonly appsService: AppsService;

    onMinimize(): void;
    onMaximize(): void;
    onClose(): void;
}