import { User, Link } from '../../../../../types/users';
import { profileStyles as styles } from '../../../../../styles/profile';
import { useState, useEffect, useRef } from 'react';

interface SocialEditProps {
  data: User;
  onChange: (data: Partial<User>) => void;
}

export const SocialEdit: React.FC<SocialEditProps> = ({ data, onChange }) => {
  const [formData, setFormData] = useState({
    links: data.links || []
  });

  // Use ref to track if this is the initial render
  const isInitialMount = useRef(true);

  // Send data to parent component only when form data changes
  useEffect(() => {
    // Skip the first render to avoid infinite loops
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    onChange(formData);
  }, [formData]); // Remove onChange from dependencies

  const handleAddLink = () => {
    setFormData(prev => ({
      ...prev,
      links: [...prev.links, {
        id: `temp-${Date.now()}`,
        userId: data.id,
        type: 'website',
        url: '',
        title: '',
        primary: false
      }]
    }));
  };

  const handleLinkChange = (index: number, field: keyof Link, value: any) => {
    setFormData(prev => ({
      ...prev,
      links: prev.links.map((link, i) => 
        i === index ? { ...link, [field]: value } : link
      )
    }));
  };

  const handleRemoveLink = (index: number) => {
    setFormData(prev => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index)
    }));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Network & Connections</h2>

      {/* Connection Stats - View Only */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className={styles.card}>
          <p className={styles.label}>Connections</p>
          <p className={styles.value}>{data.connections?.length || 0}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Followers</p>
          <p className={styles.value}>{data.followers?.length || 0}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Following</p>
          <p className={styles.value}>{data.following?.length || 0}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Team Memberships</p>
          <p className={styles.value}>{data.teamMemberships?.length || 0}</p>
        </div>
      </div>

      {/* Professional Links */}
      <div className={styles.spacer}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={styles.subTitle}>Professional Links</h3>
          <button 
            onClick={handleAddLink}
            className="bg-wawa-yellow-400 text-wawa-red-600 py-2 px-4 rounded-md hover:bg-wawa-yellow-500 transition-colors text-sm"
          >
            Add Link
          </button>
        </div>

        <div className="space-y-4">
          {formData.links.map((link, index) => (
            <div key={link.id} className={`${styles.card} relative`}>
              <button
                onClick={() => handleRemoveLink(index)}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-wawa-red-600 hover:bg-wawa-red-700 
                           flex items-center justify-center transition-colors shadow-sm font-bold"
                aria-label="Remove link"
              >
                <span className="text-white text-sm leading-none">X</span>
              </button>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`link-type-${index}`} className={styles.label}>
                    Type
                  </label>
                  <select
                    id={`link-type-${index}`}
                    value={link.type}
                    onChange={(e) => handleLinkChange(index, 'type', e.target.value)}
                    className="form-select w-full"
                  >
                    <option value="website">Website</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="github">GitHub</option>
                    <option value="twitter">Twitter</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={`link-title-${index}`} className={styles.label}>
                    Title
                  </label>
                  <input
                    id={`link-title-${index}`}
                    type="text"
                    value={link.title || ''}
                    onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
                    className="form-input w-full"
                    placeholder="Enter link title"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor={`link-url-${index}`} className={styles.label}>
                  URL
                </label>
                <input
                  id={`link-url-${index}`}
                  type="url"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                  className="form-input w-full"
                  placeholder="Enter URL"
                />
              </div>
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={link.primary}
                    onChange={(e) => handleLinkChange(index, 'primary', e.target.checked)}
                    className="form-checkbox"
                  />
                  <span className={styles.label}>Primary Link</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 