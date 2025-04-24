import { User } from '../../../../../types/users';
import { profileStyles as styles } from '../../../../../styles/profile';
import { useState, useEffect, useRef } from 'react';

interface OrganizationEditProps {
  data: User;
  onChange: (data: Partial<User>) => void;
}

export const OrganizationEdit: React.FC<OrganizationEditProps> = ({ 
  data,
  onChange 
}) => {
  const [formData, setFormData] = useState({
    companyId: data.companyId || '',
    externalCompany: data.externalCompany || '',
    departmentId: data.departmentId || '',
    externalDepartment: data.externalDepartment || '',
    isExternalCompany: !!data.externalCompany,
    isExternalDepartment: !!data.externalDepartment
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
    
    // Pass only the data that should be saved
    const updateData = {
      companyId: formData.isExternalCompany ? '' : formData.companyId,
      externalCompany: formData.isExternalCompany ? formData.externalCompany : '',
      departmentId: formData.isExternalDepartment ? '' : formData.departmentId,
      externalDepartment: formData.isExternalDepartment ? formData.externalDepartment : '',
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

  const handleToggleExternal = (field: 'company' | 'department') => {
    if (field === 'company') {
      setFormData(prev => ({
        ...prev,
        isExternalCompany: !prev.isExternalCompany,
        companyId: '',
        externalCompany: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        isExternalDepartment: !prev.isExternalDepartment,
        departmentId: '',
        externalDepartment: ''
      }));
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Organization</h2>
      
      <div className={styles.grid}>
        {/* Company Section */}
        <div>
          <h3 className={styles.label}>Company</h3>
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isExternalCompany}
                onChange={() => handleToggleExternal('company')}
                className="form-checkbox"
              />
              <span className={styles.label}>External Company</span>
            </label>
          </div>

          {formData.isExternalCompany ? (
            <input
              type="text"
              name="externalCompany"
              value={formData.externalCompany}
              onChange={handleChange}
              placeholder="Enter company name"
              className="form-input w-full"
            />
          ) : (
            <div>
              <label htmlFor="companyId" className={styles.label}>Select Company</label>
              <select
                id="companyId"
                name="companyId"
                value={formData.companyId}
                onChange={handleChange}
                className="form-select w-full"
                aria-label="Select Company"
              >
                <option value="">Select Company</option>
                {data.company && (
                  <option value={data.company.id}>{data.company.name}</option>
                )}
              </select>
            </div>
          )}
        </div>

        {/* Department Section */}
        <div>
          <h3 className={styles.label}>Department</h3>
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isExternalDepartment}
                onChange={() => handleToggleExternal('department')}
                className="form-checkbox"
              />
              <span className={styles.label}>External Department</span>
            </label>
          </div>

          {formData.isExternalDepartment ? (
            <input
              type="text"
              name="externalDepartment"
              value={formData.externalDepartment}
              onChange={handleChange}
              placeholder="Enter department name"
              className="form-input w-full"
            />
          ) : (
            <div>
              <label htmlFor="departmentId" className={styles.label}>Select Department</label>
              <select
                id="departmentId"
                name="departmentId"
                value={formData.departmentId}
                onChange={handleChange}
                className="form-select w-full"
                aria-label="Select Department"
              >
                <option value="">Select Department</option>
                {data.department && (
                  <option value={data.department.id}>{data.department.name}</option>
                )}
              </select>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}; 