// CORREÇÃO: Import corrigido de './icons' para './icon'.
// O arquivo se chama "icon.tsx" (sem "s"), não "icons.tsx".
// O import errado causava erro de módulo não encontrado em tempo de execução (erro 500 no Expo Go).
import {icons} from './icon';

export const tabs = [
    {name: 'index', title: 'Home', icon: icons.home },
    {name: 'subscriptions', title: 'Subscriptions', icon: icons.wallet },
    {name: 'insights', title: 'Insights', icon: icons.activity },
    // CORREÇÃO: "icons.settings" mudou para "icons.setting".
    // O ícone no arquivo icon.tsx é exportado como "setting" (singular), não "settings" (plural).
    // Usar "settings" causava undefined, quebrando a aba de configurações.
    {name: 'settings', title: 'Settings', icon: icons.setting },

];