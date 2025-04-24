import { useState } from 'react';
import { profileStyles as styles } from '../../styles/profile';

interface TagInputProps {
  label: string;
  tags: string[];
  onAdd: (tag: string) => void;
  onRemove: (index: number) => void;
  placeholder?: string;
  className?: string;
}

export const TagInput: React.FC<TagInputProps> = ({
  label,
  tags,
  onAdd,
  onRemove,
  placeholder = 'Add new...',
  className = ''
}) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className={className}>
      <label className={styles.label}>{label}</label>
      
      {/* Input row */}
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="form-input flex-1"
        />
        <button
          onClick={handleAdd}
          className="btn btn-outline px-4"
          disabled={!input.trim()}
        >
          Add
        </button>
      </div>

      {/* Tags display */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2"
          >
            <span className={styles.value}>{tag}</span>
            <button
              onClick={() => onRemove(index)}
              className="text-gray-500 hover:text-red-500"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}; 