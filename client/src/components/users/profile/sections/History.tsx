import { User } from '../../../../types/users';
import { profileStyles as styles } from '../../../../styles/profile';

interface HistoryProps {
  data: User;
}

export const History: React.FC<HistoryProps> = ({ data }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Professional History</h2>
      
      {/* Education */}
      <div className={styles.spacer}>
        <h3 className={styles.subTitle}>Education</h3>
        {data.education && data.education.length > 0 ? (
          <div className="space-y-4">
            {data.education.map(edu => (
              <div key={edu.id} className={styles.timeline}>
                <p className={styles.value}>{edu.degree} in {edu.field}</p>
                <p className={styles.description}>{edu.institution}</p>
                <p className={styles.timestamp}>
                  {edu.startYear} - {edu.ongoing ? 'Present' : edu.endYear}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>No education history listed</p>
        )}
      </div>

      {/* Experience */}
      <div className={styles.spacer}>
        <h3 className={styles.subTitle}>Work Experience</h3>
        {data.experience && data.experience.length > 0 ? (
          <div className="space-y-4">
            {data.experience.map(exp => (
              <div key={exp.id} className={styles.timeline}>
                <p className={styles.value}>{exp.position}</p>
                <p className={styles.description}>
                  {exp.company?.name || exp.externalCompany}
                </p>
                <p className={styles.timestamp}>
                  {new Date(exp.startDate).getFullYear()} - 
                  {exp.current ? 'Present' : new Date(exp.endDate!).getFullYear()}
                </p>
                {exp.description && (
                  <p className={styles.description}>{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>No work experience listed</p>
        )}
      </div>

      {/* Accolades */}
      <div className={styles.spacer}>
        <h3 className={styles.subTitle}>Accolades</h3>
        {data.accolades && data.accolades.length > 0 ? (
          <div className={styles.grid}>
            {data.accolades.map(accolade => (
              <div key={accolade.id} className={styles.card}>
                <p className={styles.value}>{accolade.title}</p>
                <p className={styles.description}>{accolade.issuer}</p>
                <p className={styles.timestamp}>
                  {new Date(accolade.dateReceived).toLocaleDateString()}
                </p>
                {accolade.description && (
                  <p className={styles.description}>{accolade.description}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>No accolades listed</p>
        )}
      </div>

      {/* References */}
      <div>
        <h3 className={styles.subTitle}>References</h3>
        {data.references && data.references.length > 0 ? (
          <div className={styles.grid}>
            {data.references.map(ref => (
              <div key={ref.id} className={styles.card}>
                {ref.internalUser ? (
                  <>
                    <p className={styles.value}>
                      {ref.internalUser.firstName} {ref.internalUser.lastName}
                    </p>
                    <p className={styles.description}>{ref.internalUser.jobTitle}</p>
                  </>
                ) : (
                  <>
                    <p className={styles.value}>{ref.externalName}</p>
                    <p className={styles.description}>{ref.position}</p>
                  </>
                )}
                <p className={styles.description}>{ref.company}</p>
                <p className={styles.timestamp}>{ref.relationship}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>No references listed</p>
        )}
      </div>
    </section>
  );
}; 