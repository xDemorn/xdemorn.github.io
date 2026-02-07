import { Routes } from '@angular/router';
import { ProfileSelector } from './pages/profile-selector/profile-selector';
import { hasNotSelectedProfile, hasSelectedProfile } from './core/guards/profile-guard';
import { Desktop } from './pages/desktop/desktop';

export const routes: Routes = [
    {
        path: '',
        title: 'Porfolio - Select profile',
        component: ProfileSelector,
        canMatch: [hasNotSelectedProfile],
        runGuardsAndResolvers: 'always'
    },
    {
        path: '',
        title: 'Porfolio - Desktop',
        component: Desktop,
        canMatch: [hasSelectedProfile],
        runGuardsAndResolvers: 'always'
    }
];
