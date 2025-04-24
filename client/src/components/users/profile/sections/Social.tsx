import { User } from '../../../../types/users';
import { profileStyles as styles } from '../../../../styles/profile';

interface SocialProps {
  data: User;
}

export const Social: React.FC<SocialProps> = ({ data }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Network & Connections</h2>

      {/* Connections Summary */}
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
        <h3 className={styles.subTitle}>Professional Links</h3>
        {data.links && data.links.length > 0 ? (
          <div className="space-y-3">
            {data.links.map(link => (
              <a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} block hover:bg-gray-100 transition-colors`}
              >
                <p className={styles.value}>{link.title || link.type}</p>
                <p className={styles.description}>{link.url}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>No professional links added</p>
        )}
      </div>

      {/* Team Memberships */}
      <div>
        <h3 className={styles.subTitle}>Team Memberships</h3>
        {data.teamMemberships && data.teamMemberships.length > 0 ? (
          <div className={styles.grid}>
            {data.teamMemberships.map(membership => (
              <div key={membership.id} className={styles.card}>
                <p className={styles.value}>Team {membership.teamId}</p>
                <p className={styles.description}>{membership.role}</p>
                <p className={styles.timestamp}>
                  Joined {new Date(membership.joinedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>No team memberships</p>
        )}
      </div>
    </section>
  );
}; 