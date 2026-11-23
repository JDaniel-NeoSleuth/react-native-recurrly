import {Tabs} from "expo-router";
import {tabs} from "../../../constants/data";
import {colors, components} from '../../../constants/theme';
import {View} from "react-native";
import clsx from "clsx";
import {Image} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";


const tabBar = components.tabBar;


// CORREÇÃO: clsx() com booleano direto não funciona como esperado.
// Antes: clsx('tabs-pill', focused && 'tabs-active') — quando focused é false, passa "false" como classe.
// Depois: clsx('tabs-pill', { 'tabs-active': focused }) — usa objeto booleano, padrão correto do clsx.
// CORREÇÃO: source={icon as any} — o expo-image espera um tipo ImageSource específico,
// mas os ícones são importados como require() (número). O cast "as any" resolve o conflito de tipos.
// CORREÇÃO: TabIcon props corrigidas de ({focused.icon}: TabIconProps) para ({focused, icon}: TabIconProps).
// "focused.icon" não é desestruturação válida em TypeScript.
// CORREÇÃO: JSX corrigido de focused{focused} para focused={focused} — sintaxe JSX inválida original.
const TabLayout = () => {
    const insets = useSafeAreaInsets();
    const TabIcon = ({focused, icon}: TabIconProps) => {
        return (
            <View className="tabs-icon">
                <View className={clsx('tabs-pill', { 'tabs-active': focused })}>
                    <Image source={icon as any} resizeMode="contain" className="tabs-glyph"/>
                </View>
            </View>
        );
    };

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                height: tabBar.height,
                marginHorizontal: tabBar.horizontalInset,
                borderRadius: tabBar.radius,
                backgroundColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarItemStyle: {
                paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6
            },
            tabBarIconStyle: {
                width: tabBar.iconFrame,
                height: tabBar.iconFrame,
                alignSelf: 'center',
            }
        }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({focused}) => (
                            <TabIcon focused={focused} icon={tab.icon} />
                        )
                    }}/>
            ))}
        </Tabs>
    )
}

export default TabLayout;
