import { User } from '../../../../types/users';
import { profileStyles as styles } from '../../../../styles/profile';

interface ContentProps {
  data: User;
}

export const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Content & Contributions</h2>

      {/* Authored Content */}
      <div className={styles.spacer}>
        <h3 className={styles.subTitle}>Authored Content</h3>
        <div className={styles.grid}>
          {/* Articles */}
          <div>
            <h4 className={styles.label}>Articles ({data.articles?.length || 0})</h4>
            {data.articles && data.articles.length > 0 ? (
              <div className="space-y-3">
                {data.articles.map(article => (
                  <div key={article.id} className={styles.card}>
                    <p className={styles.value}>{article.title}</p>
                    <p className={styles.timestamp}>
                      {new Date(article.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>No articles authored</p>
            )}
          </div>

          {/* Projects */}
          <div>
            <h4 className={styles.label}>Projects ({data.projects?.length || 0})</h4>
            {data.projects && data.projects.length > 0 ? (
              <div className="space-y-3">
                {data.projects.map(project => (
                  <div key={project.id} className={styles.card}>
                    <p className={styles.value}>{project.name}</p>
                    <p className={styles.description}>{project.status}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>No projects led</p>
            )}
          </div>
        </div>
      </div>

      {/* Contributions */}
      <div className={styles.spacer}>
        <h3 className={styles.subTitle}>Contributions</h3>
        <div className={styles.grid}>
          {/* Contributed Articles */}
          <div>
            <h4 className={styles.label}>Article Contributions</h4>
            {data.contributedArticles && data.contributedArticles.length > 0 ? (
              <div className="space-y-3">
                {data.contributedArticles.map(article => (
                  <div key={article.id} className={styles.card}>
                    <p className={styles.value}>{article.title}</p>
                    <p className={styles.timestamp}>
                      {new Date(article.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>No article contributions</p>
            )}
          </div>

          {/* Contributed Projects */}
          <div>
            <h4 className={styles.label}>Project Contributions</h4>
            {data.contributedProjects && data.contributedProjects.length > 0 ? (
              <div className="space-y-3">
                {data.contributedProjects.map(project => (
                  <div key={project.id} className={styles.card}>
                    <p className={styles.value}>{project.name}</p>
                    <p className={styles.description}>{project.status}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>No project contributions</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 