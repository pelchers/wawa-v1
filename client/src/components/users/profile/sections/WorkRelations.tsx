import { User } from '../../../../types/users';
import { profileStyles as styles } from '../../../../styles/profile';

interface WorkRelationsProps {
  data: User;
}

export const WorkRelations: React.FC<WorkRelationsProps> = ({ data }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Work Relationships</h2>
      
      <div className={styles.grid}>
        {/* Reports To */}
        <div>
          <h3 className={styles.label}>Reports To</h3>
          {data.reportsTo ? (
            <div className={styles.flexRow}>
              <div>
                <p className={styles.value}>
                  {data.reportsTo.firstName} {data.reportsTo.lastName}
                </p>
                <p className={styles.description}>
                  {data.reportsTo.jobTitle}
                </p>
              </div>
            </div>
          ) : data.managerNameManual ? (
            <p className={styles.value}>{data.managerNameManual}</p>
          ) : (
            <p className={styles.emptyState}>No manager information</p>
          )}
        </div>

        {/* Direct Reports */}
        <div>
          <h3 className={styles.label}>Direct Reports</h3>
          {data.manages && data.manages.length > 0 ? (
            <div className="space-y-2">
              {data.manages.map(report => (
                <div key={report.id} className={styles.flexRow}>
                  <div>
                    <p className={styles.value}>
                      {report.firstName} {report.lastName}
                    </p>
                    <p className={styles.description}>{report.jobTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.emptyState}>No direct reports</p>
          )}
        </div>
      </div>
    </section>
  );
}; 