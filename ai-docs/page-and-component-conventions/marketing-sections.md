# Marketing Section Page Conventions

## Section Page to Home Page Relationship

Each marketing section page must maintain a 1-1 relationship with its corresponding section on the home page:

1. Visual Consistency
   - Use identical color schemes for section headers
     ```tsx
     // Home Page
     <h3 className="text-wawa-red-600">Digital Engagement</h3>
     
     // Section Page
     <h3 className="text-wawa-red-600">Digital Engagement</h3>
     ```
   - Maintain same iconography and visual elements
   - Keep consistent branding elements
   - Use same background colors for corresponding sections
   - Preserve card/container styling patterns

2. Content Structure Mirroring
   - Each major point from home page section expands in detail on section page
     ```tsx
     // Home Page Brief Point
     <p>Digital engagement through influencer partnerships</p>
     
     // Section Page Detailed Expansion
     <div className="implementation-detail">
       <h4>Influencer Partnership Strategy</h4>
       <p>Detailed explanation of partnership tiers...</p>
       <p>Implementation examples...</p>
     </div>
     ```
   - Maintain same hierarchical structure of information
   - Use consistent terminology between home and section pages
   - Preserve order of points from home page to section page
   - Add implementation examples while maintaining core message

3. Navigation Flow
   - Clear visual connection between home section and detailed page
   - Maintain breadcrumb navigation showing relationship
   - Keep consistent section ordering
   - Include prev/next navigation matching home page order
   ```tsx
   <SectionPage 
     title="Digital Engagement"
     prevSection={{
       title: "Previous Section",
       path: "/previous-section"
     }}
     nextSection={{
       title: "Next Section",
       path: "/next-section"
     }}
   >
   ```

4. Content Expansion Pattern
   - Home Page: Overview and key points
   - Section Page: 
     1. Detailed explanation of each key point
     2. Implementation examples (inline)
     3. Detailed case studies (dedicated sections)
     4. Metrics and outcomes
   ```tsx
   // Home Page
   <section>
     <h3>Key Point</h3>
     <p>Brief overview</p>
   </section>

   // Section Page
   <section>
     <h3>Key Point</h3>
     <p>Detailed explanation</p>
     <p>Implementation example (i.e., specific case)</p>
     
     {/* Detailed Examples Section */}
     <section className="implementation-examples">
       <h4>Case Studies</h4>
       {/* Detailed examples */}
     </section>
     
     <section className="metrics">
       <h4>Expected Outcomes</h4>
       {/* Metrics and results */}
     </section>
   </section>
   ```

5. Styling Consistency
   ```tsx
   // Shared style patterns between home and section pages
   const sharedStyles = {
     sectionContainer: "bg-wawa-gray-50 rounded-xl p-6",
     sectionHeader: "font-wawaHeading text-xl font-semibold",
     cardStyle: "bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm",
     textContent: "prose prose-lg max-w-none"
   };
   ```

Example Full Relationship:
```tsx
// Home Page Section
<section className="bg-wawa-red-50 p-6 rounded-xl">
  <h3 className="text-wawa-red-600">Digital Engagement</h3>
  <p>Brief overview of digital strategy with key points:
    - Influencer partnerships
    - Platform growth
    - Content strategy
  </p>
</section>

// Corresponding Section Page
<SectionPage title="Digital Engagement">
  {/* Main Content - Mirrors Home Structure */}
  <div className="bg-wawa-red-50 p-6 rounded-xl">
    <h3 className="text-wawa-red-600">Digital Engagement Strategy</h3>
    
    {/* Expanded Content for Each Point */}
    <div className="point-expansion">
      <h4>Influencer Partnerships</h4>
      <p>Detailed explanation...</p>
      <p>Implementation example (i.e., specific partnership case)</p>
    </div>
    
    <div className="point-expansion">
      <h4>Platform Growth</h4>
      <p>Detailed explanation...</p>
      <p>Implementation example (i.e., specific growth metric)</p>
    </div>
    
    <div className="point-expansion">
      <h4>Content Strategy</h4>
      <p>Detailed explanation...</p>
      <p>Implementation example (i.e., content calendar example)</p>
    </div>
  </div>

  {/* Implementation Examples Section */}
  <section className="implementation-examples mt-8">
    <h3>Implementation Examples</h3>
    {/* Detailed case studies */}
  </section>
</SectionPage>
```

## General Structure

Each marketing section page should follow a consistent structure:

1. Main Content Section
   - Follows existing format with prose sections
   - Uses Wawa brand colors and styling
   - Maintains current heading hierarchy

2. Implementation Examples
   - Can be integrated in two ways:
     a. Inline Examples: For simple, straightforward examples
     b. Dedicated Subsections: For detailed implementations

### Inline Examples

Use inline examples when:
- The example is brief (1-2 sentences)
- It directly illustrates the point being made
- No additional context is needed

Format:
```tsx
<p>
  [Main concept explanation] 
  (i.e., A premiere partnership could be a food creator with 100k+ followers 
  who specializes in food reviews and fast food comparisons)
</p>
```

### Dedicated Subsections

Use dedicated subsections when:
- The example requires detailed explanation
- Multiple examples need to be grouped
- Additional context or implementation details are needed

Format:
```tsx
<section className="implementation-examples mt-8 bg-wawa-gray-50 rounded-xl p-6">
  <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">
    Implementation Examples
  </h3>
  
  <div className="space-y-6">
    <div className="bg-white rounded-lg p-4">
      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
        [Example Category]
      </h4>
      <p className="text-wawa-gray-700">
        [Detailed example implementation]
      </p>
    </div>
    
    {/* Additional example blocks as needed */}
  </div>
</section>
```

## Example Categories

1. Partnerships & Collaborations
   - Detailed partnership examples
   - Collaboration case studies
   - Success metrics and outcomes

2. Media & Content
   - Content creation examples
   - Media licensing implementations
   - Brand integration cases

3. Marketing Initiatives
   - Campaign examples
   - Promotion implementations
   - Event case studies

4. Strategic Implementations
   - Tactical execution examples
   - Resource allocation cases
   - Timeline implementations

## Styling Guidelines

1. Example Blocks
   - Use `bg-wawa-gray-50` for section background
   - Use `bg-white` for individual example cards
   - Maintain consistent padding and margins

2. Typography
   - Use `font-wawaHeading` for headers
   - Maintain brand color scheme
   - Use appropriate text sizes for hierarchy

3. Visual Elements
   - Include relevant icons where applicable
   - Use brand-appropriate imagery
   - Maintain accessibility standards

## Content Guidelines

1. Example Structure
   - Start with clear objective/goal
   - Provide concrete implementation details
   - Include expected outcomes or results
   - Add relevant metrics when applicable

2. Writing Style
   - Use clear, concise language
   - Provide specific, actionable details
   - Include relevant numbers and metrics
   - Maintain professional tone

3. Example Selection
   - Choose relevant, realistic examples
   - Align with section objectives
   - Vary between different scales/scopes
   - Include mix of short-term and long-term implementations

## Implementation Notes

1. When to Use Inline Examples:
   - Simple partnership examples
   - Quick metric illustrations
   - Basic implementation notes
   - Direct comparisons

2. When to Use Dedicated Subsections:
   - Complex partnership details
   - Multi-step implementations
   - Case studies
   - Detailed success stories

3. Content Organization:
   - Group related examples
   - Maintain logical flow
   - Progress from simple to complex
   - Connect to main section content

## Example Implementation Template

```tsx
// Basic section with inline example
<div className="prose prose-lg max-w-none">
  <p>
    [Main concept] (i.e., [brief example])
  </p>
</div>

// Detailed implementation section
<section className="implementation-examples mt-8 bg-wawa-gray-50 rounded-xl p-6">
  <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">
    Implementation Examples
  </h3>
  
  <div className="space-y-6">
    <div className="bg-white rounded-lg p-4">
      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
        Example: [Category]
      </h4>
      <p className="text-wawa-gray-700">
        [Detailed implementation details]
      </p>
      {/* Optional metrics/results */}
      <div className="mt-4 text-sm text-wawa-gray-600">
        <strong>Results:</strong> [Metrics or outcomes]
      </div>
    </div>
  </div>
</section>
``` 