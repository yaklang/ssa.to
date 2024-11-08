import React from 'react';
import {composeProviders} from '@docusaurus/theme-common';
import {
    ColorModeProvider,
    AnnouncementBarProvider,
    ScrollControllerProvider,
    NavbarProvider,
    PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal';

import { DocsPreferredVersionContextProvider } from '@docusaurus/plugin-content-docs/client';

const Provider = composeProviders([
    ColorModeProvider,
    AnnouncementBarProvider,
    ScrollControllerProvider,
    PluginHtmlClassNameProvider,
    DocsPreferredVersionContextProvider,
    NavbarProvider,
].filter(Boolean));

export default function LayoutProvider({children}) {
    return <Provider>{children}</Provider>;
}