import { User } from '../../../../../types/users';
import { profileStyles as styles } from '../../../../../styles/profile';
import { useState, useEffect, useRef } from 'react';

interface WorkRelationsEditProps {
  data: User;
  onChange: (data: Partial<User>) => void;
}

export const WorkRelationsEdit: React.FC<WorkRelationsEditProps> = ({ 
  data,
  onChange 
}) => {
  const [formData, setFormData] = useState({
    managerId: data.managerId || '',
    managerNameManual: data.managerNameManual || '',
    isExternalManager: !!data.managerNameManual
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

    const updateData = {
      managerId: formData.isExternalManager ? '' : formData.managerId,
      managerNameManual: formData.isExternalManager ? formData.managerNameManual : ''
    };
    
    onChange(updateData);
  }, [formData]); // Remove onChange from dependencies

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggleExternal = () => {
    setFormData(prev => ({
      ...prev,
      isExternalManager: !prev.isExternalManager,
      managerId: '',
      managerNameManual: ''
    }));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Work Relationships</h2>
      
      <div className={styles.grid}>
        {/* Reports To */}
        <div>
          <h3 className={styles.label}>Reports To</h3>
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isExternalManager}
                onChange={handleToggleExternal}
                className="form-checkbox"
              />
              <span className={styles.label}>External Manager</span>
            </label>
          </div>

          {formData.isExternalManager ? (
            <input
              type="text"
              name="managerNameManual"
              value={formData.managerNameManual}
              onChange={handleChange}
              placeholder="Enter manager's name"
              className="form-input w-full"
            />
          ) : (
            <div>
              <label htmlFor="managerId" className={styles.label}>Select Manager</label>
              <select
                id="managerId"
                name="managerId"
                value={formData.managerId}
                onChange={handleChange}
                className="form-select w-full"
                aria-label="Select Manager"
              >
                <option value="">Select Manager</option>
                {data.reportsTo && (
                  <option value={data.reportsTo.id}>
                    {data.reportsTo.firstName} {data.reportsTo.lastName}
                  </option>
                )}
              </select>
            </div>
          )}
        </div>

        {/* Direct Reports - View Only */}
        <div>
          <h3 className={styles.label}>Direct Reports</h3>
          <div className="space-y-2">
            {data.manages && data.manages.length > 0 ? (
              data.manages.map(report => (
                <div key={report.id} className={styles.card}>
                  <p className={styles.value}>
                    {report.firstName} {report.lastName}
                  </p>
                  <p className={styles.description}>{report.jobTitle}</p>
                </div>
              ))
            ) : (
              <p className={styles.emptyState}>No direct reports</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 