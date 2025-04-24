import { User } from '../../../../../types/users';
import { profileStyles as styles } from '../../../../../styles/profile';
import { useState, useEffect, useRef } from 'react';

interface CoreInfoEditProps {
  data: User;
  onChange: (data: Partial<User>) => void;
}

export const CoreInfoEdit: React.FC<CoreInfoEditProps> = ({ 
  data,
  onChange 
}) => {
  const [formData, setFormData] = useState({
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    email: data.email || ''
  });

  // Use ref to track if this is the initial render
  const isInitialMount = useRef(true);

  // Send data to parent component only when form data actually changes
  useEffect(() => {
    // Skip the first render to avoid infinite loops
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    onChange(formData);
  }, [formData]); // Remove onChange from dependencies

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Basic Information</h2>
      
      <div className={styles.grid}>
        <div>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input w-full"
            placeholder="Enter first name"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input w-full"
            placeholder="Enter last name"
          />
        </div>
        
        <div className="col-span-2">
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input w-full"
            placeholder="Enter email address"
          />
        </div>
      </div>
    </section>
  );
}; 