# Feature Toggles Guide

## Overview
Feature toggles allow you to enable or disable components across the application from a single configuration file. This is useful for:
- Development and testing
- Feature rollouts
- A/B testing
- Environment-specific features

## Location
The feature toggles are defined in `client/src/utils/featureToggles.ts`

## Usage

### 1. Adding a New Toggle

In `featureToggles.ts`, add your new toggle to the interface and the toggles object:

```typescript
interface FeatureToggles {
  showTestPanel: boolean;
  showNewFeature: boolean;  // Add your new toggle here
}

export const featureToggles: FeatureToggles = {
  showTestPanel: true,
  showNewFeature: false,  // Set initial state
};
```

### 2. Using Toggles in Components

There are two ways to use feature toggles:

#### Method 1: Early Return
```typescript
import { isFeatureEnabled } from '../../utils/featureToggles';

const MyComponent = () => {
  if (!isFeatureEnabled('showNewFeature')) {
    return null;
  }

  return <div>Feature Content</div>;
};
```

#### Method 2: Conditional Rendering
```typescript
import { isFeatureEnabled } from '../../utils/featureToggles';

const ParentComponent = () => {
  return (
    <div>
      {isFeatureEnabled('showNewFeature') && <MyComponent />}
    </div>
  );
};
```

### 3. Current Available Toggles

| Toggle Name | Description | Default Value |
|------------|-------------|---------------|
| showTestPanel | Controls visibility of the test panel | true |

### 4. Best Practices

1. **Naming Convention**:
   - Use camelCase
   - Start with a verb (show, enable, allow)
   - Be descriptive (showTestPanel vs testPanel)

2. **Documentation**:
   - Comment the purpose of each toggle
   - Note any dependencies between toggles
   - Document temporary toggles with removal dates

3. **Implementation**:
   - Keep toggle logic simple
   - Avoid nested toggle conditions
   - Clean up unused toggles

4. **Testing**:
   - Test components with toggles in both states
   - Include toggle state in bug reports
   - Verify toggle behavior in all environments

### 5. Examples

#### Component with Multiple Toggles
```typescript
import { isFeatureEnabled } from '../../utils/featureToggles';

const ComplexComponent = () => {
  const showFeatureA = isFeatureEnabled('showFeatureA');
  const showFeatureB = isFeatureEnabled('showFeatureB');

  return (
    <div>
      {showFeatureA && <FeatureA />}
      <AlwaysShownContent />
      {showFeatureB && <FeatureB />}
    </div>
  );
};
```

#### Toggle with Fallback
```typescript
import { isFeatureEnabled } from '../../utils/featureToggles';

const FeatureWithFallback = () => {
  return isFeatureEnabled('showNewVersion') 
    ? <NewFeature />
    : <LegacyFeature />;
};
```

## Troubleshooting

### Common Issues

1. **Toggle Not Working**
   - Verify toggle name matches exactly
   - Check import path
   - Confirm toggle is defined in featureToggles.ts

2. **TypeScript Errors**
   - Ensure toggle is added to FeatureToggles interface
   - Check for typos in toggle names

### Support

For questions or issues:
1. Check this guide
2. Review featureToggles.ts
3. Contact the development team

## Future Enhancements

Planned improvements:
- Environment-specific toggles
- User-specific toggles
- Toggle persistence
- Toggle analytics 