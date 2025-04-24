import { User, Education, Experience, Accolade, Reference } from '../../../../../types/users';
import { profileStyles as styles } from '../../../../../styles/profile';
import { useState, useEffect, useRef } from 'react';
import { TagInput } from '../../../../inputs/TagInput';

interface HistoryEditProps {
  data: User;
  onChange: (data: Partial<User>) => void;
}

export const HistoryEdit: React.FC<HistoryEditProps> = ({ data, onChange }) => {
  const [formData, setFormData] = useState({
    education: data.education || [],
    experience: data.experience || [],
    accolades: data.accolades || [],
    references: data.references || []
  });

  // Add useRef for tracking initial mount
  const isInitialMount = useRef(true);
  
  // Add useEffect for sending data to parent
  useEffect(() => {
    // Skip the first render to avoid infinite loops
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    // Send data to parent component
    onChange(formData);
  }, [formData]); // Remove onChange from dependencies

  // Education handlers
  const handleAddEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: `temp-${Date.now()}`,
        userId: data.id,
        institution: '',
        degree: '',
        field: '',
        startYear: new Date().getFullYear(),
        ongoing: true
      }]
    }));
  };

  const handleEducationChange = (index: number, field: keyof Education, value: any) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const handleRemoveEducation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  // Experience handlers
  const handleAddExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: `temp-${Date.now()}`,
        userId: data.id,
        position: '',
        startDate: new Date(),
        current: true,
        description: ''
      }]
    }));
  };

  const handleExperienceChange = (index: number, field: keyof Experience, value: any) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleRemoveExperience = (index: number) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Professional History</h2>

      {/* Education Section */}
      <div className={styles.spacer}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={styles.subTitle}>Education</h3>
          <button 
            onClick={handleAddEducation}
            className="bg-wawa-yellow-400 text-wawa-red-600 py-2 px-4 rounded-md hover:bg-wawa-yellow-500 transition-colors text-sm"
          >
            Add Education
          </button>
        </div>
        
        <div className="space-y-4">
          {formData.education.map((edu, index) => (
            <div key={edu.id} className={`${styles.card} relative`}>
              <button
                onClick={() => handleRemoveEducation(index)}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-wawa-red-600 hover:bg-wawa-red-700 
                         flex items-center justify-center transition-colors shadow-sm font-bold"
                aria-label="Remove education"
              >
                <span className="text-white text-sm leading-none">X</span>
              </button>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={styles.label}>Institution</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                    className="form-input w-full"
                  />
                </div>
                <div>
                  <label className={styles.label}>Degree</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    className="form-input w-full"
                  />
                </div>
                <div>
                  <label className={styles.label}>Field</label>
                  <input
                    type="text"
                    value={edu.field}
                    onChange={(e) => handleEducationChange(index, 'field', e.target.value)}
                    className="form-input w-full"
                  />
                </div>
                <div>
                  <label className={styles.label}>Start Year</label>
                  <input
                    type="number"
                    value={edu.startYear}
                    onChange={(e) => handleEducationChange(index, 'startYear', Number(e.target.value))}
                    className="form-input w-full"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={edu.ongoing}
                    onChange={(e) => handleEducationChange(index, 'ongoing', e.target.checked)}
                    className="form-checkbox"
                  />
                  <span className={styles.label}>Currently Studying</span>
                </label>
              </div>
              {!edu.ongoing && (
                <div className="mt-2">
                  <label className={styles.label}>End Year</label>
                  <input
                    type="number"
                    value={edu.endYear}
                    onChange={(e) => handleEducationChange(index, 'endYear', Number(e.target.value))}
                    className="form-input w-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className={styles.spacer}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={styles.subTitle}>Work Experience</h3>
          <button 
            onClick={handleAddExperience}
            className="bg-wawa-yellow-400 text-wawa-red-600 py-2 px-4 rounded-md hover:bg-wawa-yellow-500 transition-colors text-sm"
          >
            Add Experience
          </button>
        </div>

        <div className="space-y-4">
          {formData.experience.map((exp, index) => (
            <div key={exp.id} className={`${styles.card} relative`}>
              <button
                onClick={() => handleRemoveExperience(index)}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-wawa-red-600 hover:bg-wawa-red-700 
                         flex items-center justify-center transition-colors shadow-sm font-bold"
                aria-label="Remove experience"
              >
                <span className="text-white text-sm leading-none">X</span>
              </button>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={styles.label}>Position</label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                    className="form-input w-full"
                  />
                </div>
                <div>
                  <label className={styles.label}>Company</label>
                  <input
                    type="text"
                    value={exp.externalCompany || ''}
                    onChange={(e) => handleExperienceChange(index, 'externalCompany', e.target.value)}
                    className="form-input w-full"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className={styles.label}>Description</label>
                <textarea
                  value={exp.description || ''}
                  onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                  className="form-textarea w-full"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label className={styles.label}>Start Date</label>
                  <input
                    type="date"
                    value={exp.startDate.toString().split('T')[0]}
                    onChange={(e) => handleExperienceChange(index, 'startDate', new Date(e.target.value))}
                    className="form-input w-full"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 mt-6">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => handleExperienceChange(index, 'current', e.target.checked)}
                      className="form-checkbox"
                    />
                    <span className={styles.label}>Current Position</span>
                  </label>
                </div>
              </div>
              {!exp.current && (
                <div className="mt-2">
                  <label className={styles.label}>End Date</label>
                  <input
                    type="date"
                    value={exp.endDate?.toString().split('T')[0]}
                    onChange={(e) => handleExperienceChange(index, 'endDate', new Date(e.target.value))}
                    className="form-input w-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 