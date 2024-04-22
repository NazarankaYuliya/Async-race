import { Routes } from "@angular/router";

import { NotFoundComponent } from "./components/not-found/not-found.component";
import { GarageComponent } from "./pages/garage/garage.component";
import { WinnersComponent } from "./pages/winners/winners.component";

export const routes: Routes = [
    { path: "garage", component: GarageComponent },
    { path: "winners", component: WinnersComponent },
    { path: "", redirectTo: "/garage", pathMatch: "full" },
    { path: "**", component: NotFoundComponent },
];
