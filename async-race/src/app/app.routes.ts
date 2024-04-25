import { Routes } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

export const routes: Routes = [
    {
        path: "garage",
        loadComponent: () => import("./views/garage/garage.component").then((m) => m.GarageComponent),
    },
    {
        path: "winners",
        loadComponent: () => import("./views/winners/winners.component").then((m) => m.WinnersComponent),
    },
    { path: "", redirectTo: "/garage", pathMatch: "full" },
    { path: "**", component: NotFoundComponent },
];
