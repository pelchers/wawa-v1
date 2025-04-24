import { User } from '../../../../../types/users';
import { profileStyles as styles } from '../../../../../styles/profile';
import { useState, useEffect, useRef } from 'react';

interface ProfessionalEditProps {
  data: User;
  onChange: (data: Partial<User>) => void;
}

export const ProfessionalEdit: React.FC<ProfessionalEditProps> = ({ 
  data,
  onChange 
}) => {
  const [formData, setFormData] = useState({
    jobTitle: data.jobTitle || '',
    bio: data.bio || '',
    yearsAtCompany: data.yearsAtCompany || 0,
    yearsInDept: data.yearsInDept || 0,
    yearsInRole: data.yearsInRole || 0
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.startsWith('years') ? Number(value) : value
    }));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Professional Details</h2>
      
      <div className="space-y-4">
        <div>
          <label className={styles.label} htmlFor="jobTitle">
            Current Position
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="form-input w-full"
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="bio">
            Professional Summary
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="form-textarea w-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={styles.label} htmlFor="yearsAtCompany">
              Company Tenure
            </label>
            <input
              type="number"
              id="yearsAtCompany"
              name="yearsAtCompany"
              value={formData.yearsAtCompany}
              onChange={handleChange}
              min="0"
              className="form-input w-full"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="yearsInDept">
              Department Tenure
            </label>
            <input
              type="number"
              id="yearsInDept"
              name="yearsInDept"
              value={formData.yearsInDept}
              onChange={handleChange}
              min="0"
              className="form-input w-full"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="yearsInRole">
              Role Tenure
            </label>
            <input
              type="number"
              id="yearsInRole"
              name="yearsInRole"
              value={formData.yearsInRole}
              onChange={handleChange}
              min="0"
              className="form-input w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 