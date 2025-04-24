import { User, Article, Project } from '../../../../../types/users';
import { profileStyles as styles } from '../../../../../styles/profile';
import { useState } from 'react';

interface ContentEditProps {
  data: User;
  onSave: (data: Partial<User>) => Promise<void>;
}

export const ContentEdit: React.FC<ContentEditProps> = ({ data, onSave }) => {
  const [formData, setFormData] = useState({
    articles: data.articles || [],
    projects: data.projects || [],
    contributedArticles: data.contributedArticles || [],
    contributedProjects: data.contributedProjects || []
  });

  // Article handlers
  const handleAddArticle = () => {
    setFormData(prev => ({
      ...prev,
      articles: [...prev.articles, {
        id: `temp-${Date.now()}`,
        title: '',
        content: '',
        authorId: data.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        published: false
      }]
    }));
  };

  const handleArticleChange = (index: number, field: keyof Article, value: any) => {
    setFormData(prev => ({
      ...prev,
      articles: prev.articles.map((article, i) => 
        i === index ? { ...article, [field]: value } : article
      )
    }));
  };

  const handleRemoveArticle = (index: number) => {
    setFormData(prev => ({
      ...prev,
      articles: prev.articles.filter((_, i) => i !== index)
    }));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Content & Contributions</h2>

      {/* Authored Content */}
      <div className={styles.spacer}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={styles.subTitle}>Articles & Contributions</h3>
          <button 
            onClick={handleAddArticle}
            className="bg-wawa-yellow-400 text-wawa-red-600 py-2 px-4 rounded-md hover:bg-wawa-yellow-500 transition-colors text-sm"
          >
            Add Article
          </button>
        </div>

        <div className="space-y-4">
          {formData.articles.map((article, index) => (
            <div key={article.id} className={`${styles.card} relative`}>
              <button
                onClick={() => handleRemoveArticle(index)}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-wawa-red-600 hover:bg-wawa-red-700 
                         flex items-center justify-center transition-colors shadow-sm font-bold"
                aria-label="Remove article"
              >
                <span className="text-white text-sm leading-none">X</span>
              </button>
              <div className="space-y-4">
                <div>
                  <label htmlFor={`article-title-${index}`} className={styles.label}>
                    Title
                  </label>
                  <input
                    id={`article-title-${index}`}
                    type="text"
                    value={article.title}
                    onChange={(e) => handleArticleChange(index, 'title', e.target.value)}
                    className="form-input w-full"
                    placeholder="Enter article title"
                  />
                </div>
                <div>
                  <label htmlFor={`article-content-${index}`} className={styles.label}>
                    Content
                  </label>
                  <textarea
                    id={`article-content-${index}`}
                    value={article.content}
                    onChange={(e) => handleArticleChange(index, 'content', e.target.value)}
                    className="form-textarea w-full"
                    rows={4}
                    placeholder="Enter article content"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={article.published}
                      onChange={(e) => handleArticleChange(index, 'published', e.target.checked)}
                      className="form-checkbox"
                    />
                    <span className={styles.label}>Published</span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contributed Content - View Only */}
      <div>
        <h3 className={styles.subTitle}>Contributions</h3>
        <div className={styles.grid}>
          <div>
            <h4 className={styles.label}>Article Contributions</h4>
            {formData.contributedArticles.length > 0 ? (
              <div className="space-y-2">
                {formData.contributedArticles.map(article => (
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
        </div>
      </div>
    </section>
  );
}; 