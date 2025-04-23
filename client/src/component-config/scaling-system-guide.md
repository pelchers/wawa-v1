# Scaling System Guide

## Overview
The scaling system allows dynamic resizing of content while maintaining fixed navigation elements. It supports both global scaling and mobile-specific scaling, making it ideal for responsive design testing and content optimization.

## Architecture

### 1. Configuration (featureConfig.ts)
```typescript
interface ScalingConfiguration {
  global: {
    enabled: boolean;
    scale: number;  // 1 = 100%, 0.5 = 50%, 1.5 = 150%
  };
  mobile: {
    enabled: boolean;
    scale: number;
    breakpoint: number;  // Mobile breakpoint in pixels
    scaleUpContent: boolean;
  };
}
```

### 2. Components
- **ScaleWrapper**: Core component that applies scaling
- **MainLayout**: Manages the layout structure and fixed elements
- **App**: Root component that provides the application context

## Implementation Details

### 1. Scale Wrapper Component
```typescript
const ScaleWrapper: FC<ScaleWrapperProps> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      ...getScaledStyles(screenWidth),
      minHeight: '100%',
      width: '100%',
      transformOrigin: 'top center',
    }}>
      {children}
    </div>
  );
};
```

### 2. Layout Structure
```typescript
<MainLayout>
  {/* Fixed Navigation Elements */}
  <WawaLogo />
  <BackButton />
  <SettingsMenu />
  
  {/* Scalable Content */}
  <ScaleWrapper>
    {pageContent}
  </ScaleWrapper>
</MainLayout>
```

### 3. Container Height Adjustment
```typescript
// In MainLayout.tsx
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="pt-12" 
      style={{ 
        height: `${100 / getComputedScale(screenWidth)}vh`,
        minHeight: '100vh'
      }}
    >
      <ScaleWrapper>
        {children}
      </ScaleWrapper>
    </div>
  );
};
```

The container height adjustment is crucial because:
1. It compensates for the scale factor to prevent white space
2. Uses viewport height (vh) to maintain full-page scaling
3. Includes minHeight to ensure minimum content area
4. Adjusts dynamically with window resizing

### 4. Scale Styles
```typescript
// In featureConfig.ts
export const getScaledStyles = (screenWidth: number) => {
  const scale = getComputedScale(screenWidth);
  
  return {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',  // Align with screen edge
    width: `${100 / scale}%`,     // Compensate width for scaling
    height: 'auto',               // Allow height to adjust naturally
  };
};
```

Key points about the scaling styles:
1. transformOrigin: 'top left' ensures content aligns with screen edges
2. width compensation maintains full-width after scaling
3. height: 'auto' allows content to determine its natural height
4. Scale is applied at the wrapper level to affect all child content

## Usage

### 1. Configuring Scale Settings
```typescript
// In featureConfig.ts
export const scalingConfig: ScalingConfiguration = {
  global: {
    enabled: true,
    scale: 0.8,  // Scale everything to 80%
  },
  mobile: {
    enabled: true,
    scale: 0.9,
    breakpoint: 768,
    scaleUpContent: false,
  }
};
```

### 2. Applying to Pages
```typescript
// In your page component
const MyPage = () => {
  return (
    <div className="page-content">
      {/* Content will be scaled based on configuration */}
      <h1>Page Title</h1>
      <p>Content that scales...</p>
    </div>
  );
};
```

## Key Features

### 1. Fixed Elements
Elements outside the ScaleWrapper remain unaffected by scaling:
- Navigation buttons
- Headers
- Floating menus
- Action buttons

### 2. Responsive Scaling
The system handles different screen sizes:
- Desktop: Uses global scaling if enabled
- Mobile: Uses mobile-specific scaling below breakpoint
- Maintains aspect ratios and layouts

### 3. Performance
- Uses CSS transforms for smooth scaling
- Efficiently handles window resizing
- Minimal impact on rendering performance

## Best Practices

### 1. Content Organization
```typescript
// Good: Properly separated fixed and scaled content
<MainLayout>
  <FixedNavigation />
  <ScaleWrapper>
    <PageContent />
  </ScaleWrapper>
</MainLayout>

// Bad: Mixed scaling contexts
<MainLayout>
  <ScaleWrapper>
    <FixedNavigation /> {/* Don't put fixed elements inside ScaleWrapper */}
    <PageContent />
  </ScaleWrapper>
</MainLayout>
```

### 2. Scale Values
- Use values between 0.5 and 1.5 for best results
- Test thoroughly at different screen sizes
- Consider content readability when scaling

### 3. Breakpoints
- Align with your design system's breakpoints
- Test transitions between breakpoints
- Consider device-specific behaviors

## Troubleshooting

### Common Issues

1. **Content Overflow**
   ```css
   /* Solution: Add overflow handling */
   .scaled-content {
     overflow: hidden;
     position: relative;
   }
   ```

2. **Fixed Element Positioning**
   ```typescript
   // Ensure z-index hierarchy
   const fixedStyles = {
     position: 'fixed',
     zIndex: 50,  // Higher than scaled content
   };
   ```

3. **Scale Transitions**
   ```css
   /* Add smooth transitions */
   .scale-wrapper {
     transition: transform 0.3s ease;
   }
   ```

### Debug Tips
- Use browser dev tools to inspect scaled elements
- Check transform origins when content appears misaligned
- Monitor performance with React DevTools

## Future Enhancements

Planned improvements:
1. Scale presets for common device sizes
2. Animation options for scale changes
3. Per-component scale overrides
4. Scale persistence across sessions
5. Integration with theme system

## Support

For issues or questions:
1. Check this guide
2. Review featureConfig.ts settings
3. Inspect browser console for warnings
4. Contact development team 