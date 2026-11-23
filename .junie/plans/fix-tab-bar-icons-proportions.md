---
sessionId: session-261123-143025-1arr
---

# Analysis & Solution

### Overview
The tab bar icons are rendering disproportionately because the `<Image>` components have no explicit size constraints, causing them to render at their native PNG size (120×120px) instead of fitting within the 48px icon frame allocated by the tab bar.

### Root Cause
The `TabIcon` component in `src/app/(tabs)/_layout.tsx` uses class names (`tabs-glyph`, `tabs-pill`, `tabs-active`) that are never defined in `global.css` or anywhere else. NativeWind only processes utility classes (like `w-6 h-6`) at compile time; custom class names require explicit CSS definitions which don't exist.

### Solution Approach
Replace the undefined CSS class names with inline styles that explicitly set dimensions and layout properties. This approach:
1. Immediately constrains the `<Image>` to 24×24px (half the 48px iconFrame)
2. Centers the icon within the tab bar item using flexbox
3. Provides visual feedback for the active tab state with a pill-shaped background
4. Eliminates the dependency on undefined CSS classes

### Why This Works
- The `tabBarIconStyle` prop already allocates a 48×48px container for each icon
- By setting the `<Image>` to 24×24px with `resizeMode="contain"`, the icon scales proportionally within the allocated space
- Centering with flexbox ensures the icon is positioned correctly within the tab bar
- The pill-shaped background (48×48px with 24px border radius) provides a subtle active state indicator

# Technical Details

### Current Implementation
**`src/app/(tabs)/_layout.tsx`** — The `TabIcon` component currently uses:
```tsx
<View className="tabs-icon">
    <View className={clsx('tabs-pill', { 'tabs-active': focused })}>
        <Image source={icon as any} resizeMode="contain" className="tabs-glyph"/>
    </View>
</View>
```

**`global.css`** — Only imports Tailwind/NativeWind base files. No custom classes are defined.

**`constants/theme.ts`** — Defines `tabBar.iconFrame: 48px` and `tabBar.height: 72px`

### Proposed Changes
**`src/app/(tabs)/_layout.tsx`** — Replace the `TabIcon` implementation with inline styles:
```tsx
const TabIcon = ({focused, icon}: TabIconProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? 'rgba(255,255,255,0.2)' : 'transparent'
            }}>
                <Image 
                    source={icon as any} 
                    resizeMode="contain" 
                    style={{ width: 24, height: 24 }}
                />
            </View>
        </View>
    );
};
```

### Key Decisions
1. **Inline styles over CSS classes**: Eliminates the dependency on undefined CSS classes and provides immediate, predictable styling
2. **24px icon size**: Half of the 48px iconFrame, leaving room for the pill-shaped background and visual breathing room
3. **Pill-shaped active indicator**: A 48×48px circle (borderRadius: 24) with semi-transparent white background provides subtle visual feedback for the active tab
4. **Flexbox centering**: Ensures the icon remains centered within the tab bar item regardless of screen size or orientation

# Delivery Steps

###   Step 1: Set explicit dimensions on the Image component in TabIcon
Add inline styles to constrain the Image dimensions within the TabIcon component
- Replace `className="tabs-glyph"` on the `<Image>` with `style={{ width: 24, height: 24 }}` to force the icon to 24×24px (half of the 48px iconFrame)
- This immediately resolves the disproportionate rendering by explicitly sizing the image within the tab bar container

###   Step 2: Replace undefined CSS classes with inline styles for tab icon containers
Replace custom class names with inline styles on the View wrappers
- Replace `className="tabs-icon"` on the outer `<View>` with `style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}` to center the icon within the tab bar item
- Replace `className={clsx('tabs-pill', { 'tabs-active': focused })}` on the inner `<View>` with `style={{ width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? 'rgba(255,255,255,0.2)' : 'transparent' }}` to create a pill-shaped active state indicator
- This removes the dependency on undefined CSS classes and provides immediate visual feedback for the active tab