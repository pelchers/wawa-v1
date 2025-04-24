import { User } from '../../../../types/users';
import { profileStyles as styles } from '../../../../styles/profile';

interface CoreInfoProps {
  data: User;
  isCurrentUser?: boolean;
}

export const CoreInfo: React.FC<CoreInfoProps> = ({ data, isCurrentUser }) => {
  return (
    <section className={styles.section}>
      <div className={styles.flexRow}>
        <div>
          <h1 className={styles.sectionTitle}>
            {data.firstName} {data.lastName}
          </h1>
          {data.jobTitle && (
            <p className={styles.description}>{data.jobTitle}</p>
          )}
        </div>
        {isCurrentUser && (
          <button 
            className="btn btn-outline"
            onClick={() => {/* Handle edit */}}
          >
            Edit Profile
          </button>
        )}
      </div>
      
      {data.bio && (
        <div className={styles.spacer}>
          <h2 className={styles.subTitle}>About</h2>
          <p className={styles.description}>{data.bio}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        {data.yearsAtCompany && (
          <div>
            <p className={styles.label}>Years at Company</p>
            <p className={styles.value}>{data.yearsAtCompany}</p>
          </div>
        )}
        {data.yearsInDept && (
          <div>
            <p className={styles.label}>Years in Department</p>
            <p className={styles.value}>{data.yearsInDept}</p>
          </div>
        )}
        {data.yearsInRole && (
          <div>
            <p className={styles.label}>Years in Role</p>
            <p className={styles.value}>{data.yearsInRole}</p>
          </div>
        )}
      </div>
    </section>
  );
}; 