# Prompt para Gemini - Localizar implementação das classes CSS no curso YouTube

---

**Contexto:** Estou seguindo um curso de YouTube sobre desenvolvimento de um app mobile chamado "Recurrly" usando React Native, Expo Router e NativeWind (Tailwind CSS para React Native). O instrutor implementa uma barra de navegação personalizada (tab bar) com ícones customizados.

**O Problema:** No meu código, o componente `TabIcon` usa 4 classes CSS personalizadas que não estão definidas em lugar nenhum:

```tsx
<View className="tabs-icon">
    <View className={clsx('tabs-pill', { 'tabs-active': focused })}>
        <Image source={icon} resizeMode="contain" className="tabs-glyph"/>
    </View>
</View>
```

As classes são:
1. `tabs-icon` — wrapper externo do ícone
2. `tabs-pill` — wrapper interno (fundo da aba)
3. `tabs-active` — estado ativo (aplicado via clsx quando `focused=true`)
4. `tabs-glyph` — aplicado diretamente no componente `<Image>` para definir o tamanho do ícone

**O que eu tenho:**
- `global.css` só importa os arquivos base do Tailwind/NativeWind — nenhuma classe customizada
- Os ícones são PNGs de 120×120 pixels
- O tema define `tabBar.iconFrame: 48px` e `tabBar.height: 72px`
- O `tabBarIconStyle` do Expo Router aloca 48×48px para cada ícone

**O que eu preciso que você faça:**

Pesquise no curso de YouTube (ou nas anotações/transcrição do curso) onde o instrutor define essas 4 classes CSS. Especificamente:

1. **Em qual arquivo** ele define essas classes? (`global.css`? `tailwind.config.js`? Um arquivo CSS separado?)

2. **Em qual timestamp/exato momento do vídeo** ele cria ou modifica esse arquivo?

3. **Qual é o conteúdo exato** das definições CSS para cada classe? Preciso saber:
   - `tabs-glyph`: qual `width` e `height` ele define? (provavelmente 24px ou similar)
   - `tabs-pill`: qual `width`, `height`, `borderRadius`, `backgroundColor`?
   - `tabs-active`: qual `backgroundColor` ou outra propriedade de estado ativo?
   - `tabs-icon`: qual `flex`, `justifyContent`, `alignItems`?

4. **Ele usa `@layer components` do NativeWind** ou define as classes diretamente no CSS?

5. **Ele usa `@apply` do Tailwind** para compor as classes ou escreve CSS puro?

6. **Há alguma configuração especial no `tailwind.config.js` ou `nativewind`** que seja necessária para essas classes funcionarem?

**Informações técnicas do meu projeto para referência:**

- Expo SDK 54 (verificar `package.json`)
- NativeWind para estilização
- Expo Router para navegação
- Biblioteca `clsx` para classes condicionais
- Estrutura de pastas: `src/app/(tabs)/_layout.tsx` (layout), `constants/theme.ts` (tema), `global.css` (CSS global)

**O que eu suspeito:**
O instrutor provavelmente definiu essas classes em algum momento do vídeo entre os timestamps 1:03:10 e 1:23:23 (seção de Tab Navigation), possivelmente em um momento que eu puli ou não notei. Ele pode ter:
- Adicionado as classes ao `global.css` usando `@layer components`
- Ou configurado um tema customizado no NativeWind
- Ou usado classes utilitárias do Tailwind diretamente em vez de nomes customizados

Por favor, localize exatamente onde e como essas classes foram implementadas no curso.

---

**Timestamps relevantes do curso:**
- 1:03:10 — Criação do Route Group `(tabs)`
- 1:03:41 — Layout de Abas (`_layout.tsx`)
- 1:09:32 — Centralização de Dados (`constants/data.ts`)
- 1:09:35 — Gestão de Ícones (`constants/icons.ts`)
- **1:11:48 — Componente `TabIcon` criado**
- **1:12:41 — Uso do `clsx` para estados ativos**
- **1:13:18 — NativeWind aplicado (tamanhos, espaçamentos)**
- 1:18:03 — Padronização das margens (tabbarIconFrame)
- 1:22:24 — SafeAreaView implementado
- 1:21:42 — contentContainerClassName para scroll
