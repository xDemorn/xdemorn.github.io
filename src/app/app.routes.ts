import { Routes } from '@angular/router';
import { ProfileSelector } from '@pages/profile-selector/profile-selector';
import { hasNotSelectedProfile, hasSelectedProfile } from './guards/profile-guard';
import { Desktop } from '@pages/desktop/desktop';

export const routes: Routes = [
    {
        path: '',
        title: 'Profile selection',
        component: ProfileSelector,
        canMatch: [hasNotSelectedProfile],
        runGuardsAndResolvers: 'always'
    },
    {
        path: '',
        title: 'Desktop',
        component: Desktop,
        canMatch: [hasSelectedProfile],
        runGuardsAndResolvers: 'always'
    }
];
