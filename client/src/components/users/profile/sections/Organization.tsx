import { User } from '../../../../types/users';
import { profileStyles as styles } from '../../../../styles/profile';

interface OrganizationProps {
  data: User;
}

export const Organization: React.FC<OrganizationProps> = ({ data }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Organization</h2>
      
      <div className={styles.grid}>
        {/* Company Information */}
        <div>
          <h3 className={styles.label}>Company</h3>
          {data.company ? (
            <div className="space-y-2">
              <p className={styles.value}>{data.company.name}</p>
              {data.company.description && (
                <p className={styles.description}>{data.company.description}</p>
              )}
            </div>
          ) : data.externalCompany ? (
            <p className={styles.value}>{data.externalCompany}</p>
          ) : (
            <p className={styles.emptyState}>No company information</p>
          )}
        </div>

        {/* Department Information */}
        <div>
          <h3 className={styles.label}>Department</h3>
          {data.department ? (
            <div className="space-y-2">
              <p className={styles.value}>{data.department.name}</p>
              {data.department.description && (
                <p className={styles.description}>{data.department.description}</p>
              )}
            </div>
          ) : data.externalDepartment ? (
            <p className={styles.value}>{data.externalDepartment}</p>
          ) : (
            <p className={styles.emptyState}>No department information</p>
          )}
        </div>
      </div>
    </section>
  );
}; 